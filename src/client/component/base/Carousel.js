import * as React from 'react';
import styled from 'styled-components';
import {Motion, spring, presets} from 'react-motion';
import ResizeObserver from 'react-resize-observer';

const CarouselContainer = styled.div`
  position: relative;
  /*overflow: hidden;*/
`;

const CarouselTrack = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
`;

const CarouselItem = styled.div`
  max-width: 100%;
  padding-right: 48px;
  flex-shrink: 0;
  display: inline-flex;
  transform: translateZ(0);
  &:last-child {
    padding-right: 0px;
  }
`;

class Carousel extends React.PureComponent {
  static defaultProps = {
    align: 'left',
  };
  state = {
    index: 0,
    width: 0,
  };
  _resizeHandlers = {};
  _timer = null;

  componentDidMount() {
    this._timer = setInterval(this.next, 3000);
  }

  componentWillUnmount() {
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }

  next = () => {
    this.setState((prev, props) => {
      const max = React.Children.count(props.children);
      const index = prev.index + 1 >= max ? 0 : prev.index + 1;
      return {index};
    });
  };

  prev = () => {
    this.setState((prev, props) => {
      const max = React.Children.count(props.children);
      const index = prev.index - 1 < 0 ? max - 1 : prev.index - 1;
      return {index};
    });
  };

  _createHandleResize = (index: number) => (rect: {width: number}) => {
    this.setState({
      [`size${index}`]: rect.width,
    });
  };

  _handleContainerResize = (rect: {width: number}) => {
    this.setState({width: rect.width});
  };

  render() {
    const {index} = this.state;
    const {children, setRef} = this.props;

    // HACK: FIXME: This should be made better... basically this is a method
    // to prevent the creation of anonymous functions on every render.
    // Sadly if the number of children change there could be leftover handlers.
    // Maybe store them in state or something I don't know.
    const handlers = React.Children.map(children, (child, i) => {
      if (!this._resizeHandlers[i]) {
        this._resizeHandlers[i] = this._createHandleResize(i);
      }
      return this._resizeHandlers[i];
    });

    let amount = 0;
    for (let i = 0; i < index; ++i) {
      amount += this.state[`size${i}`] || 0;
    }

    const itemWidth = this.state[`size${index}`] || 0;
    const containerWidth = this.state.width || 0;
    let offset;
    if (this.props.align === 'center') {
      offset = containerWidth / 2 - itemWidth / 2;
    } else if (this.props.align === 'left') {
      offset = 0;
    } else if (this.props.align === 'right') {
      offset = containerWidth - itemWidth;
    }
    amount -= offset;

    return (
      <CarouselContainer innerRef={setRef}>
        <ResizeObserver onReflow={this._handleContainerResize} />
        <Motion
          style={{
            translateX: spring(amount, presets.stiff),
          }}
        >
          {({translateX}) => (
            <CarouselTrack
              style={{
                transform: `translateX(${-translateX}px)`,
              }}
            >
              {React.Children.map(children, (child, i) => {
                return (
                  <CarouselItem isActive={i === index}>
                    <ResizeObserver onReflow={handlers[i]} />
                    {child}
                  </CarouselItem>
                );
              })}
            </CarouselTrack>
          )}
        </Motion>
      </CarouselContainer>
    );
  }
}

export default Carousel;

import * as React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'


const windowPadding = 20,
      arrowSize = 10;


/////////////////////////////////////////////////////////////////////////////////////
//  Styled Components
/////////////////////////////////////////////////////////////////////////////////////


const StyledPopover = styled.div`
  position: absolute;
  visibility: ${props => props.isVisible ? "visible" : "hidden" };
  opacity: ${props => props.isVisible ? 1 : 0 };
  transition: opacity 0.3s linear, visibility 0.3s linear;
  z-index: 999;
  top: ${props => props.top};
  left: ${props => props.left};
  background: ${props => props.backgroundColor ? props.backgroundColor : "#FFF"};
  border-radius: 4px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.1);
  &:before, 
  &:after {
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    border: ${arrowSize + "px"} solid transparent;
  };
  &:before {
    position: absolute;
    z-index: 2000;

    top: ${props => props.position === 'bottom' ? 
         -(arrowSize * 2) + 'px' :
         props.position === 'right' &&
         props.arrowPos};

    left: ${props => props.position === 'bottom' ? 
          props.arrowPos :
          props.position === 'right' &&
          -(arrowSize * 2) + 'px'};

    border-top-color: ${props => props.position === "top" && (props.backgroundColor ? props.backgroundColor : "#FFF")};
    border-right-color: ${props => props.position === "right" && (props.backgroundColor ? props.backgroundColor : "#FFF")};
    border-bottom-color: ${props => props.position === "bottom" && (props.backgroundColor ? props.backgroundColor : "#FFF")};
    border-left-color: ${props => props.position === "left" && (props.backgroundColor ? props.backgroundColor : "#FFF")};
  };
`



const StyledOverlay = styled.div`
  position: fixed;
  pointer-events: ${props => props.hoverable ? "none" : "initial"};
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(36, 32, 57, 0.9);
  opacity: ${props => props.isVisible ? 0.05 : 0.0};
  visibility: ${props => props.isVisible ? "visible" : "hidden"};
  transition: visibility 0.3s linear, opacity 0.3s linear;
`

/////////////////////////////////////////////////////////////////////////////////////
//  React: Popover
/////////////////////////////////////////////////////////////////////////////////////


export default class Popover extends React.Component {
  static defaultProps = {
    backgroundColor: "#FFF"
  }

  constructor() {
    super();

    this.state = {
      isVisible: false,
      top: '',
      left: '',
      arrowPos: ''
    }

    this.popover = React.createRef();
    this.popoverParent = React.createRef();
  }
    
  calculateOffset = (popoverParentNode) => {
    let position = {},
        bundle = {};

    bundle.rect = popoverParentNode.getBoundingClientRect();
    bundle.scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    bundle.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    bundle.clientWidth = popoverParentNode.clientWidth;
    bundle.clientHeight = popoverParentNode.clientHeight;
    bundle.popover = ReactDOM.findDOMNode(this.popover.current);

    if (this.props.position === 'bottom') {
        position = this.getPositionForBottomPopover(bundle);
    } else if (this.props.position === 'left') {
        position = this.getPositionForLeftPopover(bundle);
    } else if (this.props.position === 'right') {
        position = this.getPositionForRightPopover(bundle);
    } else if (this.props.position === 'top') {
        position = this.getPositionForTopPopover(bundle);
    }

    return position;
  }

  getPositionForBottomPopover = (bundle) => {
    let calculatedLeft = bundle.rect.left + bundle.scrollLeft + 
                         (0.5 * bundle.clientWidth) - (0.5 * bundle.popover.clientWidth);
    let left = calculatedLeft < 0 ? windowPadding :
               calculatedLeft + bundle.popover.clientWidth > window.innerWidth ? 
               window.innerWidth - 
               bundle.popover.clientWidth - 
               windowPadding :
               calculatedLeft;

    return { 
      top: bundle.rect.top + 
           bundle.scrollTop + 
           bundle.clientHeight + 
           30 + 'px',
      left: left + 'px',
      arrowPos: bundle.rect.left - 
                left - 
                arrowSize + 
                (0.5 * bundle.clientWidth) + 'px'
    }
  }

  getPositionForRightPopover = (bundle) => {
    let calculatedLeft = bundle.rect.left + bundle.scrollLeft + 
                         bundle.clientWidth + 20;
    let top = bundle.rect.top +
              bundle.scrollTop +
              ( bundle.clientHeight * 0.5) -
              ( bundle.popover.clientHeight * 0.5);

    return { 
      top: top + 'px',
      left: calculatedLeft + 'px',
      arrowPos: (bundle.popover.clientHeight * 0.5) - (arrowSize) + 'px'
    }
  }

  handleClick = () => {
    let offset = this.calculateOffset(ReactDOM.findDOMNode(this.popoverParent));
    
    this.setState({
      isVisible: !this.state.isVisible,
      top: offset.top,
      left: offset.left,
      arrowPos: offset.arrowPos
    });
  }

  handleMouseEnter = () => {
    if (ReactDOM.findDOMNode(this.popoverParent) instanceof HTMLElement) {
      let offset = this.calculateOffset(ReactDOM.findDOMNode(this.popoverParent));

      this.setState({
        isVisible: true,
        top: offset.top,
        left: offset.left,
        arrowPos: offset.arrowPos
      });
    }
  }

  handleMouseLeave = () => {
    this.setState({
      isVisible: false
    });
  }

  handleOverlayClick = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }

  render() {
    return (
      <React.Fragment>
        <StyledOverlay
          hoverable={this.props.hoverable}
          onClick={this.handleOverlayClick}
          isVisible={this.state.isVisible}/>
        <StyledPopover
          ref={this.popover}
          top={this.state.top}
          left={this.state.left}
          arrowPos={this.state.arrowPos}
          position={this.props.position}
          backgroundColor={this.props.backgroundColor}
          isVisible={this.state.isVisible}>
            { this.props.content }
        </StyledPopover>
        <div
          style={{
            cursor: "pointer",
            width: "fit-content"
          }}
          onClick={!this.props.hoverable && this.handleClick}
          onMouseEnter={this.props.hoverable && this.handleMouseEnter}
          onMouseLeave={this.props.hoverable && this.handleMouseLeave}>
            { typeof this.props.children === 'object' ?
              React.cloneElement(this.props.children, 
                                { ref: (node) => this.popoverParent = node })
                                : null}
        </div>
      </React.Fragment>
      );
  }
}



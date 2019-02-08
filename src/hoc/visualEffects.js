import React from 'react'
import styled from 'styled-components'

const ParallaxGroup = styled.div`
  position: relative; 
  transform-style: preserve-3d;
  height: 100vh;
    
  & :nth-child(1) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: scroll;
    transform: ${props => props.depth ? 'translateZ(' + props.depth + 'px) scale(' + (1 + (props.depth * -1)) + ') !important' :
                'translateZ(-0.5px) scale(1.5) !important'};
    z-index: -10;
  }
}`


export const withParallax = (WrappedComponent, depth) => {
  return class extends React.Component {
    constructor() {
      super();
      let style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = `.plx { 
        perspective: 1px;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: scroll;
      }
      html {
        overflow: hidden;
      } 
      `;
 
      document.getElementsByTagName('head')[0].appendChild(style);
    }

    componentWillMount() {
      document.body.classList.add('plx');
    }

    componentWillUnmount() {
      document.body.classList.remove('plx');
    }

    render() {
      return(
        <ParallaxGroup
          depth={-1 * depth}>
          <WrappedComponent
            {...this.props} />
        </ParallaxGroup>
      );
    }
  }
}


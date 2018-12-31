import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StImageWithCaption = styled.img`

`

const StCaption = styled.p`

`

const StWrapper = styled.div`

`

export default function ImageWithCaption(props) {
  return (
    <StWrapper>
      <StImageWithCaption
        src={props.src}/>
      <StCaption>
        {props.children}
      </StCaption>
    </StWrapper>
  );
}


ImageWithCaption.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
}

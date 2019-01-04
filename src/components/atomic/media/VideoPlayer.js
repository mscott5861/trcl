import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StVideoPlayer = styled.video`
  width: 100%;
`

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false
    }
  }

  render() {
    return (
      <StVideoPlayer/>
    );
  }
}


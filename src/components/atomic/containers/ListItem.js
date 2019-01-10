import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StListItem = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: ${props => props.height ? props.height : '7rem'};
  padding: 1rem;
  filter: grayscale(100%);
  transition: all .25s ease-out;

  :hover {
    transform: scale(1.05);
    cursor: pointer;
    filter: grayscale(0%);
  }
`

const StListItemIcon = styled.img`
  display: inline-block;
  src: ${props => props.imageSrc ? ('url(' + props.imageSrc + ')') : 'initial'};
  height: 100%;
  float: left;
`

const StListItemPrimaryText = styled.p`
  display: block;
  margin-left: 1rem;
  color: ${props => props.primaryTextColor ? props.primaryTextColor : '#333'};
  height: 50%;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.75rem;
`

const StListItemSecondaryText = styled.p`
  display: inline-block;
  margin-left: 1rem;
  color: ${props => props.secondaryTextColor ? props.secondaryTextColor : '#333'};
  height: 50%;
  line-height: 2rem;
`

const StListItemSoloText = styled.p`
  display: inline-block;
  margin-left: 1rem;
  color: ${props => props.textColor ? props.textColor : '#333'};
`

const StSingleTextContainer = styled.div`
  display: inline-block;
  height: 100%;
`

const StDoubleTextContainer = styled.div`
  display: inline-block;
  height: 100%;
`


export default function ListItem(props) {
  return(
    <StListItem
      height={props.height}>
      { props.imageSrc && props.imageSrc !== null &&
        <StListItemIcon
          src={props.imageSrc}/> }
      { props.primaryText && props.primaryText !== null &&
        props.secondaryText && props.secondaryText !== null &&
          <StDoubleTextContainer>
            <StListItemPrimaryText
              primaryTextColor={props.primaryTextColor}>
              { props.primaryText }
            </StListItemPrimaryText>
            <StListItemSecondaryText
              secondaryTextColor={props.secondaryTextColor}>
              { props.secondaryText }
            </StListItemSecondaryText> 
          </StDoubleTextContainer> }
      { props.primaryText && props.primartyText !== null &&
        props.secondaryText && props.secondaryText.length === 0 &&
          <StSingleTextContainer>
            <StListItemSoloText
              textColor={props.primaryTextColor}>
              { props.primaryText }
            </StListItemSoloText>
          </StSingleTextContainer>
      }
    </StListItem>
  );
}

ListItem.propTypes = {
  imageSrc: PropTypes.string,
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
}

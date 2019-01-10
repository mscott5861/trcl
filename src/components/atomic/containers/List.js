import React from 'react'
import styled from 'styled-components'

const StList = styled.div`
  display: block;
`

export default function List(props) {
  const children = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      height: props.listItemHeight,
      primaryTextColor: props.listItemPrimaryTextColor,
      secondaryTextColor: props.listItemSecondaryTextColor,
    });
  });

  return(
    <StList>
      { children }
    </StList>
  );
}

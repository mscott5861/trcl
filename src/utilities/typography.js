import React from 'react'

//--------------------------------------------------------------------
//  repetitions: number of repetitions of the Lorem Ipsum paragraph 
//  withLineBreaks: whether or not to include line breaks in the Lorem
//                  Ipsum text. Defaults to true.
//--------------------------------------------------------------------
export function generateLoremIpsum(repetitions = 1, withLineBreaks = true) {
  let lorem = "";

  for (let i = 0; i < repetitions; i++) {
    lorem += "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.\n"
  }

  if (withLineBreaks) {
    return lorem.split('\n').map((paragraph, idx) => {
      return <div><p key={'lorem-' + idx}>{ paragraph }</p><br/></div>;
    });
  } else {
      return lorem;
  }
}

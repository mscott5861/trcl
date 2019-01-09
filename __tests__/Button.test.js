import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { Button } from 'components'

Enzyme.configure({
  adapter: new Adapter()
});

describe('Button', () => {
  it('renders correctly', () => {
    const output = shallow(
      <Button 
        bgColor='#fff'
        label='Test Label'
        labelColor='#000'
        onClick={() => { console.log("Clicked"); }}
        />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

it('handles onClick event', () => {
  console.log = jest.fn();
  const output = shallow(
    <Button 
      onClick={() => { console.log("Clicked"); }}/>);
  output.simulate('click');
  expect(console.log).toHaveBeenCalledWith('Clicked');
});

import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { Input } from 'components'
import { withMask } from 'hoc'

Enzyme.configure({
  adapter: new Adapter()
});


//------------------------------------------------------------------
// Snapshot the Input
//------------------------------------------------------------------
describe('Input', () => {
  it('renders correctly', () => {
    const output = shallow(
        <Input
          activeLabel='Test ActiveLabel'
          activeLabelColor='#000'
          bgColor='#fff'
          borderless={false}
          borderColor='red'
          inputID='test input'
          labelColor='green'
          required
          />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});



//------------------------------------------------------------------
// Ensure displayValue is updated on keystroke
//------------------------------------------------------------------
it('updates displayValue when given keystroke', () => {
  const output = shallow(<Input/>),
        testVal = 'Z';

  expect(output.state().displayValue).toEqual('');
  output.simulate('change', {
    target: {
      name: 'test',
      value: testVal
    }});
  expect(output.state().displayValue).toEqual(testVal);
});



//------------------------------------------------------------------
// Ensure realValue is updated on keystroke
//------------------------------------------------------------------
it('updates realValue when given keystroke', () => {
  const output = shallow(<Input/>),
        testVal = 'Z';

  expect(output.state().realValue).toEqual('');
  output.simulate('change', {
    target: {
      name: 'test',
      value: testVal
    }});
  expect(output.state().realValue).toEqual(testVal);
});



//------------------------------------------------------------------
// Required components should error (hasError = true) on creation
//------------------------------------------------------------------
it('updates realValue when given keystroke', () => {
  const output = shallow(<Input required/>);
  expect(output.state().hasError).toEqual(true);
});



//------------------------------------------------------------------
// Unrequired components should not error (hasError = true) on 
// creation
//------------------------------------------------------------------
it('updates realValue when given keystroke', () => {
  const output = shallow(<Input/>);
  expect(output.state().hasError).toEqual(false);
});


//------------------------------------------------------------------
// Snapshot the MaskedInput
//------------------------------------------------------------------
describe('MaskedInput', () => {
  it('renders correctly', () => {
    const MaskedInput = withMask(Input, '*');
    const output = shallow(
        <MaskedInput
          activeLabel='Test ActiveLabel'
          activeLabelColor='#000'
          bgColor='#fff'
          borderless={false}
          borderColor='red'
          inputID='test input'
          labelColor='green'
          required
          />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

//------------------------------------------------------------------
// Inputs wrapped in withMask HOC should report the passed mask
// as the displayValue on keystroke
//------------------------------------------------------------------
it('updates displayValue with mask when given keystroke and wrapped in withMask HOC', () => {
  const MaskedInput = withMask(Input, '*'),
        maskedInput = shallow(<MaskedInput/>),
        testVal = 'Z';

  const input = maskedInput.find('Input').shallow();

  expect(input.state().displayValue).toEqual('');
  input.simulate('change', {
    target: {
      name: 'test',
      value: testVal,
    }});

  expect(input.state().displayValue).toEqual('*');
});






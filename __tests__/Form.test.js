import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { Form } from 'components'
import { withMask, withValidation } from 'hoc'

Enzyme.configure({
  adapter: new Adapter()
});

const mockFn = jest.fn();

//------------------------------------------------------------------
// Snapshot the Input
//------------------------------------------------------------------
describe('Form', () => {
  it('renders correctly', () => {
    const output = shallow(
      <Form
        onSubmit={mockFn}
        />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});



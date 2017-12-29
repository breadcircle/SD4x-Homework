import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('adds new list titled DOG', () => {
  const wrapper = mount(<App />);
  const adddog = wrapper.find('AddList');

  adddog.find('#addListDiv').get(0).value = 'DOG';
  
  const form = adddog.find('form');
  form.simulate('submit');
  expect(wrapper.find('Lists')
                .find('List')).length(1);
  expect(wrapper.state().lists[0] === 'DOG');
});
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AddList} from './AddList.js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import $ from "jquery";


describe('OnLoad, list is empty and renders without crashing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  
  it('list is empty on load', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state().lists.length).to.equal(0);
  });
});


describe("Adds New List", () => {
  const wrapper = mount(<App />);
  let adddog = wrapper.find('AddList');
  
  adddog.find('#newListId').instance().value = 'DOG';
  
  const form = adddog.find('form');
  form.simulate('submit');

  it('new list length is 1', () => {expect(wrapper.state().lists.length).to.equal(1)  });
  it('new list value is DOG', () => {expect(wrapper.state().lists[0]).to.equal('DOG')  });;
  it('new list items is an object with empty array', () => {expect(wrapper.state().items).to.equal({DOG: []}) });
});




// it('adds 2 new list titled DOG and CAT', () => {
//   const wrapper = mount(<App />);
//   const adddog = wrapper.find('AddList');

//   adddog.find('#newListId').value = 'DOG';
//   adddog.find('#newListId').value = 'CAT';
  
//   const form = adddog.find('form');
//   form.simulate('submit');
//   expect(wrapper.find('Lists')
//                 .find('List')).length(1);
//   expect(wrapper.state().lists[1]).to.equal('CAT');
//   expect(wrapper.state().items).to.equal({DOG: [], CAT: []});
// });


// it('adds item to list DOG', () => {
//   const wrapper = mount(<App />);
//   const adddog = wrapper.find('AddList');

//   adddog.find('#newListId').value = 'DOG';

//   const form = adddog.find('form');
//   form.simulate('submit');

//   const addItem = wrapper.find('Lists').find('List').find('AddItem');
//   addItem.find('addItemInput').value = 'Zuko';
//   const form2 = addItem.find('form');
//   form2.simulate('submit');

//   expect(wrapper.state().lists[0]).to.equal('DOG');
//   expect(wrapper.state().items).to.equal({DOG: [{name: "Zuko"}] });
// });



// it('add 2 items to list DOG', () => {
//   const wrapper = mount(<App />);
//   const adddog = wrapper.find('AddList');

//   // add list, DOG
//   adddog.find('#newListId').value = 'DOG';

//   const form = adddog.find('form');
//   form.simulate('submit');

//   const addItem = wrapper.find('Lists').find('List').find('AddItem');
//   const form2 = addItem.find('form');

//   // add first Item, Zuko
//   addItem.find('addItemInput').value = 'Zuko';
//   form2.simulate('submit');

//   // add second item, Bear
//   addItem.find('addItemInput').value = 'Bear';
//   form2.simulate('submit');

//   expect(wrapper.state().lists[0]).to.equal('DOG');
//   expect(wrapper.state().items).to.equal({DOG: [{name: "Zuko"}, {name: "Bear"}] });

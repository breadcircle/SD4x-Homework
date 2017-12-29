import React, { Component } from 'react';
import $ from "jquery";

class AddItem extends Component {

  constructor() {
    super();
    this.state = {
      newItem: {}
    }
  }

  handleSubmit = (e) => {
    e.preventDefault(); // this prevents the page from reloading -- do not delete this line!

    // Implement the rest of this function here!
    // var newListItem = $('#addItemInput').val();
    var newObject = { name: $('#addItemInput').val() };
    this.setState({ newItem: newObject });
    this.props.addItem(this.state.newItem);
    console.log(this.state.newItem);
  }


  render() {
    var divName = 'add' + this.props.idName;
    return (
      <div className='addItemDiv'>
        <h4>Add {this.props.idName}</h4>
        <form ref='form' onSubmit={this.handleSubmit.bind(this)}>
          <div id={divName} ref={divName}>
            <label>Name</label><br />
            <input type='text' ref='id' id="addItemInput"/>
          </div>
          <br />
          <input type='submit' value='Submit' />
          <br />
        </form>
      </div>
    );
  }

}

export default AddItem;

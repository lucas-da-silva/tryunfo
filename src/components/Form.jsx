import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form action="">
        <label htmlFor="input-name">
          Nome
          <input type="text" id="input-name" data-testid="name-input" />
        </label>
      </form>
    );
  }
}

export default Form;

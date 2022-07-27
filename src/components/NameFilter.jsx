import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameFilter extends Component {
  render() {
    const { onInputChange, nameFilter, trunfoFilter } = this.props;

    return (
      <div className="name-filter">
        <label htmlFor="name-filter">
          <input
            name="nameFilter"
            type="text"
            id="name-filter"
            placeholder="Nome da carta"
            data-testid="name-filter"
            disabled={ trunfoFilter }
            value={ nameFilter }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

NameFilter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};

export default NameFilter;

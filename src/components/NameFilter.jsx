import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameFilter extends Component {
  render() {
    const { onInputChange, nameFilter } = this.props;

    return (
      <div>
        <h4>Filtros de busca</h4>
        <label htmlFor="name-filter">
          <input
            name="nameFilter"
            type="text"
            id="name-filter"
            placeholder="Nome da carta"
            data-testid="name-filter"
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
};

export default NameFilter;

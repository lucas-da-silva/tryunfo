import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterName extends Component {
  render() {
    const { onInputChange, filterName } = this.props;

    return (
      <div>
        <h4>Filtros de busca</h4>
        <label htmlFor="name-filter">
          <input
            name="filterName"
            type="text"
            id="name-filter"
            placeholder="Nome da carta"
            data-testid="name-filter"
            value={ filterName }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

FilterName.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};

export default FilterName;

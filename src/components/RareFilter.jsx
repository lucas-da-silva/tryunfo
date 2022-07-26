import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RareFilter extends Component {
  render() {
    const { onInputChange, rareFilter } = this.props;
    return (
      <select
        name="rareFilter"
        value={ rareFilter }
        onChange={ onInputChange }
        data-testid="rare-filter"
        placeholder="Raridade"
      >
        <option value="todas">todas</option>
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>
      </select>
    );
  }
}

RareFilter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  rareFilter: PropTypes.string.isRequired,
};

export default RareFilter;

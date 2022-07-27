import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RareFilter extends Component {
  render() {
    const { onInputChange, rareFilter, trunfoFilter } = this.props;
    return (
      <div className="rareFilter">
        <select
          name="rareFilter"
          value={ rareFilter }
          onChange={ onInputChange }
          disabled={ trunfoFilter }
          data-testid="rare-filter"
          placeholder="Raridade"
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </div>
    );
  }
}

RareFilter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  rareFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};

export default RareFilter;

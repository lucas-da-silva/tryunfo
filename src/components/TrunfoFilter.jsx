import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TrunfoFilter extends Component {
  render() {
    const { onInputChange, trunfoFilter } = this.props;
    return (
      <div>
        <label htmlFor="trunfo-filter">
          <input
            type="checkbox"
            name="trunfoFilter"
            id="trunfo-filter"
            value={ trunfoFilter }
            onChange={ onInputChange }
            data-testid="trunfo-filter"
          />
          Super Trunfo
        </label>
      </div>
    );
  }
}

TrunfoFilter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};

export default TrunfoFilter;

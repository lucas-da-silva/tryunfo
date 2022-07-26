import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class GetCards extends Component {
  render() {
    const { cards, filterName, removeCard } = this.props;
    const htmlCards = [];
    let letters = cards;

    if (filterName !== '') {
      // const filtered = cards.filter(({ cardName }) => cardName.startsWith(filterName));
      const filtered = cards.filter(({ cardName }) => cardName.includes(filterName));
      letters = filtered;
    }

    letters.forEach((letter) => {
      const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
        cardImage, cardRare, cardTrunfo } = letter;
      const htmlCard = (<Card
        key={ cardName }
        cardName={ cardName }
        cardDescription={ cardDescription }
        cardImage={ cardImage }
        cardAttr1={ cardAttr1 }
        cardAttr2={ cardAttr2 }
        cardAttr3={ cardAttr3 }
        cardRare={ cardRare }
        cardTrunfo={ cardTrunfo }
        removeCard={ removeCard }
        buttonDelete
      />);
      htmlCards.push(htmlCard);
    });

    return (htmlCards);
  }
}

GetCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterName: PropTypes.string,
  removeCard: PropTypes.func.isRequired,
};

GetCards.defaultProps = {
  filterName: '',
};

export default GetCards;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class GetCards extends Component {
  render() {
    const { cards, nameFilter, removeCard, rareFilter } = this.props;
    const htmlCards = [];
    let letters = cards;
    if (rareFilter !== 'todas') {
      letters = cards.filter(({ cardRare }) => cardRare === rareFilter);
    }
    // const filtered = cards.filter(({ cardName }) => cardName.startsWith(nameFilter));
    letters = letters.filter(({ cardName }) => cardName.includes(nameFilter));

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
  nameFilter: PropTypes.string,
  removeCard: PropTypes.func.isRequired,
  rareFilter: PropTypes.string.isRequired,
};

GetCards.defaultProps = {
  nameFilter: '',
};

export default GetCards;

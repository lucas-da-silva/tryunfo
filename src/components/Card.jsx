import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, buttonDelete, removeCard } = this.props;

    const button = (
      <button onClick={ removeCard } type="button" data-testid="delete-button">
        Excluir
      </button>
    );

    return (
      <div className="card">
        <p data-testid="name-card">{cardName}</p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p className="pre-name" data-testid="description-card">{cardDescription}</p>
        <p className="pre-attr1" data-testid="attr1-card">
          Atributo 1:
          {' '}
          {cardAttr1}
        </p>
        <p className="pre-attr2" data-testid="attr2-card">
          Atributo 2:
          {' '}
          {cardAttr2}
        </p>
        <p className="pre-attr3" data-testid="attr3-card">
          Atributo 3:
          {' '}
          {cardAttr3}
        </p>
        <p className="pre-rare" data-testid="rare-card">{cardRare}</p>
        {
          cardTrunfo === true
          && <p className="pre-trunfo" data-testid="trunfo-card">Super Trunfo</p>
        }
        {
          buttonDelete === true && button
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  buttonDelete: PropTypes.bool,
  removeCard: PropTypes.func,
};

Card.defaultProps = {
  buttonDelete: false,
  removeCard: func,
};

export default Card;

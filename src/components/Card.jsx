import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, buttonDelete, removeCard } = this.props;

    const button = (
      <button
        onClick={ removeCard }
        className="delete-button"
        type="button"
        data-testid="delete-button"
      >
        Excluir
      </button>
    );

    const trunfo = (
      <div className="trunfo-div">
        <p className="trunfo" data-testid="trunfo-card"><u>Trunfo</u></p>
      </div>
    );

    let rare;
    if (cardRare === 'normal') {
      rare = 'rare-normal';
    } else if (cardRare === 'raro') {
      rare = 'rare-raro';
    } else if (cardRare === 'muito raro') {
      rare = 'rare-muito-raro';
    }

    return (
      <div className="card">
        <div className="card-div">
          <div className="name-div">
            <p className="name-card" data-testid="name-card">{cardName}</p>
            <p className={ `rare-card, ${rare}` } data-testid="rare-card">{cardRare}</p>
          </div>
          {
            cardTrunfo === true && trunfo
          }
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <div className="description-card">
            <p
              data-testid="description-card"
            >
              {cardDescription}
            </p>
          </div>
          <div className="attrs-div">
            <div className="attr1-div">
              <p className="attr1" data-testid="attr1-card">
                Força:
              </p>
              <p className="attr1-value">{cardAttr1}</p>
            </div>
            <div className="attr2-div">
              <p className="attr2" data-testid="attr2-card">
                Velocidade:
              </p>
              <p className="attr2-value">{cardAttr2}</p>
            </div>
            <div className="attr3-div">
              <p className="attr3" data-testid="attr3-card">
                Observação:
              </p>
              <p className="attr2-value">{cardAttr3}</p>
            </div>
          </div>
          {
            buttonDelete === true && button
          }
        </div>
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

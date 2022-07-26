import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import GetCards from './components/GetCards';
import NameFilter from './components/NameFilter';
import RareFilter from './components/RareFilter';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardImage: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
    nameFilter: '',
    rareFilter: 'todas',
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      this.validationButtonSubmit();
    });
  }

  validationButtonSubmit = () => {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2,
      cardAttr3 } = this.state;
    let buttonIsDisabled = true;
    const cardLimit = 91;
    const totalLimit = 211;

    const sum = parseFloat(cardAttr1)
    + parseFloat(cardAttr2) + parseFloat(cardAttr3) < totalLimit;
    const min = cardName.length > 0 && cardDescription.length > 0 && cardImage.length > 0;
    const max = cardAttr1 < cardLimit && cardAttr2 < cardLimit && cardAttr3 < cardLimit;
    const negative = cardAttr1 >= 0 && cardAttr2 >= 0 && cardAttr3 >= 0;

    if (sum && min && max && negative) {
      buttonIsDisabled = false;
    }

    this.setState({ isSaveButtonDisabled: buttonIsDisabled });
  }

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo } = this.state;
    const existTrunfo = cardTrunfo === true;
    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };

    this.setState((previState) => ({
      cards: [...previState.cards, card],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: existTrunfo,
      isSaveButtonDisabled: true,
    }));
  }

  removeCard = ({ target }) => {
    const superTrunfo = target.previousElementSibling.innerHTML === 'Super Trunfo';
    if (superTrunfo) {
      this.setState({ hasTrunfo: false });
    }
    target.parentElement.remove();
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      cards, nameFilter, rareFilter } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <h3>Todas as cartas</h3>
        <NameFilter
          onInputChange={ this.onInputChange }
          nameFilter={ nameFilter }
        />
        <RareFilter
          onInputChange={ this.onInputChange }
          rareFilter={ rareFilter }
        />
        <div>
          { cards.length > 0 && <GetCards
            cards={ cards }
            nameFilter={ nameFilter }
            removeCard={ this.removeCard }
            rareFilter={ rareFilter }
          />}
        </div>
      </div>
    );
  }
}

export default App;

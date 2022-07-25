import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form action="">
        <div>
          <label htmlFor="name-input">
            Nome
            <input name="name" type="text" id="name-input" data-testid="name-input" />
          </label>
        </div>

        <div>
          <label htmlFor="description-input">
            Descrição
            <textarea
              name="description"
              id="description-input"
              data-testid="description-input"
              cols="30"
              rows="10"
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr1-input">
            Atributo 1
            <input
              type="number"
              name="attr1"
              id="attr1-input"
              data-testid="attr1-input"
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr2-input">
            Atributo 2
            <input
              type="number"
              name="attr2"
              id="attr2-input"
              data-testid="attr2-input"
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr3-input">
            Atributo 3
            <input
              type="number"
              name="attr3"
              id="attr3-input"
              data-testid="attr3-input"
            />
          </label>
        </div>

        <div>
          <label htmlFor="imagem-input">
            Imagem
            <input
              type="text"
              name="image"
              id="imagem-input"
              data-testid="image-input"
            />
          </label>
        </div>

        <div>
          <label htmlFor="rare-input">
            Raridade
            <select name="rare" id="rare-input" data-testid="rare-input">
              <option label="normal" value="normal">normal</option>
              <option label="raro" value="raro">raro</option>
              <option label="muito raro" value="muito raro">muito raro</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="trunfo-input">
            <input
              type="checkbox"
              name="trunfo"
              id="trunfo-input"
              data-testid="trunfo-input"
            />
            Super Trybe Trunfo
          </label>
        </div>

        <div>
          <button type="button" data-testid="save-button">Salvar</button>
        </div>
      </form>
    );
  }
}

export default Form;

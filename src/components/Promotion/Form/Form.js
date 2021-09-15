import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './Form.css';

const initialValue = {
  title: '',
  url: '',
  imageUrl: '',
  price: 0
};

const PromotionForm = () => {
  const [values, setValues] = useState(initialValue);
  const history = useHistory();

  function onChange(ev) {
    const { name, value } = ev.target;

    // não se usa assim no React;
    // values[name] = value;

    // deve-se criar um novo objeto igual ao original e alterar a propriedade.
    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();

    axios.post('http://localhost:3000/promotions', values).then(res => {
      history.push('/');
    });
  }

  return (
    <div>
      <h1>Pomo Show</h1>
      <h2>Nova Promoção</h2>

      <form onSubmit={onSubmit}>
        <div className="promotion-form__group">
          <label htmlFor="title">Título</label>
          <input type="text" id="title" name="title" onChange={onChange} />
        </div>

        <div className="promotion-form__group">
          <label htmlFor="url">Link</label>
          <input type="text" id="url" name="url" onChange={onChange} />
        </div>

        <div className="promotion-form__group">
          <label htmlFor="imageUrl">Imagem</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            onChange={onChange}
          />
        </div>

        <div className="promotion-form__group">
          <label htmlFor="price">Preço</label>
          <input type="number" id="price" name="price" onChange={onChange} />
        </div>

        <div>
          <button type="submit">Salvar</button>
        </div>

        <div />
      </form>
    </div>
  );
};

export default PromotionForm;

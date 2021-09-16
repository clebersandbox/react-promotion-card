import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './Form.css';

const initialValue = {
  title: '',
  url: '',
  imageUrl: '',
  price: 0
};

const PromotionForm = ({ id }) => {
  const [values, setValues] = useState(initialValue);
  const history = useHistory();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/promotions/${id}`).then(res => {
        setValues(res.data);
      });
    }
  }, []);

  function onChange(ev) {
    const { name, value } = ev.target;

    // não se usa assim no React;
    // values[name] = value;

    // deve-se criar um novo objeto igual ao original e alterar a propriedade.
    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();

    const method = id ? 'put' : 'post';
    const url = id
      ? 'http://localhost:3000/promotions/' + id
      : 'http://localhost:3000/promotions';

    axios[method](url, values).then(res => {
      history.push('/');
    });
  }

  return (
    <div>
      <h1>Pomo Show</h1>
      <h2>Nova Promoção</h2>
      {!values ? (
        <div>Carregando...</div>
      ) : (
        <form onSubmit={onSubmit}>
          <div className="promotion-form__group">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={onChange}
              value={values.title}
            />
          </div>

          <div className="promotion-form__group">
            <label htmlFor="url">Link</label>
            <input
              type="text"
              id="url"
              name="url"
              onChange={onChange}
              value={values.url}
            />
          </div>

          <div className="promotion-form__group">
            <label htmlFor="imageUrl">Imagem</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              onChange={onChange}
              value={values.imageUrl}
            />
          </div>

          <div className="promotion-form__group">
            <label htmlFor="price">Preço</label>
            <input
              type="number"
              id="price"
              name="price"
              onChange={onChange}
              value={values.price}
            />
          </div>

          <div>
            <button type="submit">Salvar</button>
          </div>

          <div />
        </form>
      )}
    </div>
  );
};

export default PromotionForm;

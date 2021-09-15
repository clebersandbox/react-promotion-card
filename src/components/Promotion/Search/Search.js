import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Search.css';
import PromotionList from '../../../components/Promotion/List/List';

const PromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);

  const [search, setSearch] = useState('');

  useEffect(() => {
    const params = {};

    if (search) {
      params.title_like = search;
    }

    setPromotions([]);
    axios
      .get(
        'http://localhost:3000/promotions?_embed=comments&_order=desc&_sort=id',
        { params }
      )
      .then(res => {
        setPromotions(res.data);
      });
  }, [search]);

  return (
    <div className="promotion-search">
      <header className="promotion-search__header">
        <h1>Promo Show</h1>
        <Link to="/create">Nova Promoção</Link>
      </header>
      <input
        type="search"
        placeholder="Buscar"
        className="promotion-search__input"
        value={search}
        onChange={ev => setSearch(ev.target.value)}
      />

      <PromotionList isLoading={!promotions.length} promotions={promotions} />
    </div>
  );
};

export default PromotionSearch;

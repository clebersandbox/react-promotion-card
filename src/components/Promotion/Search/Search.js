import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import useApi from '../../components/utils/useApi';
import './Search.css';
import PromotionList from '../../../components/Promotion/List/List';

const PromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);
  const [search, setSearch] = useState('');
  const [load, loadInfo] = useApi({
    url: 'http://localhost:3000/promotions?',
    method: 'get',
    params: {
      _embed: comments,
      _order: desc,
      _sort: id,
      title_like: search || undefined
    },
    onCompleted: () => {
      setPromotions(res.data);
    }
  });

  console.log(loadInfo);

  useEffect(() => {
    const params = {};

    if (search) {
      params.title_like = search;
    }

    setPromotions([]);
    load();
    // axios
    //   .get(
    //     'http://localhost:3000/promotions?_embed=comments&_order=desc&_sort=id',
    //     { params }
    //   )
    //   .then(res => {
    //     setPromotions(res.data);
    //   });
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

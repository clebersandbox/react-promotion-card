import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import './Search.css';
import PromotionCard from '../../../components/Promotion/Card/Card';

const PromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/promotions?_embed=comments').then(res => {
      setPromotions(res.data);
    });
  }, []);

  return (
    <div className="promotion-search">
      <header className="promotion-search__header">
        <h1 className="promotion-search__h1">Promo Show</h1>
        <Link to="/create">Nova Promoção</Link>
      </header>
      <section className="promotion-search__section">
        <input type="search" />
      </section>
      {promotions.map(promo => (
        <PromotionCard promotion={promo} />
      ))}
    </div>
  );
};

export default PromotionSearch;

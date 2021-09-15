import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PromotionCard from '../../../components/Promotion/Card/Card';

const PagesPromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/promotions?_embed=comments').then(res => {
      setPromotions(res.data);
    });
  }, []);

  return (
    <div
      style={{
        maxWidth: 800,
        margin: '30px auto'
      }}
    >
      {promotions.map(promo => (
        <PromotionCard promotion={promo} />
      ))}
    </div>
  );
};

export default PagesPromotionSearch;

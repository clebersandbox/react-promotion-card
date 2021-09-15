import React from 'react';

import PromotionCard from '../Card/Card';
import './List.css';

const PromotionList = ({ isLoading, promotions }) => {
  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="promotion-list">
      {promotions.map(promo => (
        <PromotionCard promotion={promo} />
      ))}
    </div>
  );
};

export default PromotionList;

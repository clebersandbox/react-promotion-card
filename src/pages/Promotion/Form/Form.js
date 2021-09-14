import React from 'react';
import { useParams }  from 'react-router-dom';

const PagesPromotionForm = () => {

  const { id } = useParams();

  return (
    <div>
      <div>Promotion Form Page</div>
      {id && (
        <div> ID: {id}</div>
      )}
    </div>
  );
};

export default PagesPromotionForm;

import React from 'react';
import './style.css';

import PromotionCard from './components/Promotion/Card/Card';

export default function App() {
  const promotion = {
    id: 1,
    title:
      'Kit Notebook Acer Aspire 3 + Mochila Green, A315-41-R790, AMD Ryzen 3 2200U Dual Core',
    price: 1799,
    imageUrl:
      'https://images-americanas.b2w.io/produtos/01/00/img7/01/00/item/3694286/5/3694286524_1GG.jpg',
    url: 'http://www.amazon.com.br',
    comments: [
      {
        id: 1,
        comment: 'TELA HD'
      }
    ]
  };

  return (
    <div
      className="App"
      style={{
        maxWidth: 800,
        margin: '30px auto'
      }}
    >
      <PromotionCard promotion={promotion} />
    </div>
  );
}

import React from 'react'
import products from './products.json';
import { useParams } from 'react-router-dom'

// TODO: fetch image url
export default function ItemID() {
  const { id } = useParams();
  const data = products[id];

  return (
    <div>
        <div key={data.id}>
          <p>Item Name: {data.title}</p>
          <p>Item price: ${data.price}</p>
          <p>Quantity: {data.qty}</p>
          <p>Description: {data.qty}</p>
          <button>Add to cart</button>
        </div>
    </div>
  )
}

import products from './products';
import { useParams } from 'react-router-dom';
import './ItemID.css'

export default function ItemID() {
  const { id } = useParams();
  const data = products[id];
  const url = data.image;

  const addToCart = () => {
    alert('Added to cart!');
    // TODO: something to backend
  }

  return (
    <div class="row">
      <div class="column">
        <img class="item-image" src={url} alt="item description" />
      </div>
      <div class="column">
        <div class="item-description">
          <h1>{data.title}</h1>
          <p>Item price: ${data.price}</p>
          <p>Quantity: {data.qty}</p>
          <p>Description: {data.description}</p>
          <button onClick={addToCart}>Add to cart</button>
        </div>
      </div>
    </div>

  )
}
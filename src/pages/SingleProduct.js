import { Link, useParams} from 'react-router-dom';

import Error from './Error';
import products from '../data';

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  if(!product) {
    return <Error/>
  }
  const { name, image } = product;
  return (
    <section className='section'>
      <img src={image} alt={name}/>
      <h5>{name}</h5>
      <Link to='/products' className='btn'> Back to products </Link>
    </section>
  );
};

export default SingleProduct;

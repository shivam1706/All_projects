import React from 'react';
import defaultImage from '../../../assets/default-image.jpeg';
import PropTypes from 'prop-types';

const Product = ({image,name,price}) => {
  return (<article className='product'>
    <img src={image.url || defaultImage} alt={name}/>
    <h4>{name}</h4>
    <p>${price}</p>
  </article>
  );

};

Product.propTypes=
{
  image:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
}

Product.defaultProps=
{
  name:'default-image',
  price:3.99,
  image:defaultImage,
};
export default Product;

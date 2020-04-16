import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Product from './Product';

const products = [
	{
		id : 1,
		slug : 'iphone',
		name : 'Iphone X',
		price : 1200
	},
	{
		id : 2,
		slug : 'samsung',
		name : 'SamSung Galaxy',
		price : 1520
	},
	{
		id : 3,
		slug : 'oppo',
		name : 'Oppo',
		price : 500
	},
];

class Products extends React.Component {
  render() {

  	var { match } = this.props;
  	var url = match.url;

  	var result = products.map((product, index) => {
  		return 	(
  			<NavLink to={`${ url }/${ product.slug }`} key={index}>
  				<li className="list-group-item">
				    { `${ product.id } - ${ product.name } - ${ product.price }$` }
				  </li>
  			</NavLink>
  		);
  	})

  	var { location } = this.props;
  	console.log(location);

    return (
    	<div className="container m-auto">
    		<h3>Danh sách sản phẩm</h3>
    		<div className="list-group">
	    		{ result }
			  </div>
			  <div className="row">
			  	<Route path="/products/:slug" component={ Product } />
			  </div>
			</div>
    );
  }
}

export default Products;
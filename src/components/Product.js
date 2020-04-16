import React from 'react';

class Product extends React.Component {
  render() {
    var { match } = this.props;
    var { slug } = match.params;
    console.log(slug);
    return (
    	<div className="container my-5 alert alert-info" role="alert">
            <strong>Heads up!</strong> Chi tiết sản phẩm: { slug }
        </div>
    );
  }
}

export default Product;
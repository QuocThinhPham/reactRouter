import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
    	<div class="alert alert-danger" role="alert">
    		<h1>404</h1>
    		<h5>Not Found</h5>
    	</div>
    );
  }
}

export default NotFound;
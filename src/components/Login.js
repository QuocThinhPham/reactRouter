import React from 'react';
import { Prompt, Redirect } from 'react-router-dom';

class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username : '',
			password : ''
		};
	}

	onChange = (event) => {
		var target = event.target;
		var name = target.name;
		var value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({
			[name] : value
		});
	}

	onLogin = (event) => {
		event.preventDefault();
		var { username, password } = this.state;
		if(username === 'root' && password === '123') {
			localStorage.setItem('user', JSON.stringify({
				username : username,
				password : password
			}));
		}
	}

  render() {
  	var { username, password } = this.state;
  	var loggedInUser = localStorage.getItem('user');
  	if(loggedInUser !== null) {
  		var { location } = this.props;
  		return 	<Redirect to={{
				  			pathname : '/products',
				  			state : {
				  				from : location
				  			}
				  		}}
  						/>;
  	}
    return (
    	<div className="container mt-5">
    		<form className="col-6 mx-auto" onSubmit={ this.onLogin }>
    			<h3 className="text-center text-uppercase mb-4">Đăng nhập</h3>
    		  <div className="form-group">
    		    <label htmlFor="exampleInputEmail1">Tên đăng nhập</label>
    		    <input
	    		    type="text"
	    		    name="username"
	    		    className="form-control"
	    		    id="exampleInputEmail1"
	    		    aria-describedby="emailHelp"
	    		    placeholder="Enter email"
	    		    autoComplete="off"
	    		    value={ username }
	    		    onChange={ this.onChange }
    		    />
    		  </div>
    		  <div className="form-group">
    		    <label htmlFor="exampleInputPassword1">Mật khẩu</label>
    		    <input
	    		    type="password"
	    		    name="password"
	    		    className="form-control"
	    		    id="exampleInputPassword1"
	    		    placeholder="Password"
	    		    autoComplete="off"
	    		    value={ password }
	    		    onChange={ this.onChange }
    		    />
    		  </div>
    		  <div className="form-group">
    		  	<button type="submit" className="btn btn-outline-dark btn-sm">Đăng nhập</button>
    		  </div>
    		</form>
    	</div>
    );
  }
}

export default Login;
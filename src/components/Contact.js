import React from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isChecked : false
		};
	}

	onChecked = (value) => {
		this.setState({
			isChecked : value
		});
	}

  render() {
    return (
    	<div className="container mt-5">
    		<h3 className="text-center text-uppercase mb-4">Contact</h3>
    		<form>
				  <div className="form-group row">
				    <label htmlFor="inputEmail3" className="col-sm-2 form-control-label">Email</label>
				    <div className="col-sm-10">
				      <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
				    </div>
				  </div>
				  <div className="form-group row">
				    <label htmlFor="inputPassword3" className="col-sm-2 form-control-label">Content</label>
				    <div className="col-sm-10">
						  <textarea className="form-control" defaultValue={""} />
				    </div>
				  </div>
				  <div className="form-group row">
				    <div className="col-sm-offset-2 col-sm-10">
				      <button type="submit" className="btn btn-secondary">Send</button>
				    </div>
				  </div>
				</form>
				<button type="button" className="btn btn-outline-dark" onClick={ () => this.onChecked(false) }>Cho phép</button>
				<button type="button" className="btn btn-outline-dark" onClick={ () => this.onChecked(true) }>Không cho phép</button>
				<Prompt
					when={this.state.isChecked}
					message={ location => (`Bạn chắc chắn muốn đi đến ${location.pathname}`) }
				/>
    	</div>
    );
  }
}

export default Contact;
import React from 'react';
import { Route, Link } from 'react-router-dom';

const menu = [
	{
		label : 'Trang Chủ',
		to : '/',
		activeOnlyWhenExact : true
	},
	{
		label : 'Sản phẩm',
		to : '/products',
		activeOnlyWhenExact : false
	},
	{
		label : 'Giới Thiệu',
		to : '/about',
		activeOnlyWhenExact : false
	},
	{
		label : 'Liên hệ',
		to : '/contact',
		activeOnlyWhenExact : false
	},
  {
    label : 'Đăng nhập',
    to : '/login',
    activeOnlyWhenExact : false
  },
];

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
      <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
        var active = match ? 'active' : '';
        return (
          <li className={ 'nav-item ${ active }' }>
            <Link to={to} className="nav-link">{label}</Link>
          </li>
        )
      }} />
    );
  }

class Menu extends React.Component {



  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            { this.showMenu(menu) }
          </ul>
        </div>
      </nav>
    );
  }

  showMenu = (menu) => {
  	var result = null;
  	if(menu.length > 0) {
  		result = menu.map( (item, index) => {
  			return 	<MenuLink
  								key={index}
					  			label={ item.label }
					  			to={ item.to }
					  			activeOnlyWhenExact={ item.activeOnlyWhenExact }
					  		/>
  		} )
  	}
  	return result;
  }

  
}

export default Menu;

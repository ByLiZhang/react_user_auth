import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeAuth } from '../actions';

class Nav extends Component {
	renderButton(){
		if(this.props.auth){
			return <button onClick={() => this.props.changeAuth(false)} className ='btn btn-danger'>Sign Out</button>
		}

		return <button onClick={() => this.props.changeAuth(true)} className ='btn btn-outline-light'>Sign In</button>
	}

	render(){
		const linkStyle = {
			color: 'white'
		};

		console.log('Auth:', this.props.auth);

		return (
			<nav className='navbar bg-primary mb-4'>
				<Link style= {linkStyle} className='nav-link' to='/'>HOME</Link>
				<Link style= {linkStyle} className='nav-link' to='/about-us'>About us</Link>
				<Link style= {linkStyle} className='nav-link' to='/secret-docs'>Secret Docs</Link>
				<Link style= {linkStyle} className='nav-link' to='/operatives-list'>Operatives List</Link>
				{this.renderButton()}
			</nav>
		)
	}
}

function mapStateToProps(state) {
	return {
		auth: state.user.auth
	}
}

export default connect(mapStateToProps, { changeAuth })(Nav);
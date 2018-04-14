import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeAuth } from '../actions';
import { signOut } from '../actions';

const linkStyle = {
			color: 'white'
};

class Nav extends Component {
	// renderButton(){
	// 	if(this.props.auth){
	// 		return <button onClick={() => this.props.changeAuth(false)} className ='btn btn-danger'>Sign Out</button>
	// 	}

	// 	return <button onClick={() => this.props.changeAuth(true)} className ='btn btn-outline-light'>Sign In</button>
	// }

	renderLinks(){
		if(this.props.auth){
			return [				
				<Link key='0' style= {linkStyle} className='nav-link' to='/secret-docs'>Secret Docs</Link>,
				<Link key='1' style= {linkStyle} className='nav-link' to='/operatives-list'>Operatives List</Link>,
				<Link key='2' style= {linkStyle} className='nav-link' to='/movie-quote'>Movie Quote</Link>,
				<button key='3' className='btn btn-light' onClick={this.props.signOut}> Sign Out</button>
			]
		}

		return [
			<Link key='0' style= {linkStyle} className='nav-link' to='/sign-up'>Sign Up</Link>,
			<Link key='1' style= {linkStyle} className='nav-link' to='/sign-in'>Sign In</Link>
		];

	}

	render(){
		

		console.log('Auth:', this.props.auth);

		return (
			<nav className='navbar bg-primary mb-4'>
				<Link style= {linkStyle} className='nav-link' to='/'>HOME</Link>
				<Link style= {linkStyle} className='nav-link' to='/about-us'>About us</Link>
				{this.renderLinks()}
				{/* {this.renderButton()} */}
			</nav>
		)
	}
}

function mapStateToProps(state) {
	return {
		auth: state.user.auth
	}
}

export default connect(mapStateToProps, { signOut })(Nav);
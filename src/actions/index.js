import types from './types';
import axios from 'axios';


// export function changeAuth(isAuth){
// 	return {
// 		type: types.CHANGE_AUTH,
// 		payload: isAuth
// 	};
// }
export function signUp(cred) {
	return (dispatch) => {
		axios.post('http://api.reactprototypes.com/signup', cred).then( resp => {

			localStorage.setItem('token', resp.data.token); //must be a string.

			dispatch({
				type: types.SIGN_UP
			});
		});
	}
}

export function signIn(cred) {
	return (dispatch) => {
		axios.post('http://api.reactprototypes.com/signin', cred).then( resp => {
			localStorage.setItem('token', resp.data.token); //must be a string.

			dispatch({
				type: types.SIGN_IN
			});
		});
	}
}

export function signOut(cred) {

		localStorage.removeItem('token'); //must be a string.

		return {
			type: types.SIGN_OUT
		};
}

export function handleInputChange(event){
	event.preventDefault();
	const { name, value } = event.target;
	return {
		type: types.INPUT_CHANGE,
		name,
		value
	};
}

export function formError(error) {
	return {
		type: types.FORM_ERROR,
		error
	}
}

export function getQuote() {
	return async (dispatch) => {
		const axiosConfig = {
			headers: {
				authorization: localStorage.getItem('token')
			}
		}
		try {
			const response = await axios.get('http://api.reactprototypes.com', axiosConfig);

			dispatch({
				type: types.GET_QUOTE,
				payload: response.data.message
			});
		} catch(err){
			console.log('ERROR:', err.message);
		}
	} 
}

// export function defineInput(name) {
// 	return {
// 		type: types.DEFINE_INPUT,
// 		name
// 	};
// }
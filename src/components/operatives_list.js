import React from 'react';
import auth from '../HOC/auth';

const OpList = props => (
	<div>
		<h1 className='text-center'>Op List</h1>
		<ol>
			<li>Andy</li>
			<li>Bobby</li>
			<li>Chuck</li>
			<li>Duker</li>
			<li>Emery</li>
		</ol>
	</div>
)

export default auth(OpList);
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
const hashFunc = require('hash.js');
const SALT = 'codestates';
const hash = (text) =>
	hashFunc
		.sha256()
		.update(text + SALT)
		.digest('hex');

function App() {
	const [inputText, setInputText] = useState('');
	const [result, setResult] = useState('');

	const clearText = () => {
		setInputText('');
		setResult('');
	};

	const updateText = (e) => {
		setInputText(e.target.value);
		setResult(hash(e.target.value));
		console.log(result);
	};

	return (
		<div className='App' style={{ width: '90%' }}>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<textarea
					style={{
						width: '99%',
						height: '200px',
						margin: '20px',
						resize: 'none',
					}}
					placeholder='Enter a data you want to encode by SHA256'
					type='text'
					onChange={updateText}
					value={inputText}></textarea>
				<button
					style={{ width: '100%', margin: '0px 20px' }}
					onClick={clearText}>
					Clear
				</button>
				<div
					style={{
						width: '100%',
						height: '20px',
						margin: '20px',
						border: '1px solid whitesmoke',
						textAlign: 'left',
					}}>
					{'Result: ' + result}
				</div>
			</div>
		</div>
	);
}

export default App;

import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { encode, decode } from 'js-base64';

const hash = (text) => encode(text);

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
						width: '90vw',
						height: '10vw',
						margin: '20px',
						resize: 'none',
					}}
					placeholder='Enter a data you want to encode by BASE64'
					type='text'
					onChange={updateText}
					value={inputText}></textarea>
				<button
					style={{ width: '15vw', margin: '0px auto' }}
					onClick={clearText}>
					Clear
				</button>
				<div
					style={{
						width: '90vw',
						height: '5vw',
						margin: '20px',
						border: '1px solid whitesmoke',
						textAlign: 'left',
						overflow: 'auto',
					}}>
					<span>Result: </span>
					<span className='result'>{result}</span>
				</div>
				<button
					style={{ width: '15vw', margin: '0px auto' }}
					onClick={() => {
						const range = document.createRange();
						range.selectNode(document.querySelector('.result').childNodes[0]);
						const select = window.getSelection();
						select.removeAllRanges();
						select.addRange(range);
						document.execCommand('copy');
						select.removeRange(range);
					}}>
					Copy
				</button>
			</div>
		</div>
	);
}

export default App;

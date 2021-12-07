// import logo from './logo.svg';
import './App.css';
import {marked} from 'marked'
import {useState} from 'react'
import Preview from './components/Preview';


const initialText = `### How To Use The MarkDown Previewer 
1. Type in stuff on the left.	
2. See the live updates on the right.	
That's it.  Pretty simple.`

const initialState = {__html:marked.parse(initialText)}

function App() {

	const [mark, setmark] = useState(initialState)
	
	const handleChange=(input)=>{

		const parsed = marked.parse(input.target.value)
		
		const clean={
			__html:parsed
		}
		console.log(clean)
		setmark(clean)
	}

	return (
    <div className="App">
     <textarea className="editor" id='editor' onChange={handleChange}/>
		
		 <Preview>
			{mark}
		 </Preview>
    </div>
  );
}

export default App;

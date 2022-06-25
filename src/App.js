import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
	const [categories, setCategories] = React.useState([]);
  
	React.useEffect(() => {
	  fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=b440d88bec574f33855e67157333df2c`)
		.then((res) => res.json())
		.then((data) => {
			let arr=[]
			if(true)
			{
				data.sources.map((val)=>{
					arr.push(val.category)
				})
			}
			if(true)
			{
				let unq = [...new Set(arr)];
				//console.log(unq);
				setCategories(unq);
			}


		});
	}, []);

	function handlelog(){
		window.location.href="/"
	}

  
	return (
	<div>
		<div>
			<h1 style={{textAlign:"center"}}>Home Page</h1>
			<button className='logoutbtn btn btn-danger' onClick={handlelog}>Logout</button>
		</div>
	  <div>
		<ul>
			{categories && categories.map((cat) => {
				return <li><Link to={`/category/${cat}`}>{cat}</Link> </li>
			})}
      	</ul>
	  </div>
	</div>
	);
  }
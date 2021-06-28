import scissors from './scissors.jpg';
import stone from './stone.jpg';
import paper from './paper.jpg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [userChoice, setUserChoice]=useState(null)
  const [compChoice, setCompChoice]=useState(null)
  const [result, setResult] = useState(null)
  const choices = ['stone', 'paper', 'scissors']
  const handleClick = (val) =>{
    setUserChoice(val);
    genCompChoice()

  }

  const genCompChoice = () =>{
    const randomChoice = choices[Math.floor(Math.random()*choices.length)];
    setCompChoice(randomChoice)
  }

useEffect (()=>{
  {
  switch(userChoice + compChoice){
        case 'scissorspaper':
        case 'stonescissors':
        case 'paperstone':
          setResult('You Win!')
          break
        case 'paperscissors':
        case 'scissorsstone':
        case 'stonepaper':
          setResult('Sorry, You Lose :(')
          break
        case 'stonestone':
        case 'paperpaper':
        case 'scissorsscissors':
          setResult('It`s a draw!')
          break
  }
}
 },[userChoice,compChoice])

 function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="App">
      <h1>
        Stone scissors paper
      </h1>
      <div className="main">
        <div className="yourChoice">
          <input type="button" onClick={()=>handleClick('stone')} id="stone" name="stone" value="stone"/>
          <label for="stone"><img src={stone}/></label>
          <input type="button" onClick={()=>handleClick('paper')} id="paper" name="paper" value="paper"/>
          <label for="paper"><img src={paper}/></label>
          <input type="button" onClick={()=>handleClick('scissors')} id="scissors" name="scissors" value="csissors"/>
          <label for="scissors"><img src={scissors}/></label>
          <div className="center"><h3>Your choice is: {userChoice}</h3> <img src={"/"+userChoice+".jpg"}/></div>
          <div className="center"><h3>Computer choice is: {compChoice}</h3><img src={"/"+compChoice+".jpg"}/></div>
          <h2>{result}</h2>
        </div>
        <button className="reloadBtn" onClick={refreshPage}>Reload</button>
      </div>
    </div>
  );
}

export default App;

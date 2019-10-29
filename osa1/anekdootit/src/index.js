import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Button = ({action, text}) => 
<button onClick = {action}>{text}</button>





const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVote] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))

    const min = 0
    const max = 6
    
    // const handleClickRandom = () => {
    //     const min = 0
    //     const max = 6
    //     const randomnumber =
    //         Math.floor(Math.random() * (max - min)) + min
    //         console.log(randomnumber)
    //     return (
    //         randomnumber
    //     )
    // }

    const handleClickRandom = () => Math.floor(Math.random() * (max - min)) + min
        
    
    const handleClickVote = () => {
        const copy = {...votes}
        copy[selected] += 1
        return (
            copy
        )

    }

    const hasMostVotes = () => {
        let most = 0
        for(let i = 0; i < 6; i++){
            if(votes[i] > votes[most]){
                most = i
            }
            
        }
        
        return(
            most
            
        )
        
        
    }
    console.log(hasMostVotes())
    
    return (
      <div>
        <h1>Anecdote of the day</h1>
            {props.anecdotes[selected]}
            <br></br>
            <div>has {votes[selected]} votes</div>
            <br></br>
            <Button action = {() => setSelected(handleClickRandom())} text = {"next anecdote"}/>
            <Button action = {() => setVote(handleClickVote())} text = {"vote"}/>
        <h1>Anecdote with most votes</h1>
            {anecdotes[hasMostVotes()]}
            <div>has {votes[hasMostVotes()]} votes</div>

      </div>
    )

  }
  
 
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  



  

  
    
  

  
  ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
  )


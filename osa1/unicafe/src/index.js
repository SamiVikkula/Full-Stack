import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';





const Statistics = ({otsake, summa, teksti, statistiikka}) => {
  if (summa === 0) {
    return (
      <div>{otsake}</div>
    )
  }
  return (
    <tr>
      <td>{teksti}</td> <td>{statistiikka}</td>
    </tr>
  )
  
}
  







const Button = ({handleClick, text}) =>
<button onClick = {handleClick}>{text}</button>


const App = (props) => {
    const [hyva, setHyva] = useState(0)
    const [neutraali, setNeutraali] = useState(0)
    const [huono, setHuono] = useState(0)
    const summa = () => hyva + neutraali + huono
    const keskiarvo = () => (hyva * arvot.good +
      neutraali * arvot.neutral + huono * arvot.bad) / summa()
    
    const positiivisia = () => hyva / summa() * 100 + "%"
    console.log(summa())
    const arvot = {
      good: 1,
      neutral: 0,
      bad: -1
    }
    
    
    return (
       <div>
        <h1>Unicafe</h1>
          <h2>anna palautetta</h2>
            <Button handleClick = {() => setHyva(hyva + 1)} text = {"hyvä"}/>
            <Button handleClick = {() => setNeutraali(neutraali +1)} text = {"neutraali"}/>
            <Button handleClick = {() => setHuono(huono +1)} text = {"huono"}/>
          <h2>statistiikka</h2>
          <table>
            <Statistics otsake = {"Ei yhtään palautetta annettu"} summa = {summa()} teksti = {"hyvä "} statistiikka = {hyva} />
            <Statistics otsake = {""} summa = {summa()} teksti = {"neutraali "} statistiikka = {neutraali} />
            <Statistics otsake = {""} summa = {summa()} teksti = {"huono "} statistiikka = {huono} />
            <Statistics otsake = {""} summa = {summa()} teksti = {"yhteensä "} statistiikka = {summa()}/>
            <Statistics otsake = {""} summa = {summa()} teksti = {"keskiarvo "} statistiikka = {keskiarvo()}/>
            <Statistics otsake = {""} summa = {summa()} teksti = {"positiivisia "} statistiikka = {positiivisia()}/>
          </table>
       </div>

    )
}


ReactDOM.render(<App />, document.getElementById('root'));



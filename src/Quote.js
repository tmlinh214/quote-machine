import React from 'react'
import {colors} from './colors'
import {animation,removeAnimation} from "./utils"
function Quote() {
    const [quote,setQuote] = React.useState([])
    const [randomQuote,setRandomQuote]=React.useState({})
    const [color,setColor]=React.useState('')
    const [oldColor,setOldColor]=React.useState('')
    const [isDisabled,setIsDisabled]=React.useState(false)

    React.useEffect(()=>{
        fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
            .then(res=>res.json())
            .then(data => setQuote(data.quotes))
    },[])
    React.useEffect(()=>{
        fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
            .then(res=>res.json())
            .then(data => setRandomQuote(data.quotes[Math.floor(Math.random()*data.quotes.length)]))
    },[])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(()=>randomColor(),[quote])
    function getQuote(){
        let randomIndex=0
        
        do {
            randomIndex = Math.floor(Math.random()*quote.length)
        } while (quote[randomIndex] === randomQuote)
         setTimeout(()=>setRandomQuote(quote[randomIndex]),1000)
        // setRandomQuote(quote[randomIndex])
    }
    function randomColor(){
        setOldColor(color)
        let colorIndex=0
        console.log(oldColor)
        do { 
            colorIndex = Math.floor(Math.random()*colors.length)
        } while (colors[colorIndex] === color)
        setColor(colors[colorIndex])
        document.documentElement.style.setProperty('--old-color',oldColor)
        document.documentElement.style.setProperty('--main-color',color)
        // setTimeout(()=>document.documentElement.style.setProperty('--main-color',color),3000)
    }
    
    function handleClick(){
        getQuote()
        randomColor()
        animation()
        setIsDisabled(true)
        setTimeout(()=>removeAnimation(),2000)
        setTimeout(()=>setIsDisabled(false),2000)
    }
    
    const quoteElement = 
        <div className='quote'>
            <h2 className='quote-text' id='quote-text'>"{randomQuote.quote}"</h2>
            <p className='author-text' id='author-text'>- {randomQuote.author} -</p>

        </div>
  return (
    <main className='quote-container'>
        {quoteElement}
        <button onClick={handleClick} className='btn' disabled={isDisabled} id='btn'>New quote</button>
    </main>
  )
}

export default Quote
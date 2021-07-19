import './App.css';
import CheckPalindrome from './components/CheckPalindrome/CheckPalindrome.js'
import React, { useState } from 'react';

function App() {

  const [outputText, setOutputText] = useState('')
  function handleChange(e) {
    let isPalindrome = CheckPalindrome(e.target.value)
    console.log(e.target.value) // Which means the function below is not calling properly:
    setOutputText(`Is input text: ${e.target.value} a palindrome? ${isPalindrome}`)
  }
  // isPalindrome gets passed the test as a prop
  // outputField takes the true/false and generates the field on the page
  return (
    <div className="App">
      <header className="App-header">
        {/* Make it's own component? */}
        <form>
          <input name='palindromeTest' onInput={handleChange} type = 'text'
          placeholder = 'Check for Palindromicity Here!'> 
          </input>
        </form>
        {/* Make it's own output component */}
        <div>
          {outputText}
        </div>
      </header>
    </div>
  );
}

export default App;
"use client";

import React, { useState, useEffect, useRef } from 'react'
import corporateQuestions from './corporate_finance_questions.json'
import marketQuestions from './financial_market_questions.json'
import personalQuestions from './personal_finance_questions.json'
import quantQuestions from './quant_questions.json'
import fintechQuestions from './fintech_questions.json'
import './styles.css'

// function pickRandomQuestion(){
//   var obj_keys = Object.keys(window.questionnaire);
//   var ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
//   window.selectedquestion = window.questionnaire[ran_key];
//   console.log(window.selectedquestion);
//   console.log(window.questionnaire);
// }

interface romanType {
  [key: number]: string;
}

class Timer {
  constructor(public counter = 90) {

      let intervalId = setInterval(() => {
          this.counter = this.counter - 1;
          console.log(this.counter)
          if(this.counter === 0) clearInterval(intervalId)
      }, 1000)
  }
}

const Lessons = () => {
  function pickQuestion() {
    const list = Math.floor(Math.random() * 5) % 5;
    //let question: { question: string; choice1: string; choice2: string; choice3: string; choice4: string; correct: string }[];
    switch (list) {
      case 0:
        return marketQuestions[Math.floor(Math.random() * 10) % 10];
      case 1:
        return corporateQuestions[Math.floor(Math.random() * 10) % 10];
      case 2:
        return personalQuestions[Math.floor(Math.random() * 10) % 10];
      case 3:
        return fintechQuestions[Math.floor(Math.random() * 10) % 10];
      default:
        return quantQuestions[Math.floor(Math.random() * 10) % 10];
    }
  }

//   const seconds = useRef<number>(60);
//   function startTimer() {
//     const display = document.querySelector('#time');
//     var timer = duration, minutes, seconds;
//     setInterval(updateTimer, 1000);
// }

// function stopTimer() {
//   clearInterval(timerInterval);
// }

// function updateTimer() {
//   const timerElement = document.getElementById('timer');
//   if (timerElement) {
//     timerElement.textContent = ;
//   }
  
//   seconds--;

//   if (seconds < 0) {
//     stopTimer();
//     if (timerElement) {
//       timerElement.textContent = 'Time's up!';
//     }
//   }
//}

// window.onload = function () {
//     startTimer();
// };



  const question = pickQuestion();
  const score = useRef<number>(0);
  const [counter, setCounter] = useState(0);
  // if (score && score.current){
  //   const { top, width } = score.current.getBoundingClientRect();
  // }

  function handleSubmit(e: { preventDefault: () => void }) {
    setCounter(counter+1);
    // e.preventDefault();
    // let output = '';
    // const currentValue = document.querySelector('.currentValue');

    // const radioForm = document.getElementById('radioForm') as HTMLFormElement;
    // const getSelectedTextButton = document.getElementById('getSelectedText') as HTMLButtonElement;
    // const selectedTextDisplay = document.getElementById('selectedTextDisplay') as HTMLParagraphElement;
    
    // // Add a click event listener to the button
    // getSelectedTextButton.addEventListener('click', () => {
    //   // Find the selected radio button within the "radioGroup" using querySelector
    //   const selectedRadioButton = radioForm.querySelector('input[name="ans"]:checked') as HTMLInputElement;
    
    //   // Check if a radio button is selected
    //   if (selectedRadioButton) {
    //     // Get the selected text (the value attribute of the radio button)
    //     const selectedText = selectedRadioButton.value;
        
    //     if (selectedText === question.correct) {
    //       score.current += 1;
    //     }
    //     // Display the selected text
    //     selectedTextDisplay.textContent = `Selected Text: ${selectedText}`;
    //   } else {
    //     // If no radio button is selected, display a message
    //     selectedTextDisplay.textContent = 'No option selected';
    //   }
    // });
    // // check if user chose correct answer
    // for (let i = 0; i < ele.length; i += 1) {
    //   if (ele[i].checked) {
    //     output = ele[i].value;
    //   }
    // }
    const ele = document.getElementsByName('ans') as NodeListOf<HTMLInputElement>;
    let output = '';
    for (let i = 0; i < ele.length; i += 1) {
      if (ele[i].checked) {
        output = ele[i].value;
      }
    }

    if (output === question.correct) {
      score.current += 1;
    }
 
  }
  //if (counter <= 9) {
    return (
      <section className= "radio-section">
        
      <div className="radio-list">
        {/* <head>
          <link rel="stylesheet" href="styles.css"></link>
        </head> */}
        <h1>{question.question}</h1>
        <form>
          <div>
              <label htmlFor="option1">
                {question.choice1}
                <input
                  type="radio"
                  id="ans1"
                  name="ans"
                  value={question.choice1}
                />
              </label>
          </div>
          <div>
              <label htmlFor="option2">
                {question.choice2}
                <input
                  type="radio"
                  id="ans2"
                  name="ans"
                  value={question.choice2}
                />
              </label>
            </div>
            <div>
            <label htmlFor="option3">
              {question.choice3}
              <input
                type="radio"
                id="ans3"
                name="ans"
                value={question.choice3}
              />
            </label>
            </div>
            <div>
            <label htmlFor="option4">
              {question.choice4}
              <input
                type="radio"
                id="ans4"
                name="ans"
                value={question.choice4}
              />
            </label>
            </div>
            </form>
            <p>
            Current Score:
            {' '}
            {score.current}
          </p>
      </div>
      <button type="submit" onClick={handleSubmit}>Submit</button>
      
      
      
      </section>
      
      
  //}
    )
}

export default Lessons
import React, { useState, useRef, useEffect } from 'react';
import corporateQuestions from './corporate_finance_questions.json';
import marketQuestions from './financial_market_questions.json';
import personalQuestions from './personal_finance_questions.json';
import quantQuestions from './quant_questions.json';
import fintechQuestions from './fintech_questions.json';

const Lessons = () => {
  const [question, setQuestion] = useState<any>(null);
  const score = useRef<number>(0);
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(15); // Initial timer value in seconds

  function pickQuestion() {
    const list = Math.floor(Math.random() * 5) % 5;
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

  useEffect(() => {
    // Run pickQuestion only on the client side
    if (typeof window !== 'undefined') {
      setQuestion(pickQuestion());
    }
  }, []);

  useEffect(() => {
    // Start the timer when a new question is set
    let timerInterval: NodeJS.Timeout;
    if (question) {
      timerInterval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) {
            return prevTimer - 1;
          } else {
            clearInterval(timerInterval);
            // Move to the next question when the timer hits 0
            setQuestion(pickQuestion());
            setTimer(15); // Reset the timer to 15 seconds
            return prevTimer;
          }
        });
      }, 1000);
    }

    // Clear the timer when the component unmounts or a new question is set
    return () => {
      clearInterval(timerInterval);
    };
  }, [question]);

  function handleSubmit(e: { preventDefault: () => void }) {
    setCounter(counter + 1);

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

    // Reset the timer to 15 seconds for the next question
    setTimer(15);
    // Move to the next question
    setQuestion(pickQuestion());
  }

  if (!question) {
    return <p>Loading...</p>;
  }

  return (
    <section className="radio-section bg-gradient-to-r from-[#24305E] via-[#1d1d42] to-[#24305E] min-h-screen flex items-center justify-center">
      <div className="radio-list bg-white p-8 rounded-lg shadow-lg text-[#24305E] w-2/3 h-[600px]">
        <h1 className="mb-4 text-4xl font-bold">{question.question}</h1>
        <div className="mb-4 text-xl">Time remaining: {timer} seconds</div>
        <form>
          <div className="mb-4">
            <label className="block p-3 bg-[#F76C6C] border border-opacity-20 border-white rounded-lg cursor-pointer font-semibold text-xl">
              <input type="radio" id="ans1" name="ans" value={question.choice1} className="mr-2" />
              {question.choice1}
            </label>
          </div>
          <div className="mb-4">
            <label className="block p-3 bg-[#F76C6C] border border-opacity-20 border-white rounded-lg cursor-pointer font-semibold text-xl">
              <input type="radio" id="ans2" name="ans" value={question.choice2} className="mr-2" />
              {question.choice2}
            </label>
          </div>
          <div className="mb-4">
            <label className="block p-3 bg-[#F76C6C] border border-opacity-20 border-white rounded-lg cursor-pointer font-semibold text-xl">
              <input type="radio" id="ans3" name="ans" value={question.choice3} className="mr-2" />
              {question.choice3}
            </label>
          </div>
          <div className="mb-4">
            <label className="block p-3 bg-[#F76C6C] border border-opacity-20 border-white rounded-lg cursor-pointer font-semibold text-xl">
              <input type="radio" id="ans4" name="ans" value={question.choice4} className="mr-2" />
              {question.choice4}
            </label>
          </div>
        </form>
        <p className="mb-4 text-xl">Current Score: {score.current}</p>
        <button
          type="submit"
          className="px-6 py-3 bg-[#F76C6C] border border-opacity-20 border-white rounded-lg cursor-pointer font-semibold text-xl hover:bg-white hover:text-[#24305E] transition duration-300"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default Lessons;

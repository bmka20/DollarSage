"use client"
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

  useEffect(() => {
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

    // Run pickQuestion only on the client side
    if (typeof window !== 'undefined') {
      setQuestion(pickQuestion());
    }
  }, []);

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
  }

  if (!question) {
    return <p>Loading...</p>;
  }

  return (
    <section className="radio-section bg-gradient-to-r from-[#24305E] via-[#1d1d42] to-[#24305E] min-h-screen flex items-center justify-center">
      <div className="radio-list bg-white p-8 rounded-lg shadow-lg text-[#24305E] w-2/3 h-[575px]">
        <h1 className="mb-4 text-4xl font-bold">{question.question}</h1>
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

import React, { useState } from 'react';
import './style.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответов из {questions.length}</h2>
      <a href='/'><button>Снова</button></a>
    </div>
  );
}

function Game({step,question, changeStep}) {
	const progress = (step / questions.length) * 100 
  return (
    <>
      <div className="progress">
        <div style={{ width: progress + '%' }} className="progress__inner"></div>
      </div>
		
      <h1>{question.title}</h1>
      <ul>
			{question.variants.map((variant,index) =>
				<li key={index} onClick={() => changeStep(index)}>{variant}</li>)}
      </ul>
    </>
  );
}

function App() {

	const [step, setstep] = useState(0)
	const [correct, setCorrect] = useState(0)
	const question = questions[step]
	const changeStep = (index) => {
		setstep(step + 1)
		if (index == question.correct) {
			setCorrect(correct + 1)
		}
	}
  return (
    <div className="Appq">
       {questions.length !== step ? 
		 <Game step={step} question={question} changeStep={changeStep} /> :
		 <Result correct={correct} />}
    </div>
  );
}

export default App;
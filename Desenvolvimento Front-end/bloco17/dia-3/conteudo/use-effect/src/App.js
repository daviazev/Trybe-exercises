import React from 'react';
import './App.css';
// import useTimer from './hooks/useTimer';
import { useState, useEffect } from 'react';

const TIMER_INTERVAL = 1000;
const NUMBER_TIMEOUT = 10000;
const MESSAGE_TIMEOUT = 4000;

export default function App() {
  // const { number, isMultiple, timer } = useTimer();

  // OBS: consegui fazer vendo o gabarito, e só depois de ver e rever
  // algumas vezes que entendi o que tá acontecendo nesse código

  const [number, setNumber] = useState(1);
  const [isMultiple, setMultiple] = useState(false);
  const [timer, setTimer] = useState(1);

  const increaseTimerInterval = () => setTimer((timer) => timer + 1);

  const verifyMultiple = (randomNumber) => {
    if (randomNumber % 3 === 0 || randomNumber % 5 === 0) {
      setMultiple(true);
      setTimeout(() => setMultiple(false), MESSAGE_TIMEOUT);
    }
  };

  const handleRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) - 1;
    verifyMultiple(randomNumber);
    setNumber(randomNumber);
    setTimer(0);
  };

  useEffect(() => {
    const interval = setInterval(handleRandomNumber, NUMBER_TIMEOUT);
    const setTimerInterval = setInterval(increaseTimerInterval, TIMER_INTERVAL);

    return () => {
      clearInterval(interval);
      clearInterval(setTimerInterval);
    };
  }, []);

  return (
    <div className='App'>
      <h2>{`Número aleatório: ${number}`}</h2>
      <h2>{isMultiple && 'Acerto'}</h2>
      <h2>Tempo: {timer}</h2>
    </div>
  );
}

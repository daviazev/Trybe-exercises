// import { useState, useEffect } from 'react';

// const TIMER_INTERVAL = 1000;
// const NUMBER_TIMEOUT = 10000;
// const MESSAGE_TIMEOUT = 4000;

// function useTimer() {
//   const [number, setNumber] = useState(1);
//   const [isMultiple, setMultiple] = useState(false);
//   const [timer, setTimer] = useState(1);

//   const increaseTimerInterval = () => setTimer((timer) => timer + 1);

//   const verifyMultiple = (randomNumber) => {
//     if (randomNumber % 3 === 0 || randomNumber % 5 === 0) {
//       setMultiple(true);
//       setTimeout(() => setMultiple(false), MESSAGE_TIMEOUT);
//     }
//   };

//   const handleRandomNumber = () => {
//     const randomNumber = Math.floor(Math.random() * 100) - 1;
//     verifyMultiple(randomNumber);
//     setNumber(randomNumber);
//     setTimer(0);
//   };

//   useEffect(() => {
//     const interval = setInterval(handleRandomNumber, NUMBER_TIMEOUT);
//     const setTimerInterval = setInterval(increaseTimerInterval, TIMER_INTERVAL);

//     return () => {
//       clearInterval(interval);
//       clearInterval(setTimerInterval);
//     };
//   }, []);

//   return { number, isMultiple, timer };
// }

// export default useTimer;

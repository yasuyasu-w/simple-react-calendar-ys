import React, { useState, useEffect } from 'react';

type Props = {
  GOMISYU: string[];
};

const Infotime: React.FC<Props> = ({ GOMISYU }) => {
  const YOUBISUU = new Date().getDay();
  const [now, setNow] = useState(new Date().toLocaleTimeString('en-US', { hour12: false }));
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date().toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [now]);
  //now === '14:25:30' ? console.log(GOMISYU[new Date().getDay()]) : '';
  return (
    <>
      <h1>今日は{GOMISYU[YOUBISUU]}の日！</h1>
      <div>{now}</div>
    </>
  );
};

export default Infotime;

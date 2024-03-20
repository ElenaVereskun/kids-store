import { FC, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { IPropsTimer } from '@shared/api/types/interface/IAuthorization';

const TimerAuthorization: FC<IPropsTimer> = ({ seconds }) => {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    const timerID = setInterval(() => {
      const secondsLeft = time - 1;
      if (secondsLeft < 0) {
        clearInterval(timerID);
        return;
      }
      setTime(secondsLeft);
    }, 1000);
    return () => clearInterval(timerID);
  });

  return <div className={styles.display_timer}>{time < 10 ? `00:0${time}` : `00:${time}`}</div>;
};

export default TimerAuthorization;

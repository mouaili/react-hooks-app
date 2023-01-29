import { useState } from 'react';
import Button from './Button';
import ShowText from './ShowText';
import style from '../css/Counter.module.css';
import NewTable from './NewTable.js';
import useCounter from '../hooks/useCounter';
import useTimeParser from '../hooks/useTimeParser.js';

function Counter() {
  const [counterStarted, setCounterStarted] = useState(false);
  const [counters, setCounters] = useState([]);
  const { count, startCount, pauseCount } = useCounter();

  //hook useTimeParser
  const { parseMillisecondsToHMS } = useTimeParser();

  const pushNewTable = count => {
    const date = new Date();
    setCounters([...counters, { date, count }]);
  };

  const startCounter = () => {
    if (counterStarted) {
      pauseCount();
      pushNewTable(count);
      setCounterStarted(false);
    } else {
      startCount();
      setCounterStarted(true);
    }
  };

  return (
    <div className={`${style.content}`}>
      <p>{parseMillisecondsToHMS(count)}</p>
      <Button changeAction={startCounter}>
        {counterStarted ? `Stop` : 'Start'}
      </Button>

      <ShowText counterStarted={counterStarted} />
      <NewTable counters={counters} />
    </div>
  );
}

export default Counter;

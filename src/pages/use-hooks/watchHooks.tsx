import {useState, useEffect} from 'react';
import {RecordItem} from './watchRecord';

export const useTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [timeMarker, setTimeMarker] = useState(0);

  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return {
    isRunning,
    setIsRunning,
    time,
    setTime,
    timeMarker,
    setTimeMarker,
  };
};

export const useStopWatch = () => {
  const initRecord: RecordItem[] = [];
  const [records, setRecord] = useState(initRecord);
  const {
    isRunning,
    setIsRunning,
    time,
    setTime,
    timeMarker,
    setTimeMarker,
  } = useTimer();

  const handleReset = () => {
    setTime(0);
    setTimeMarker(0);
    setRecord(initRecord);
  };

  const handleAdd = () => {
    setTimeMarker(time);
    setRecord([
      {
        time: getTotalTime(),
        title: 'Stop ' + (records.length + 1),
        key: records.length.toString(),
      },
      ...records,
    ]);
  };

  const getTotalTime = () => {
    return (
      ('0' + Math.floor(time / 6000)).slice(-2) +
      ':' +
      ('0' + (Math.floor(time / 100) % 60)).slice(-2) +
      ':' +
      ('0' + (time % 100)).slice(-2)
    );
  };

  const getSectionTime = () => {
    let sectionTime = time - timeMarker;
    return (
      ('0' + Math.floor(sectionTime / 6000)).slice(-2) +
      ':' +
      ('0' + (Math.floor(sectionTime / 100) % 60)).slice(-2) +
      ':' +
      ('0' + (sectionTime % 100)).slice(-2)
    );
  };

  return {
    isRunning,
    records,
    getTotalTime,
    getSectionTime,
    reset: handleReset,
    addStop: handleAdd,
    start: () => setIsRunning(true),
    stop: () => setIsRunning(false),
  };
};

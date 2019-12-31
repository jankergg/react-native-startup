import React from 'react';
import {View} from 'react-native';

import {WatchFace} from './watchFace';
import {WatchControl} from './watchControl';
import {WatchRecord, RecordItem} from './watchRecord';
import {useStopWatch} from './watchHooks';

import styles from './styles';

export const initRecord: RecordItem[] = [];

const Watch: React.FC<{records: RecordItem[]; onPress: Function}> = () => {
  const {
    records,
    getTotalTime,
    getSectionTime,
    reset,
    addStop,
    start,
    stop,
  } = useStopWatch();

  return (
    <View style={styles.watchContainer}>
      <WatchFace totalTime={getTotalTime()} sectionTime={getSectionTime()} />
      <WatchControl
        startWatch={start}
        clearRecord={reset}
        addRecord={addStop}
        stopWatch={stop}
      />
      <WatchRecord record={records} />
    </View>
  );
};

export default Watch;

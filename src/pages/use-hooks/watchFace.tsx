import React, {useState, useEffect} from 'react';
import rnTextSize from 'react-native-text-size';
import {Text, View} from 'react-native';
import Util from '../../utils';
import styles from './styles';

interface Face {
  sectionTime: string;
  totalTime: string;
}
export const WatchFace: React.FC<Face> = props => {
  const [timeStyle, setTimeStyle] = useState(styles.totalTime);
  const [secTimeStyle, setSecTimeStyle] = useState(styles.sectionTime);
  // run only once
  useEffect(() => {
    (async () => {
      const total = await rnTextSize.measure({
        text: props.totalTime, // text to measure, can include symbols
        width: Util.size.width, // max-width of the "virtual" container
        fontSize: styles.totalTime.fontSize,
        fontWeight: styles.totalTime.fontWeight,
      });
      const section = await rnTextSize.measure({
        text: props.sectionTime, // text to measure, can include symbols
        width: Util.size.width, // max-width of the "virtual" container
        fontSize: styles.sectionTime.fontSize,
        fontWeight: styles.sectionTime.fontWeight,
      });
      setTimeStyle({
        ...timeStyle,
        paddingLeft: (Util.size.width - total.width) / 2,
      });
      setSecTimeStyle({
        ...secTimeStyle,
        paddingLeft: (Util.size.width - section.width) / 2,
      });
    })();
    console.log('WatchFace Effect');
  }, []);

  return (
    <View style={styles.watchFaceContainer}>
      <Text style={timeStyle}>{props.totalTime}</Text>
      <Text style={secTimeStyle}>{props.sectionTime}</Text>
    </View>
  );
};

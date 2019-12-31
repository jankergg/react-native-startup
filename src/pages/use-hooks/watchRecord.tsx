import React from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './styles';

export interface RecordItem {
  title: string;
  time: string;
  key: string;
}

export interface Records {
  record: Array<RecordItem>;
}

export const WatchRecord: React.FC<Records> = props => {
  return (
    <FlatList
      style={styles.recordList}
      data={props.record}
      renderItem={({item}) => (
        <View style={styles.recordItem} key={item.key}>
          <Text style={styles.recordItemTitle}>{item.title}</Text>
          <Text style={styles.recordItemTime}>{item.time}</Text>
        </View>
      )}
    />
  );
};

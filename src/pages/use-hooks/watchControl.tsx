import React, {useState} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './styles';

interface ContronPropTypes {
  stopWatch: Function;
  clearRecord: Function;
  startWatch: Function;
  addRecord: Function;
}
export const WatchControl: React.FC<ContronPropTypes> = props => {
  const [state, setState] = useState({
    watchOn: false,
    startBtnText: '启动',
    startBtnColor: '#60B644',
    stopBtnText: '计次',
    underlayColor: '#fff',
    underlayColorLight: '#eee',
  });
  const _addRecord = () => {
    if (state.watchOn) {
      props.addRecord();
    } else {
      props.clearRecord();
      setState({
        ...state,
        stopBtnText: '计次',
      });
    }
  };
  const _startWatch = () => {
    if (!state.watchOn) {
      props.startWatch();
      setState({
        ...state,
        startBtnText: '停止',
        startBtnColor: '#ff0044',
        stopBtnText: '计次',
        underlayColor: '#eee',
        watchOn: true,
      });
    } else {
      props.stopWatch();
      setState({
        ...state,
        startBtnText: '启动',
        startBtnColor: '#60B644',
        stopBtnText: '复位',
        underlayColor: '#eee',
        watchOn: false,
      });
    }
  };

  return (
    <View style={styles.watchControlContainer}>
      <View style={{flex: 1, alignItems: 'flex-start'}}>
        <TouchableHighlight
          style={styles.btnStop}
          underlayColor={state.underlayColor}
          onPress={() => _addRecord()}>
          <Text style={styles.btnStopText}>{state.stopBtnText}</Text>
        </TouchableHighlight>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <TouchableHighlight
          style={styles.btnStart}
          underlayColor={state.underlayColorLight}
          onPress={() => _startWatch()}>
          <Text style={[styles.btnStartText, {color: state.startBtnColor}]}>
            {state.startBtnText}
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

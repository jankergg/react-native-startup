// @ts-ignore
import React, {Props} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import {GlobalStyle} from '../assets/styles';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.homeHeader}>
        <ImageBackground
          source={require('../assets/images/home_background2x.png')}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.homeTooBar}>
            <TouchableOpacity>
              <Image
                style={styles.homeTooBar_icon}
                source={require('../assets/images/backtohome.png')}
              />
            </TouchableOpacity>
            <Text style={styles.homeTooBar_search}>功能快捷搜索</Text>
            <TouchableOpacity>
              <Image
                style={styles.homeTooBar_icon}
                resizeMode={'contain'}
                source={require('../assets/images/function.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.homeTooBar, styles.homeUser]}>
            <TouchableOpacity>
              <Image
                style={styles.homeTooBar_icon}
                resizeMode={'contain'}
                source={require('../assets/images/personalphoto.png')}
              />
            </TouchableOpacity>
            <Text style={styles.userName}>王朝</Text>
            <Text style={styles.companyName}>上海一汽大金自行车有限公司</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.sections}>
        <View style={styles.sectionItem}>
          <Text style={styles.sectionTitle}>上海一汽大金自行车有限公司</Text>
          <View style={styles.menu_group}>
            <TouchableOpacity>
              <View style={styles.menu_item}>
                <Image
                  style={styles.menu_icon}
                  source={require('../assets/images/icon_reportsearch.png')}
                />
                <Text>自助查询</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.menu_item}>
                <Image
                  style={styles.menu_icon}
                  source={require('../assets/images/icon_reportsearch.png')}
                />
                <Text>自助查询</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.menu_item}>
                <Image
                  style={styles.menu_icon}
                  source={require('../assets/images/icon_reportsearch.png')}
                />
                <Text>自助查询</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

function onfocus() {}

const styles = StyleSheet.create({
  ...GlobalStyle,
  homeHeader: {
    height: '35%',
  },
  homeTooBar: {
    display: 'flex',
    padding: 30,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  homeTooBar_icon: {
    width: 20,
    height: 20,
  },
  homeTooBar_search: {
    flex: 1,
    height: 32,
    fontSize: 16,
    borderRadius: 50,
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'center',
    backgroundColor: '#fff',
    lineHeight: 32,
    color: '#ccc',
  },
  homeUser: {
    marginTop: 50,
  },
  userName: {
    fontSize: 24,
    color: '#fff',
    marginLeft: 10,
  },
  companyName: {
    fontSize: 14,
    color: '#fff',
    borderLeftColor: '#fff',
    lineHeight: 24,
    borderLeftWidth: 1,
    paddingLeft: 10,
    marginLeft: 10,
    borderStyle: 'dotted',
  },
  sections: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: -50,
  },
  sectionItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  menu_group: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu_item: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  menu_icon: {
    width: 50,
    height: 50,
  },
});

export default Home;

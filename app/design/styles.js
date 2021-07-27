import {Platform, StyleSheet} from 'react-native';
import {colorCode} from './colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorCode.white,
  },
  // Text Styling
  title: {
    fontSize: 30,
    fontFamily: 'AvenirNextLTPro-Bold',
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'AvenirNextLTPro-Regular',
    fontWeight: '500',
  },
  smallText: {
    fontSize: 18,
    fontFamily: 'AvenirNextLTPro-Regular',
  },
  white: {
    color: colorCode.white,
  },
  grey: {
    color: colorCode.gr,
  },
  // Flex CSS
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ctr: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btw: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  around: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  // Component CSS
  list: {
    padding: 25,
  },
  grpItem: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: colorCode.white,
  },
  grp: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colorCode.brand,
    paddingBottom: 20,
  },
  header: {
    backgroundColor: colorCode.brand,
    padding: 30,
    paddingTop: Platform.OS === 'android' ? 20 : 80,
    height: Platform.OS === 'android' ? 320 : 380,
    zIndex: -1000,
  },
  dollar: {
    width: 50,
    backgroundColor: colorCode.green,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

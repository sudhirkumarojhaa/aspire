import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
import {colorCode} from '../design/colors';

export default function Lists({
  title,
  subTitle,
  icon,
  switchIcon,
  keys,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[styles.row, styles.btw]}
      key={keys}
      onPress={onPress}>
      <View style={styles.row}>
        <Image style={styles.image} source={icon} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
      {switchIcon ? <Switch /> : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  btw: {
    justifyContent: 'space-between',
  },
  image: {
    width: 35,
    height: 35,
    marginRight: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontFamily: 'AvenirNextLTPro-Regular',
    fontWeight: '400',
    color: colorCode.brand,
  },
  subTitle: {
    fontSize: 12,
    fontFamily: 'AvenirNextLTPro-Regular',
    fontWeight: '400',
    color: '#22222266',
    paddingVertical: 5,
  },
});

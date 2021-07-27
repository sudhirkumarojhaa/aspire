import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from '../design/styles';

export default function Payment() {
  return (
    <View>
      <View style={styles.header}>
        <View style={[styles.row, styles.btw]}>
          <Text style={[styles.title, styles.white]}>Payment Section</Text>
          <Image
            source={require('../assets/images/Logo.png')}
            style={{width: 40, height: 40}}
          />
        </View>
        <Text style={[styles.smallText, styles.white, {marginTop: 50}]}>
          Available balance
        </Text>
        <View style={[styles.row, {marginTop: 15}]}>
          <View style={styles.dollar}>
            <Text style={[styles.smallText, styles.white, {fontWeight: '500'}]}>
              S$
            </Text>
          </View>
          <Text style={[styles.title, styles.white, {marginLeft: 15}]}>
            3,000
          </Text>
        </View>
      </View>
    </View>
  );
}

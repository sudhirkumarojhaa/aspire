/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef,useState} from 'react';
import {View, Text, Image, Animated, TouchableOpacity, TextInput} from 'react-native';
import {colorCode} from '../../design/colors.js';
import {styles} from '../../design/styles.js';
import {useSelector, useDispatch} from 'react-redux';
import * as wpActions from '../../store/actions';

export default function SpendingLimit({navigation}) {
  const dispatch = useDispatch();
  const amounts = useSelector(state => state.appData.amount);
  const [amount,setAmount] = useState(amounts);
console.log(amount);
  return (
    <View style={{backgroundColor: colorCode.brand}}>
        <View style={[styles.row, styles.btw, {paddingHorizontal: 20, paddingTop: 50}]}>
          <TouchableOpacity onPress={()=> navigation.navigate('Debit')}>
            <Image
              source={require('../../assets/images/back.png')}
              style={{width: 20, height: 30}}
            />
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/Logo.png')}
            style={{width: 40, height: 40}}
          />
        </View>
        <Text style={[styles.title, styles.white, {paddingVertical: 40, paddingHorizontal: 30}]}>Spending limit</Text>
        <View style={{backgroundColor: '#fff',borderTopLeftRadius: 25,borderTopRightRadius: 25,height :'100%', paddingVertical: 30, paddingHorizontal: 20}}>
          <View style={styles.row}>
            <Image
              source={require('../../assets/images/g.png')}
              style={{width: 30, height: 30, marginRight: 20}}
            />
             <Text style={[styles.smallText,{fontSize: 14}]}>Set a weekly debit card spending limit</Text>
          </View>
          <View style={[styles.row, {marginTop: 35, borderBottomWidth: 1, paddingBottom: 10, borderBottomColor: '#0000001F'}]}>
            <View style={styles.dollar}>
              <Text
                style={[styles.smallText, styles.white, {fontWeight: '500'}]}>
                S$
              </Text>
            </View>
            <TextInput style={[styles.title, {marginLeft: 15}]} value={amount} onChangeText={(text)=> setAmount(text)} maxLength={5}/>
          </View>
          <Text style={[styles.smallText,{color: '#22222266', fontSize: 14, paddingVertical: 20}]}>Here weekly means the last 7 days - not the calendar week</Text>
          <View style={[styles.row,styles.btw]}>
            <TouchableOpacity style={{backgroundColor: '#f9f9f9', padding: 15, borderRadius: 5}} onPress={()=> setAmount('5000')}>
              <Text
                style={{color: colorCode.green, paddingHorizontal: 10}}>
                S$ 5,000
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#f9f9f9', padding: 15, borderRadius: 5}} onPress={()=> setAmount('10000')}>
              <Text
                style={{color: colorCode.green, paddingHorizontal: 10}}>
                S$ 10,000
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#f9f9f9', padding: 15, borderRadius: 5}} onPress={()=> setAmount('20000')}>
              <Text
                style={{color: colorCode.green, paddingHorizontal: 10}}>
                S$ 20,000
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{backgroundColor: colorCode.green, padding: 20,justifyContent: 'center',alignItems: 'center', borderRadius: 100, marginTop: 200,width: '95%'}}
           onPress={()=>{
             dispatch(wpActions.saveAmount(amount));
            navigation.navigate('Debit');}}>
              <Text
                style={[styles.subTitle,styles.white]}>
                Save
              </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

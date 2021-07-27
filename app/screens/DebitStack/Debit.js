/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {colorCode} from '../../design/colors.js';
import {styles} from '../../design/styles.js';
import Lists from '../../components/Lists.js';
import {ListItems} from '../../assets/dataSource/data.js';
import {useSelector, useDispatch} from 'react-redux';
import * as wpActions from '../../store/actions';
import * as Progress from 'react-native-progress';

export default function Debit({navigation}) {
  const dispatch = useDispatch();
  const showCardNumber = useSelector(state => state.appData.showCardNumber);

  const amount = useSelector(state => state.appData.amount);
  const progressRate = 600 / amount;
  return (
    <View style={{backgroundColor: colorCode.brand}}>
      <ScrollView>
        <View style={styles.header}>
          <View style={[styles.row, styles.btw]}>
            <Text style={[styles.title, styles.white]}>Debit Card</Text>
            <Image
              source={require('../../assets/images/Logo.png')}
              style={{width: 40, height: 40}}
            />
          </View>
          <Text style={[styles.smallText, styles.white, {marginTop: 50}]}>
            Available balance
          </Text>
          <View style={[styles.row, {marginTop: 15}]}>
            <View style={styles.dollar}>
              <Text
                style={[styles.smallText, styles.white, {fontWeight: '500'}]}>
                S$
              </Text>
            </View>
            <Text style={[styles.title, styles.white, {marginLeft: 15}]}>
              3,000
            </Text>
          </View>
        </View>
        <View style={{backgroundColor: '#fff',borderTopLeftRadius: 15,borderTopRightRadius: 15,height :'100%'}}>
          <View
            style={{
              position: 'absolute',
              top: -100,
              width: '92%',
              borderRadius: 10,
              padding: 25,
              alignSelf: 'center',
              backgroundColor: colorCode.green,
              height: 250,
            }}>
              {showCardNumber ?
                <TouchableOpacity style={[styles.row, styles.btw,{position: 'absolute',backgroundColor: '#fff',padding: 10,borderRadius: 5, right: 2,top: -35,elevation: 10, zIndex: 100}]} onPress={()=>dispatch(wpActions.showCardNumber(!showCardNumber))} activeOpacity={1}>
                  <Image style={styles.image} source={require('../../assets/images/Group.png')} />
                  <Text style={{color: colorCode.green,paddingLeft: 10}}>Hide card number</Text>
              </TouchableOpacity> :
              <TouchableOpacity style={[styles.row, styles.btw,{position: 'absolute',backgroundColor: '#fff',padding: 10,borderRadius: 5, right: 2,top: -35,elevation: 10, zIndex: 100}]}
                onPress={()=>dispatch(wpActions.showCardNumber(!showCardNumber))} activeOpacity={1}>
                <Image style={styles.image} source={require('../../assets/images/remove_red_eye-24px.png')} />
                <Text style={{color: colorCode.green,paddingLeft:10}}>Show card number</Text>
              </TouchableOpacity>
              }
            <Image
              style={{
                width: 120,
                height: 25,
                resizeMode: 'contain',
                alignSelf: 'flex-end',
              }}
              source={require('../../assets/images/AspireLogo.png')}
            />
            <View style={{marginVertical: 25}}>
              <Text style={[styles.title, styles.white]}>Mark Henry</Text>
              {showCardNumber ? <Text style={[styles.white, styles.smallText, {marginTop: 20}]}>
                2345 1290 9830 3210
              </Text> :
              <Text style={[styles.white, styles.smallText, {marginTop: 20}]}>
               **** **** **** ****
              </Text>}
              <View style={[styles.row, {marginTop: 20}]}>
                <Text
                  style={[styles.white, styles.smallText, {marginRight: 30}]}>
                  Thru: 12/20{' '}
                </Text>
                <Text style={[styles.white, styles.smallText]}>CVV: ***</Text>
              </View>
              <Image
                style={{
                  width: 100,
                  height: 25,
                  marginTop: 20,
                  resizeMode: 'contain',
                  alignSelf: 'flex-end',
                }}
                source={require('../../assets/images/VisaLogo.png')}
              />
            </View>
          </View>

          <View style={[styles.text, {marginTop: 140, padding: 20}]}>
            <View style={{margin: 20, alignSelf: 'center'}}>
             {amount ? <View style={{marginVertical: 10}}>
              <View style={[styles.row,styles.btw,{marginBottom: 20}]}>
                <Text style={[styles.smallText,{fontSize: 14}]}>Debit card spending limit</Text>
                <Text style={[styles.smallText,{fontSize: 14,color: '#a9a9a9'}]}><Text style={{color: colorCode.green}}>$600</Text>/ ${amount}</Text>
              </View>
              <Progress.Bar progress={progressRate} width={380} height={12} borderColor={colorCode.green} color={colorCode.green} unfilledColor={'#f9f9f9'} />
             </View> : null}
             </View>
               {ListItems.map((it,index )=> (
              <Lists
                keys={index}
                title={it.title}
                subTitle={it.subTitle}
                icon={it.img}
                switchIcon={it.id === 2 || it.id === 3 }
                onPress={it.id === 2 ? ()=> navigation.navigate('Details') : null}
              />
            ))}
          </View>
          </View>
      </ScrollView>
    </View>
  );
}


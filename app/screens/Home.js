import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {colorCode} from '../design/colors';
import {styles} from '../design/styles';

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson);
        setLoading(false);
      })
      .catch(error => console.log(error)); //to catch the errors if any
  }, []);

  const renderItem = val => (
    <TouchableOpacity style={styles.list}>
      <View style={styles.row}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: colorCode.green,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
            marginRight: 20,
          }}>
          <Text style={[styles.white, {fontWeight: '900', fontSize: 18}]}>
            {val.item.name.charAt(0).toUpperCase()}
          </Text>
        </View>
        <View>
          <Text style={[styles.title, {fontSize: 18, color: colorCode.brand}]}>
            {val.item.name}
          </Text>
          <Text
            style={[
              styles.title,
              {fontSize: 16, paddingTop: 10, color: colorCode.grey},
            ]}>
            {val.item.email}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.row, styles.btw]}>
          <Text style={[styles.title, styles.white]}>Aspire App</Text>
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
      <Text style={[styles.title, {color: colorCode.green, margin: 20}]}>
        Recent Transactions:
      </Text>
      {loading ? (
        <ActivityIndicator size={'large'} color={colorCode.brand} />
      ) : (
        <FlatList
          data={data}
          renderItem={item => renderItem(item)}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
}

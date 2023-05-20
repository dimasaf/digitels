import {useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Animated,
  TextInput,
  FlatList,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Carousel from '../../Components/Carousel/Carousel';
import Button from '../../Components/Button/Button';
import Navbar from '../../Components/Navbar/Navbar';
import Card from '../../Components/Card/Card';

import {dummy} from '../../Data/DATA';

function Home(): JSX.Element {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <Navbar animHeaderValue={scrollOffsetY} />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        scrollEventThrottle={20}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
          {useNativeDriver: false},
        )}>
        <Carousel />

        <View style={styles.bodyWrapper}>
          <View style={styles.infoAccount}>
            <Text>Already Have an Account?</Text>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Button
                title="Login"
                type="contained"
                onPress={() => navigation.navigate('Login')}
              />
              <Button
                title="Sign up"
                type="outlined"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          </View>

          <View style={styles.calenderWrapper}>
            <Text
              style={[
                styles.heading,
                {
                  borderBottomWidth: 0.8,
                  paddingVertical: 6,
                  marginBottom: 6,
                  borderColor: '#f0f0f0',
                },
              ]}>
              Booking
            </Text>
            <View style={{marginVertical: 10}}>
              <Text>Destination</Text>
              <TextInput
                style={{paddingBottom: 10, borderBottomWidth: 0.8}}
                placeholder="Location / Hotel"
              />
            </View>

            <View style={styles.calenderBody}>
              <Text style={styles.dateHeading}>Check In</Text>
              <Text style={styles.dateHeading}>Check Out</Text>
              <Text style={styles.dateHeading}>Night</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: '#FCF7F1',
                alignItems: 'center',
                padding: 10,
                marginBottom: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRightWidth: 0.5,
                  flex: 1,
                }}>
                <Text
                  style={{fontSize: 30, fontWeight: 'bold', marginRight: 5}}>
                  3
                </Text>
                <View>
                  <Text>Wed</Text>
                  <Text>Aug</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRightWidth: 0.5,
                  flex: 1,
                }}>
                <Text
                  style={{fontSize: 30, fontWeight: 'bold', marginRight: 5}}>
                  5
                </Text>
                <View>
                  <Text>Wed</Text>
                  <Text>Aug</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 0.8,
                }}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>3</Text>
              </View>
            </View>
            <Button title="Search" type="contained" />
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}>
              <Text>Travel Tips</Text>
              <Text>Comming Soon</Text>
            </View>

            <FlatList
              data={dummy}
              keyExtractor={(item: any) => item.id}
              renderItem={({item}) => (
                <Card name={item.name} imageUrl={item.imageUrl} />
              )}
              horizontal
              nestedScrollEnabled={true}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    position: 'relative',
    backgroundColor: '#fff',
  },
  bodyWrapper: {
    display: 'flex',
    paddingHorizontal: 20,
  },
  infoAccount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    marginBottom: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EAFFFF',
  },
  calenderWrapper: {
    backgroundColor: 'white',
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    borderRadius: 10,
    marginBottom: 30,
  },
  calenderBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#36A3C0',
    backgroundColor: '#03B5E3',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default Home;

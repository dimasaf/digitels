import {useCallback} from 'react';
import {View, TouchableHighlight} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHouse,
  faCalendarDays,
  faWallet,
  faUser,
  faClose,
} from '@fortawesome/free-solid-svg-icons';

import Home from './screen/Home';
import Auth from './screen/Auth';

const Tab = createBottomTabNavigator();
import {useNavigation} from '@react-navigation/native';

export const CloseButton = () => {
  const navigation = useNavigation();
  let testButton = (
    <TouchableHighlight
      style={{marginLeft: 20}}
      onPress={() => navigation.goBack()}>
      <FontAwesomeIcon icon={faClose} size={24} />
    </TouchableHighlight>
  );
  return testButton;
};

function App(): JSX.Element {
  const HomeIcon = useCallback(
    (props: any) => (
      <FontAwesomeIcon color={props.color} icon={faHouse} size={24} />
    ),
    [],
  );
  const DateIcon = useCallback(
    (props: any) => (
      <FontAwesomeIcon color={props.color} icon={faCalendarDays} size={24} />
    ),
    [],
  );
  const AddIcon = useCallback(
    (props: any) => (
      <View
        style={{
          top: -20,
          width: 60,
          height: 60,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.17,
          shadowRadius: 3.05,
          elevation: 4,
        }}>
        <FontAwesomeIcon icon={faHouse} size={28} color={props.color} />
      </View>
    ),
    [],
  );
  const WalletIcon = useCallback(
    (props: any) => (
      <FontAwesomeIcon color={props.color} icon={faWallet} size={24} />
    ),
    [],
  );
  const UserIcon = useCallback(
    (props: any) => (
      <FontAwesomeIcon color={props.color} icon={faUser} size={24} />
    ),
    [],
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            display: 'flex',
            height: 60,
          },
          activeColor: '#000',
          inactiveColor: '#fff',
          tabBarShowLabel: false,
          headerShown: false,
          position: 'absolute',
          tabBarActiveTintColor: '#000',
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: HomeIcon,
          }}
        />
        <Tab.Screen
          name="Calender"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: DateIcon,
          }}
        />
        <Tab.Screen
          name="Add"
          component={Home}
          options={{
            tabBarIcon: AddIcon,
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: WalletIcon,
          }}
        />
        <Tab.Screen
          name="Login"
          component={Auth}
          options={{
            headerShown: true,
            tabBarIcon: UserIcon,
            headerLeft: () => <CloseButton />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

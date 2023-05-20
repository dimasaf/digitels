import {Animated, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';

const Header_Max_Height = 100;
const Header_Min_Height = 70;

const Navbar = ({animHeaderValue}: any) => {
  const animateHeaderBackgroundColor = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: ['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.3)'],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[styles.navbar, {backgroundColor: animateHeaderBackgroundColor}]}>
      <FontAwesomeIcon icon={faHeart} size={24} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
    left: 0,
    right: 0,
    position: 'absolute',
    zIndex: 20,
    paddingHorizontal: 30,
  },
});

export default Navbar;

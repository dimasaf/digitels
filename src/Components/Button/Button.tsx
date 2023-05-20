/* eslint-disable react-native/no-inline-styles */
import {TouchableOpacity, Text} from 'react-native';
import {StyleSheet} from 'react-native';

type ButtonProps = {
  title: string;
  type: 'outlined' | 'contained';
  onPress?: () => void;
};

function Button({title, type = 'contained', onPress}: ButtonProps) {
  return type === 'outlined' ? (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: '#fff', borderWidth: 1, borderColor: '#000'},
      ]}
      onPress={onPress}>
      <Text style={{color: '#000'}}>{title}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: '#000'}]}
      onPress={onPress}>
      <Text style={{color: '#fff'}}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
});

export default Button;

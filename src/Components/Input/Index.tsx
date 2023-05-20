import {View, TextInput, Text} from 'react-native';

type InputProps = {
  type: 'text' | 'password';
  label: string;
  placeHolder: string;
};

function Input({label, type = 'text', placeHolder}: InputProps) {
  return (
    <View style={{marginVertical: 10}}>
      <Text>{label}</Text>
      <TextInput
        style={{paddingBottom: 10, borderBottomWidth: 0.8}}
        placeholder={placeHolder}
        secureTextEntry={type === 'password' ? true : false}
      />
    </View>
  );
}

export default Input;

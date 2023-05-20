import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Input from '../../Components/Input/Index';

function Auth() {
  return (
    <View style={styles.container}>
      <Input type="text" label="Phone Number" placeHolder="phone" />
      <Input type="password" label="Password" placeHolder="password" />

      <TouchableOpacity
        style={{
          padding: 18,
          backgroundColor: '#f5f5f5',
          borderRadius: 10,
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <Text>Login</Text>
      </TouchableOpacity>

      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Text>Forget Password</Text>
        <Text> | </Text>
        <Text>Dont Have Account?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {paddingHorizontal: 20, backgroundColor: '#fff', flex: 1},
});

export default Auth;

import {Image, View, Text, StyleSheet} from 'react-native';

type CardProps = {
  name: string;
  imageUrl: string;
};

function Card({name, imageUrl}: CardProps) {
  return (
    <View>
      <Image source={{uri: `${imageUrl}`}} style={styles.images} />
      <Text style={styles.cardHeading}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  images: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 20,
  },
  cardHeading: {color: 'black', fontSize: 16, marginVertical: 10},
});

export default Card;

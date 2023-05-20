import {Image} from 'react-native';

function CarouselItem({source}: any) {
  return (
    <Image
      source={source}
      style={{width: 400, height: 200, resizeMode: 'cover'}}
    />
  );
}

export default CarouselItem;

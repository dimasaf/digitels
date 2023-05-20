import Swiper from 'react-native-swiper';
import CarouselItem from './CarouselItem';
import {View} from 'react-native';

function Carousel() {
  return (
    <Swiper
      height={140}
      paginationStyle={{left: -300, bottom: 16}}
      activeDot={
        <View
          style={{
            backgroundColor: 'rgba(255,255,255,.6)',
            width: 40,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
          }}
        />
      }>
      <CarouselItem source={require('../../assets/image-2.jpg')} />
      <CarouselItem source={require('../../assets/image-1.jpg')} />
      <CarouselItem source={require('../../assets/image-2.jpg')} />
    </Swiper>
  );
}

export default Carousel;

import React, { useState } from 'react';

// import Carousel, { Pagination } from 'react-native-snap-carousel';
import { CarouselContainer, CarouselImage, Paragraph } from './styles';
import { bell, calendar, facebook, note } from '../../resources';
import Carousel,{Pagination} from 'react-native-snap-carousel-v4';

interface CarouselItem {
  title: string;
  image: any; // Cambia el tipo de 'image' a 'any' si 'bell', 'calendar', 'facebook', etc., son rutas de imágenes
}

export const ImagesCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item }: { item: CarouselItem }) => {
    return (
      <CarouselContainer>
        <Paragraph>{item.title}</Paragraph>
        <CarouselImage source={item.image} resizeMode='center' />
      </CarouselContainer>
    );
  };

  const carouselItems: CarouselItem[] = [
    { title: 'Comienza tu día con la App sin preocupaciones', image: bell },
    { title: 'Ya no llegarás tarde a tus reuniones con la App', image: calendar },
    { title: 'Con la App te mantendrás ordenado con tus tareas', image: note },
    // Agrega más elementos según tus necesidades
  ];

  return (
    <>
       <Carousel
        vertical={false}
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        autoplay
        scrollEnabled={false}
        autoplayInterval={2500}
        onSnapToItem={(index) => setActiveSlide(index)}        
      />
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: 'transparent' }}
        dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 5,
            // marginHorizontal: 8,
            top:-50
            // backgroundColor: '#32BC82',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        inactiveDotColor='#A8A8A8'
        dotColor='#32BC82'
      />
    </>
  );
};

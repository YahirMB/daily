import React, { useState } from 'react'
import { View, Text, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { Paragragh } from './styles';
import { bell, calendar, facebook, note } from '../../resources';




interface CarouselItem {
    title: string;
    image: string;
}

export const ImagesCarucel = () => {

    const [activeSlide, setActiveSlide] = useState(0);

    const _renderItem = ({ item }: any) => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap:25}}>
                <Paragragh>{item.title}</Paragragh>

                <Image style={{ height: 234, width: 234 }} source={item.image} resizeMode='center' />

            </View>
        );
    };

    const carouselItems: CarouselItem[] = [
        { title: 'Comienza tu día con la App sin preocupaciones', image: bell },
        { title: 'Ya no llegaras tarde a tus reuniones con la App', image: calendar },
        { title: 'Con la App te mantendras ordenado con tus tareas', image: note },
        // Agrega más elementos según tus necesidades
    ];

    return (
        <>
            <Carousel
                enableMomentum={false}
                lockScrollWhileSnapping
                autoplay
                autoplayInterval={2500}
                data={carouselItems}
                renderItem={_renderItem}
                sliderWidth={300}
                loop
                // loopClonesPerSide={carouselItems.length}
                sliderHeight={100}
                itemWidth={300}
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



    )
}

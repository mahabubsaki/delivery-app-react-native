import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Image, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Header from '../components/SingleRestaurant/Header';
import Menus from '../components/SingleRestaurant/Menus';
import FixedBasket from '../components/SingleRestaurant/FixedBasket';
import { useDispatch } from 'react-redux';
import { clearBasket } from '../store/reducers/basketReducer';

const RestaurantScreen = () => {
    const { params: { foodTitle, ingredients, lat, long, category, short_description, address, speciality, rating, imgUrl, id, title }, name } = useRoute();
    // on initial load hiding the default header of react-native-navitagion
    const dispatch = useDispatch();
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <>
            <FixedBasket foodTitle={foodTitle} />
            <ScrollView>
                <View className="relative">
                    <Image source={{ uri: imgUrl }} className="w-full aspect-video" />
                    <TouchableWithoutFeedback onPress={() => {

                        navigation.navigate('Home');
                    }}>
                        <View className="absolute w-[45px] flex-row justify-center items-center h-[45px] border-2 border-[#0088CC] rounded-full top-12 left-6 z-10 bg-[#EFF3F8]">
                            <AntDesign name="arrowleft" size={24} color="#0088CC" />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <Header foodTitle={foodTitle} short_description={short_description} rating={rating} title={title} address={address.split(",")[0]} />
                <Menus />
            </ScrollView>
        </>
    );
};

export default RestaurantScreen;
import { View, Text, TouchableWithoutFeedback, Image, ScrollView } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { fullClearFromBasket, removeFromBasket } from '../../store/reducers/basketReducer';

export default function BasketRows({ image, price, quantity, name, id }) {
    // console.log(basketItems);
    const dispatch = useDispatch();

    return (
        <View className="border-b items-center border-gray-100 py-2  bg-white px-4 flex-row justify-between">
            <View className="flex-row items-center gap-x-3">
                <Text className="text-[#54B8B2] font-semibold">{quantity} x</Text>
                <View>
                    <Image source={{ uri: image }} className="w-[50px] h-[50px] rounded-full" />
                </View>
                <View className="max-w-[150px]">
                    <Text className="font-semibold leading-5">{name}</Text>
                </View>
            </View>
            <View className="flex-row items-center">
                <Text className="mx-2">${price}</Text>


                <TouchableWithoutFeedback onPress={() => {
                    dispatch(fullClearFromBasket({ id }));
                }}>
                    <View className="w-[32px] h-[32px] rounded-full flex-row justify-center items-center bg-[#54B8B2]">
                        <Entypo name="trash" size={16} color="white" />
                    </View>
                </TouchableWithoutFeedback>

            </View>
        </View >
    );
}
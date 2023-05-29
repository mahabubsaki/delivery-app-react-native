import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToBaset, items, removeFromBasket } from '../../store/reducers/basketReducer';

export default function DishRow({ id, name, description, price, image, pressed, setPressed }) {
    const dispatch = useDispatch();
    const basketItems = useSelector(items);
    const currentProduct = basketItems.find(each => each.id === id);
    return (

        <View className={`p-3 border-b border-gray-100  bg-white`}>
            <TouchableWithoutFeedback onPress={() => {
                setPressed(pre => {
                    if (pressed === id) {
                        return '';
                    } else {
                        return id;
                    }
                });
            }}>
                <View className="flex-row justify-between">
                    <View className="w-[77%]">
                        <Text className="font-medium text-[17px]">{name}</Text>
                        <Text className="text-gray-400 font-medium text-[13px] py-2">{description}</Text>
                        <Text className="text-gray-400 font-medium text-[13px]">${price.toFixed(2)}</Text>
                        <View className="">
                            <View className={`${pressed === id ? 'flex' : 'hidden'} duration-500 relative flex-row items-center py-5`}>
                                <TouchableOpacity onPress={() => {
                                    dispatch(addToBaset({ id, name, description, price, image }));
                                }}>
                                    <View className="w-[36px] h-[36px] bg-[#409390] rounded-full flex-row justify-center items-center">
                                        <Entypo name="plus" size={24} color="white" />
                                    </View>
                                </TouchableOpacity>
                                <Text className="mx-3">{currentProduct ? currentProduct.quantity : 0}</Text>
                                <TouchableOpacity activeOpacity={1} pointerEvents='box-none' onPress={(e) => {
                                    e.stopPropagation();
                                    dispatch(removeFromBasket({ id }));
                                }}>
                                    <View className={`w-[36px] h-[36px] ${(currentProduct && currentProduct?.quantity > 0) ? 'bg-[#409390]' : 'bg-gray-400'} rounded-full flex-row justify-center items-center`}>
                                        <Entypo name="minus" size={24} color="white" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View className="w-[20%]">
                        <Image className="w-full aspect-square" source={{ uri: image }} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View >

    );
}
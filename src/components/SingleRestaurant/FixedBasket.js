import { View, Text } from 'react-native';
import React from 'react';
import { itemsLenth, total } from '../../store/reducers/basketReducer';
import { useSelector } from 'react-redux';

export default function FixedBasket() {
    const basketItems = useSelector(itemsLenth);
    const basketTotal = useSelector(total);
    return (
        <View className="absolute bottom-8 z-10 w-full">
            <View className="w-[92%] mx-auto border items-center border-[#a5e1df] bg-[#4faaa7] p-3 flex-row justify-between">
                <View className="w-5 bg-[#367576] flex-row items-center justify-center h-7">
                    <Text className="font-bold text-white">{basketItems}</Text>
                </View>
                <View>
                    <Text className="font-bold text-white">View Basket</Text>
                </View>
                <View>
                    <Text className="font-bold text-[16.5px] text-white">${basketTotal}</Text>
                </View>
            </View>
        </View>
    );
}
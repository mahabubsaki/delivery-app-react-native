import React from 'react';
import { Image, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const RestaurentsCard = ({ foodTitle, ingredients, lat, long, category, short_description, address, speciality, rating, imgUrl, id, index, length, title }) => {
    return (
        <View className={`w-[250px] bg-white ${(index == 0 || (index + 1 == length)) ? 'ml-0 mr-[10px]' : 'mx-[10px]'} rounded-3xl ${(title !== 'Offer' ? 'pb-5' : 'pb-4')}`}>
            <Image className="w-full rounded-sm aspect-video" source={{ uri: imgUrl }} />
            <View className="px-3 py-2 relative">
                <Text className="font-bold text-lg">{foodTitle}</Text>
                <View className="flex-row gap-x-2 mt-2 items-center ">
                    <AntDesign name="star" size={20} color="#97AF91" />
                    <Text className="text-[#97AF91] font-bold">{rating}</Text>
                    <Text className="text-gray-400 font-bold">{category}</Text>
                </View>
                <View className="flex-row gap-x-2 mt-2 items-start">
                    <View className="" >
                        <Ionicons name="location-outline" size={24} color="black" />
                    </View>

                    <Text className={`text-gray-400 font-bold relative top-[2px]`}>Nearby - {address.split(",")[0]}</Text>
                </View>
            </View>
        </View>
    );
};

export default RestaurentsCard;
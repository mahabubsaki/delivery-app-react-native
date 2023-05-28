import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ foodTitle, title, address, rating, short_description }) => {
    // console.log(title);
    return (
        <View className="bg-white pt-4 px-3 pb-3">
            <Text className="text-2xl font-bold">{foodTitle}</Text>
            <ScrollView horizontal contentContainerStyle={{ alignItems: 'center' }} className="flex-row gap-x-2 my-2" >
                <AntDesign name="star" size={20} color="#97AF91" />
                <Text className="font-bold text-[#97AF91]">{rating}</Text>
                <View className="relative top-[1px]">
                    <Octicons name="dot-fill" size={6} color="#9CA3AF" />
                </View>
                <Text className="text-gray-400 font-bold">{title}</Text>
                <View>
                    <MaterialIcons name="location-on" size={20} color="#9CA3AF" />
                </View>
                <Text className="text-gray-400 font-bold">Nearby - {address}</Text>
            </ScrollView>
            <Text className="text-gray-400 font-bold pb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam unde beatae sint reprehenderit,
                {short_description}
            </Text>
            <View className="w-full h-[2px] bg-gray-200"></View>
        </View>
    );
};

export default Header;
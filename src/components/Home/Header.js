
import React from 'react';
import { Image, Text, View } from 'react-native';
import headerImage from '../../../assets/header-img.png';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { primaryColor } from '../../constants';

const Header = () => {
    return (
        <View className="flex-row items-center  justify-between mt-1 pb-4">
            <View className="flex-row items-center">
                <Image source={headerImage} className="h-7 w-7 bg-gray-300 p-4 rounded-full mr-2" />
                <View className="flex-col gap-[2px]">
                    <Text className="text-xs text-gray-400 font-bold">Deliver Now!</Text>
                    <View className="flex-row items-center"><Text className="text-xl font-bold ">Current Location</Text>
                        <Text className="mt-1"><Entypo name="chevron-down" size={24} color={primaryColor} /></Text>
                    </View>
                </View>
            </View>
            <View className="mt-1">
                <AntDesign name="user" size={30} color={primaryColor} />
            </View>
        </View>
    );
};

export default Header;
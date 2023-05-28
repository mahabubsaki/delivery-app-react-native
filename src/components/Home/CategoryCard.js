import React from 'react';
import { Image, Text, View } from 'react-native';

const CategoryCard = ({ url, title }) => {
    return (
        <View className="rounded-lg mx-1 relative">
            <Image source={{ uri: url }} className="bg-cover rounded-lg h-[120px] w-[150px] " />
            <View className="absolute flex-row justify-center items-end z-10 top-0 bottom-2 left-3">
                <Text className="font-bold text-white text-lg">{title}</Text>
            </View>
        </View>
    );
};



export default CategoryCard;
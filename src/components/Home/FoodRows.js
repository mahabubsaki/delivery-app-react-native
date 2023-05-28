import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { primaryColor } from '../../constants';
import RestaurentsCard from './RestaurentsCard';


const FoodRows = ({ title, description, foods }) => {
    return (
        <View className="my-4">
            <View className="flex-row justify-between mr-1 mb-2">
                <View className="w-[87%]">
                    <Text className="font-bold text-lg">{title}</Text>
                    <Text className="text-xs text-gray-400 leading-5 font-bold  flex-wrap">{description}</Text>
                </View>
                <View className="w-[13%] flex-row justify-center items-center">
                    <AntDesign name="arrowright" size={20} color={primaryColor} />
                </View>

            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row my-1">
                {foods.map(({ title: foodTitle, ingredients, lat, long, category, short_description, address, speciality, rating, imgUrl, id }, index) => <RestaurentsCard title={title} ingredients={ingredients} lat={lat} long={long} category={category} short_description={short_description} speciality={speciality} address={address} rating={rating} imgUrl={imgUrl} id={id} foodTitle={foodTitle} length={foods.length} index={index} key={id} />)}
            </ScrollView>
        </View>
    );
};

export default FoodRows;
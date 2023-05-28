import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { categories } from '../../constants';
import CategoryCard from './CategoryCard';

const CategoriesSlider = () => {
    return (
        <ScrollView className="bg-[#f2f4f5]" contentContainerStyle={{
            paddingHorizontal: 10,
            paddingTop: 10
        }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <View className="flex-row ">
                {categories.map(({ url, title }, index) => <CategoryCard key={index} url={url} title={title} />)}
            </View>
        </ScrollView>
    );
};

export default CategoriesSlider;
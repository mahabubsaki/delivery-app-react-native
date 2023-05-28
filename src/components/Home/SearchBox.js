
import React from 'react';
import { TextInput, View } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { primaryColor } from '../../constants';


const SearchBox = () => {
    return (
        <View className="pb-2 flex-row">
            <View className="bg-[#E5E7E8] p-2 w-[88%] relative pl-10">
                <TextInput keyboardType='default' placeholder='Restaurents and cuisines' />
                <View className="absolute top-0 bottom-0 flex-row items-center ml-[12px]">
                    <FontAwesome name="search" size={20} color="gray" />
                </View>
            </View>
            <View className="w-[12%] flex-row items-center ml-[4px] justify-center">
                <Ionicons name="options" size={24} color={primaryColor} />
            </View>
        </View>
    );
};

export default SearchBox;
import { View, Text, Button, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header({ foodTitle }) {
    const navigation = useNavigation();
    return (
        <View className="h-[120px] bg-white flex-row justify-end items-center px-4">
            <View className="w-full  me-auto flex-row justify-between items-center">
                <View>

                </View>
                <View className="mt-3">
                    <Text className="font-bold text-lg text-center pb-1">Basket</Text>
                    <Text>{foodTitle}</Text>
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <View className="w-[35px] h-[35px] flex justify-center items-center relative top-3 rounded-full bg-[#54B8B2]">
                        <Entypo name="cross" size={24} color="white" />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}
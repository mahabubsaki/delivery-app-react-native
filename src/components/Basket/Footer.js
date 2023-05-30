import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';



export default function Footer({ windowHeight, totalCost }) {
    const styles = StyleSheet.create({
        footer: {
            height: windowHeight,
        },
    });
    const [isPressed, setPressed] = useState(false);
    const navigation = useNavigation();
    const deliveryFee = totalCost > 100 ? 0 : totalCost > 50 ? 10 : totalCost === 0 ? 0 : 15;
    return (
        <View className="bg-white p-4 flex-col" style={styles.footer}>
            <View className="flex-row justify-between">
                <Text className="text-gray-400 font-bold text-[15px]">Subtotal</Text>
                <Text className="text-gray-400 font-bold text-[15px]">${totalCost.toFixed(2)}</Text>
            </View>
            <View className="flex-row justify-between my-2">
                <Text className="text-gray-400 font-bold text-[15px]">Delivery Fee</Text>
                <Text className="text-gray-400 font-bold text-[15px]">${deliveryFee.toFixed(2)}</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="text-black font-bold text-[15px]">Order Total</Text>
                <Text className="text-black font-bold text-[15px]">${(totalCost + deliveryFee).toFixed(2)}</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('OrderPrepare')} onPressIn={() => setPressed(true)} onPressOut={() => setPressed(false)}>
                <View className={` duration-500 rounded-md py-3 mt-[18px] border border-[#54B8B2] ${!isPressed ? 'bg-[#54B8B2]' : 'bg-white'}`}>
                    <Text className={`duration-500 text-center text-lg  font-bold ${!isPressed ? 'text-white' : 'text-black'}`}>Place Order</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';



export default function Footer({ windowHeight }) {
    const styles = StyleSheet.create({
        footer: {
            height: windowHeight,
        },
    });
    return (
        <View className="bg-white px-2 pt-2 pb-3 gap-2 flex-col" style={styles.footer}>
            <View className="flex-row justify-between">
                <Text className="text-gray-400 font-bold text-[15px]">Subtotal</Text>
                <Text className="text-gray-400 font-bold text-[15px]">$20.2</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="text-gray-400 font-bold text-[15px]">Delivery Fee</Text>
                <Text className="text-gray-400 font-bold text-[15px]">$20.2</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="text-black font-bold text-[15px]">Order Total</Text>
                <Text className="text-black font-bold text-[15px]">$40.2</Text>
            </View>
            <View className="bg-[#54B8B2] rounded-md py-3">
                <Text className="text-center text-lg text-white font-bold">Place Order</Text>
            </View>
        </View>
    );
}
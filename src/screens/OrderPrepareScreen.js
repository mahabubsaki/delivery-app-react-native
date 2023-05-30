import { View, Text, SafeAreaView, Image } from 'react-native';
import React, { useEffect } from 'react';
import gif from '../../assets/output-onlinegiftools.gif';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

export default function OrderPrepareScreen() {
    const navigation = useNavigation();
    useEffect(() => {
        const timeId = setTimeout(() => {
            navigation.navigate('Delivery');

        }, 5000);
        return () => {
            clearTimeout(timeId);
        };
    }, []);
    return (
        <SafeAreaView className="bg-[#00CCBB] flex-1 items-center justify-center">
            <View>

                <Animatable.Text className="text-center text-2xl text-white font-bold" iterationCount={1} animation={'slideInLeft'}>Processing Your Order</Animatable.Text>
                <Animatable.Image source={gif} animation={'slideInUp'} iterationCount={1} />
                <Animatable.Text className="text-center   text-xl text-white font-bold" iterationCount={1} animation={'slideInRight'}>Waiting for Accepted</Animatable.Text>
                <View className="items-center my-4">
                    <Progress.Circle size={60} indeterminate color='white' />
                </View>

            </View>

        </SafeAreaView>
    );
}
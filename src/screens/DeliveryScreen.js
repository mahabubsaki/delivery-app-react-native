import { View, Text, SafeAreaView, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { restaurent } from '../store/reducers/restaurentReducer';
import { Entypo } from '@expo/vector-icons';
import img from '../../assets/200w_s.gif';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import deliveryIcon from '../../assets/header-img.png';
import MapView, { Marker } from 'react-native-maps';

export default function DeliveryScreen() {
    const currentRestaurent = useSelector(restaurent);
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View className="h-[28vh] pt-14 bg-[#54B8B2]">
                <View className="flex-row justify-between items-center px-4  relative">
                    <View>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
                            <Entypo name="cross" size={24} color="#78CCCE" />
                        </TouchableWithoutFeedback>

                    </View>
                    <Text className="text-[#78CCCE] font-bold text-base">Need Help?</Text>
                    <View className="absolute bg-[#FFFAFA] shadow-2xl px-4 py-6 top-10 rounded left-4 right-4">
                        <View className="z-10 relative">
                            <View className="flex-row justify-between items-center">
                                <View className="gap-y-1">
                                    <Text className="text-slate-400 font-semibold text-base">Estimated Arrival</Text>
                                    <Text className="font-bold text-3xl">45 - 55 Minutes</Text>
                                    <View>
                                        <Progress.Bar progress={0.7} indeterminate width={200} color='#78CCCE' />
                                    </View>
                                </View>
                                <Image source={img} className="w-[64px] h-[64px]" />
                            </View>
                            <Text className="mt-2 text-slate-400 font-semibold">Your order at {currentRestaurent.foodTitle} is being prepared, Don't close this screen</Text>
                        </View>
                    </View>
                </View>

            </View>
            <View className="h-[65vh] -z-10">
                <MapView mapType='mutedStandard' className="h-full" initialRegion={{
                    latitude: currentRestaurent.lat,
                    longitude: currentRestaurent.long,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}>
                    <Marker coordinate={{ latitude: currentRestaurent.lat, longitude: currentRestaurent.long }} title={`${currentRestaurent.foodTitle}`} identifier='origin' description={currentRestaurent.short_description} pinColor='#54B8B2' />
                </MapView>
            </View>
            <View className="h-[12vh] flex-row justify-between shadow-2xl bg-[#FFFAFA] px-4 items-center">
                <View className="flex-row gap-5 items-center">
                    <Image source={deliveryIcon} className="w-[45px] h-[45px] rounded-full" />
                    <View className="gap-y-1">
                        <Text className="text-[17px] font-semibold">Mahabub Saki</Text>
                        <Text className="opacity-50 text-[15px]">Your Rider</Text>
                    </View>
                </View>
                <Text className="text-[#54B8B2] font-bold text-base">Call</Text>
            </View>
        </SafeAreaView>
    );
}
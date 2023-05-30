import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from '../components/Basket/Header';
import Footer from '../components/Basket/Footer';
import headerImg from '../../assets/header-img.png';
import { useSelector } from 'react-redux';
import { items, total } from '../store/reducers/basketReducer';
import BasketRows from '../components/Basket/BasketRows';
import empty from '../../assets/icons8-where-what-quest-50.png';
const windowHeight = Dimensions.get('window').height;

export default function BasketScreen() {
    const { params: { foodTitle } } = useRoute();
    const basketItems = useSelector(items);
    const styles = StyleSheet.create({
        container: {
            height: windowHeight * 0.63,
        },
    });
    const totalCost = useSelector(total);
    return (
        <View>
            <Header foodTitle={foodTitle} />
            <View style={styles.container}>
                <View className="flex-row justify-between items-center bg-white p-4 my-4">
                    <View className="flex-row items-center gap-x-2">
                        <Image source={headerImg} className="h-9 w-9 bg-gray-300 p-4 rounded-full mr-2" />
                        <Text className="font-medium">Deliver in 50-75 min</Text>
                    </View>
                    <View>
                        <Text className="font-medium text-[#54B8B2]">Change</Text>
                    </View>
                </View>
                <ScrollView className="mb-4">
                    {basketItems.length > 0 ? basketItems.map(({ image, price, quantity, name, id }, index) => <BasketRows key={index} image={image} price={price} quantity={quantity} id={id} name={name} />) :
                        <View className="mt-20">
                            <Text className="text-gray-400 text-xl text-center">No Items in Basket</Text>
                            <View className="flex-row justify-center mt-3">
                                <Image source={empty} />
                            </View>
                        </View>}
                </ScrollView>
            </View>
            <Footer totalCost={totalCost} windowHeight={windowHeight - 120} />
        </View>
    );
};
import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from '../components/Basket/Header';
import Footer from '../components/Basket/Footer';
const windowHeight = Dimensions.get('window').height;

export default function BasketScreen() {
    const { params: { foodTitle } } = useRoute();
    const styles = StyleSheet.create({
        container: {
            height: windowHeight * 0.65,
        },
    });
    console.log(foodTitle);
    return (
        <View>
            <Header foodTitle={foodTitle} />
            <ScrollView style={styles.container}>

            </ScrollView>
            <Footer windowHeight={windowHeight - 120} />
        </View>
    );
}
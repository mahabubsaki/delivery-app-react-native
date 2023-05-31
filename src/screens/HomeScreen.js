import { useNavigation, useNavigationState, useRoute } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import headerImage from '../../assets/header-img.png';
import { AntDesign, Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';
import Header from '../components/Home/Header';
import SearchBox from '../components/Home/SearchBox';
import CategoriesSlider from '../components/Home/CategoriesSlider';
import FoodRows from '../components/Home/FoodRows';
import { allFoods } from '../constants';
import { useDispatch } from 'react-redux';
import { clearBasket } from '../store/reducers/basketReducer';


const HomeScreen = () => {
    //hello

    const dispatch = useDispatch();
    const state = useNavigationState(state => state);
    useEffect(() => {
        const routeName = state.routeNames[state.index];
        if (routeName === 'Home') {
            dispatch(clearBasket());
        }
    }, [state]);
    const [loaded, setLoaded] = useState(true);
    useEffect(() => {
        const timeId = setTimeout(() => {
            setLoaded(false);
        }, 3000);
        return () => {
            clearTimeout(timeId);
        };
    }, []);
    if (loaded) {
        return <View className="flex-1 justify-center">
            <ActivityIndicator size={'large'} color={'gray'} />
        </View>;
    }
    return (
        <ScrollView>
            <SafeAreaView className="bg-white">
                <View className="mx-[10px] bg-white">
                    {/* Header */}
                    <Header />
                    {/* SearchBox */}
                    <SearchBox />
                </View>
                <View>
                    {/* CategorySlider */}
                    <CategoriesSlider />
                    {/* Rows */}
                    <ScrollView className="bg-[#f2f4f5] pl-3 pt-3">
                        {/* OfferRows */}
                        <FoodRows title="Offers" description="Why not support your local restaurant tonight near you!" foods={allFoods.filter(item => item.speciality === 'offer')} />
                        {/* FeaturedRows */}
                        <FoodRows title="Featured" description="Paid placements from our partners" foods={allFoods.filter(item => item.speciality === 'featured')} />
                        {/* DiscountRows */}
                        <FoodRows title="Discounts" description="Everyone's been enjoying these juicy discounts!" foods={allFoods.filter(item => item.speciality === 'discount')} />
                    </ScrollView>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default HomeScreen;
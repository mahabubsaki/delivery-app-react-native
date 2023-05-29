import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { dishes } from '../../constants';
import DishRow from './DishRow';

export default function Menus() {
    const [pressed, setPressed] = useState("");
    useEffect(() => {
        return () => {
            setPressed('');
        };
    }, []);
    return (
        <View className="">
            <View className="pt-4 pb-3 pl-4"><Text className="font-bold text-lg">Menu</Text></View>
            <View className="bg-white pb-20">
                {dishes.map(({ id, name, description, price, image }, index) => <DishRow key={id} id={id} name={name} setPressed={setPressed} pressed={pressed} description={description} price={price} image={image} index={index} />)}
            </View>
        </View>
    );
}
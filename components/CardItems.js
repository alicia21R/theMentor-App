import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS,SIZES,icons } from "../constants";

const CardItem = ({ item, isSelected, onPress}) =>{
    return(
       <TouchableOpacity>

           <Text>{item.name}</Text>
       </TouchableOpacity>
    )
}
export default CardItem

import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { COLORS, FONTS, SIZES, icons } from "../constants";


const CartQuantityButton=({ containerStyle, iconStyle, quantity, onPress}) =>{

    return(
        <TouchableOpacity
        style={{
            width:40,
            height:40,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:SIZES.radius,
            backgroundColor:COLORS.white,
            ...containerStyle
        }}

        onPress={onPress}
        >

        <Image
        source={icons.cart}
        style={{
            width:30,
            height:30,
            tintColor:COLORS.black,
            ...iconStyle
        }}
        
        />

        <View
        
            style={{
                position:'absolute',
                justifyContent:'center',
                top:5,
                right:5,
                height:20,
                width:20,
                alignItems:'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary

            }}
        >
            <Text
                style={{
                    color:COLORS.white,
                    ...FONTS.body5,
                    lineHeight:0,
                    fontSize:10

                }}
            >
                {quantity}
            </Text>

        </View>

        </TouchableOpacity>
    )
}

export default CartQuantityButton;
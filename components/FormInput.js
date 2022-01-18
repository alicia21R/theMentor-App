import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { FONTS,COLORS,SIZES } from "../constants";


const FormInput = ({ 
    containerStyle,
    inputContainerStyle,
    label,
    placeholder,
    inputStyle,
    value="",
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType="default",
    autoCompleteType="off",
    errorMsg="",
    autoCapitalize,
    maxLength 
 }) => {
    return (
        <View
            style={{
               ...containerStyle
            }}
        >
            <View
            style={{
                flexDirection:'row',
                justifyContent: 'space-between'
            }}
            >
                <Text style={{color:COLORS.gray, ...FONTS.body4}}>{label}</Text>
                <Text  style={{color:COLORS.red, ...FONTS.body4}}>{errorMsg}</Text>
            </View>

            {/* input area */}
            <View
            style={{
                flexDirection:'row',
                backgroundColor:COLORS.lightGray2,
                paddingHorizontal:SIZES.padding,
                borderRadius:SIZES.radius,
                height:SIZES>800? 55: 45,
                marginTop: SIZES>800? SIZES.base: 0, 
                ...inputContainerStyle 
            }}
            >
            {prependComponent}

                <TextInput
                 style={{flex: 1, ...inputStyle}} 
                 value={value}
                 placeholder={placeholder}
                 placeholderTextColor={COLORS.gray}
                 secureTextEntry={secureTextEntry}
                 keyboardType={keyboardType}
                 autoCompleteType={autoCompleteType}
                 autoCapitalize={autoCapitalize}
                 maxLength={maxLength}
                 onChangeText={(text) => onChange(text)}
                 />
            {appendComponent}

            </View>
        </View>
    )
}

export default FormInput;
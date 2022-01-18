import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {Header, IconButton,FormInput,CardItem,FooterTotal} from "../../components";
import { FONTS, SIZES, COLORS, icons, dummyData} from "../../constants";

const Checkout = ({ navigation, route }) => {

    const[selectedCard, setSelectedCard] = React.useState(null)
    React.useEffect(()=> {
        let{selectedCard} =route.params
        setSelectedCard(selectedCard)
    }, [])

    function renderHeader() {
        return(
            <Header
            title=" CHECK OUT"
        containerStyle={{
            height: 50,
            marginHorizontal: SIZES.padding,
            marginTop: 40
        }}

        leftComponent={
            <IconButton
            icon={ icons.back}
            containerStyle={{
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderRadius: SIZES.radius,
                borderColor: COLORS.gray2
            }}

            iconStyle={{
                width: 20,
                height: 20,
                tintColor: COLORS.gray2
            }}

            onPress={() => navigation.goBack()}
            />

        }

        rightComponent={
           <View 
           style={{
               width: 40,
           }}
           />
        }
        />
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor:COLORS.white
            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Body */}
            <KeyboardAwareScrollView
            keyboardDismissMode="on-drag"
            extraScrollHeight={-200}
            co
            >

            </KeyboardAwareScrollView>
        </View>
    )
}

export default Checkout;
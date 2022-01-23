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
function renderMyCards() {
    return(
        <View>
            {selectedCard && dummyData.myCards.map((item, index)
            =>{
             return(
                 <CardItem 
                 key={'MyCard-${item.id}'}
                 item={item}
                 isSelected={'${selectedCard?.key}-${selectedCard?.id}' == 'MyCard-${item.id}'}
                 onPress={() => setSelectedCard({...item, key:"MyCard"})}
                 />
             )   
            }
            )}
        </View>
    )
}

function renderDeliveryAddress(){

    return(
        <View
        style={{
            marginTop:SIZES.padding,
        }}
        >
            <Text style={{...FONTS.h3}}>Delivery Address</Text>
            <View
            style={{
                 flexDirection:'row',
                 alignItems:'center',
                 marginTop:SIZES.radius,
                 paddingVertical:SIZES.radius,
                 paddingHorizontal:SIZES.padding,
                 borderWidth:2,
                 borderRadius:SIZES.radius,
                 borderColor:COLORS.lightGray2

            }}
            >
                <Image 
                source={icons.location1}
                style={{
                    width:50,
                    height:50
                }}
                />

                <Text
                style={{
                    marginLeft:SIZES.radius,
                    width: "85%",
                    ...FONTS.body3
                }}
                > 300 san Fransisco Peru, CA</Text>

            </View>
        </View>
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
            contentContainerStyle={{
                flexGrow:1,
                paddingHorizontal:SIZES.padding,
                paddingBottom:20
            }}

            >
                {/* My Cards */}
                {renderMyCards()}

                {/* Delivery Address */}
                {renderDeliveryAddress()}

            </KeyboardAwareScrollView>

            <FooterTotal 
            subTotal={40000}
            shippingFee={0000}
            total={40000}
            onPress={()=> navigation.replace("Success")}
            />
        </View>
    )
}

export default Checkout;
import React from 'react';
import { 
    View, Text, Image,ImageBackground
 } from 'react-native';

import {KeyboardAwareScrollView} from"react-native-keyboard-aware-scroll-view";
import {FormInput, FormInputCheck, RadioButton, Header,IconButton,TextButton } from "../../components";
import { FONTS,COLORS,SIZES,icons,images } from "../../constants";
import { utils } from "../../utils";

const AddCard =({navigation,route}) =>{

    const[selectedCard, setSelectedcard]=React.useState(null) 
    const[cardNumber, setCardNumber] =React.useState("")
    const[cardNumberError, setCardNumberError] =React.useState("")
    const[cardName, setCardName] =React.useState("") 
    const[cardNameError, setCardNameError] =React.useState("")
    const[expiryDate, setExpiryDate] =React.useState("")
    const[expiryDateError, setExpiryDateError] =React.useState("")
    const[cvv, setCvv] =React.useState("")
    const[cvvError, setCvvError] =React.useState("")
    const[isRemember, setIsRemember] =React.useState(false)
    
    
    
    React.useEffect(() =>{
        let {selectedCard}=route.params

        setSelectedcard(selectedCard )
    },[])

    function isEnableAddCard() {
        return cardNumber != "" && cardName !="" && expiryDate !=""
        && cvv != "" && cardNumberError =="" && cardNameError =="" && expiryDateError=="" && cvvError ==""
    }

    function renderHeader() {
        return(
            <Header
            title=" Add New Card"
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

    function renderCard() {
        return(
            <ImageBackground
            source={images.card}
            style={{
                height: 200,
                width:"100%",
                marginTop:SIZES.radius,
                borderRadius:SIZES.radius,
                overflow:'hidden'
            }}
            >
                {/* Logo */}
                <Image
                source={selectedCard?.icon}
                style={{
                    position:'absolute',
                    top: 20,
                    right:20,
                    height:40,
                    width:80
                }}
                />

                {/* Card Details */}
                <View
                style={{
                    position:'absolute',
                    bottom:10,
                    left:0,
                    right:0,
                    paddingHorizontal: SIZES.padding  
                }}
                >
                    <Text style={{color:COLORS.white, ...FONTS.h3}}>{cardName}</Text>

                </View>
                {/* card number and exp date */}
                <View
                style={{
                    flexDirection:'row'
                }}
                >
                    <Text style={{flex:1, color:COLORS.white,...FONTS.body3}}> {cardNumber}    </Text>
                    <Text style={{color:COLORS.white,...FONTS.body3}}> {expiryDate} </Text>
                </View>

            </ImageBackground>
        )
    }
 
    function renderForm() {
        return(
            <View 
            style={{
                marginTop:SIZES.padding*2
            }}
            >
                {/* card number */}
                <FormInput  
                label="Card Number"
                keyboardType="number-pad"
                value={cardNumber}
                maxLength={19}
                onChange={(value) => {
                    setCardNumber(value)
                utils.validateInput(value,19,setCardNumberError)
                }}
                errorMsg={cardNumberError}

                appendComponent={
                    <FormInputCheck
                    value={cardNumber}
                    error={cardNumberError}
                    />
                }
                />

                {/* CardHolder Name */}
                <FormInput  
                label="CardHolder Name"
                containerStyle={{
                    marginTop: SIZES.radius
                }}
                value={cardName}
                onChange={(value) => {
                    setCardName(value)
                utils.validateInput(value,1,setCardNameError)
                }}
                errorMsg={cardNameError}

                appendComponent={
                    <FormInputCheck
                    value={cardName}
                    error={cardNameError}
                    />
                }
                />

                {/* Expiry Date & CVV */}
                <View 
                style={{
                    flexDirection:'row',
                    marginTop:SIZES.radius
                }}
                >
                <FormInput  
                label=" Expiry Date"
                containerStyle={{
                    marginTop: SIZES.radius
                }}
                value={expiryDate}
                placeholder="MM/YY"
                maxLength={5}
                onChange={(value) => {
                    setExpiryDate(value)
                utils.validateInput(value,5,setExpiryDateError)
                }}
               

                appendComponent={
                    <FormInputCheck
                    value={expiryDate}
                    error={expiryDateError}
                    />
                }
                />

                <FormInput  
                label=" CVV"
                containerStyle={{
                    flex:1,
                    marginLeft: SIZES.radius
                }}
                value={cvv}
                maxLength={3}
                onChange={(value) => {
                    setCvv(value)
                utils.validateInput(value,3,setCvvError)
                }}
               

                appendComponent={
                    <FormInputCheck
                    value={cvv}
                    error={cvvError}
                    />
                }
                />

                </View>

                {/* radio   button */}
                <View 
                style={{
                    alignItems: 'flex-start',
                    marginTop:SIZES.padding
                }}
                >
                    <RadioButton 
                     label="Remember This Cards Details"
                    isSelected={isRemember}
                    onPress={() => setIsRemember(!isRemember)}
                    />


                </View>
            </View>
        )
    }

    function renderFooter() {
        return(
            <View 
            style={{
                paddingTop:SIZES.radius,
                paddingBottom: SIZES.padding,
                paddingHorizontal: SIZES.padding
            }}
            >

                <TextButton
                label="Add Card"
                disabled={!isEnableAddCard()}
                buttonContainerStyle={{
                    height:60,
                    borderRadius:SIZES.radius,
                    backgroundColor: isEnableAddCard()? COLORS.primary : COLORS.transparentPrimary
                }}

                onPress={() => navigation.goBack()}
                
                />
            </View>
        )
    }

    return(
        <View
        style={{
            flex:1,
            backgroundColor:COLORS.white
        }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Body */}
            <KeyboardAwareScrollView
            keyboardDismissMode="on-drag"
            contentContainerStyle={{
                flexGrow:1,
                paddingHorizontal:SIZES.padding
            }}
            >
            {/* Card Section*/}
            {renderCard()}

            {/* Form Section */}
            {renderForm()}


            </KeyboardAwareScrollView>
            

            {/* Footer */}
            {renderFooter()}
        </View>
    )
}


export default AddCard;
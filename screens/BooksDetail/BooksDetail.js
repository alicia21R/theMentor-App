import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { FONTS, COLORS, SIZES , icons, images, dummyData} from "../../constants";
import { 
    Header,
    IconButton,
    CartQuantityButton,
    IconLabel,
    TextButton,
    LineDivider,
    StepperInput 
 } from "../../components";


const BooksDetail =({ navigation }) =>{

    //state for the item selected
 
    const [BookItem, setBookItem] = React.useState(dummyData.CreativeThinking)
    const [Qty, setQty] = React.useState(1)
 
    function renderHeader() {
        return( 
            <Header
            title="Book Details"
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
                    justifyContent:'center',
                    alignItems:'center',
                    borderWidth: 1,
                    borderRadius: SIZES.radius,
                    borderColor: COLORS.gray2
                }}

                iconStyle={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.gray2
                }}

                onPress={() => console.log('Back')}
                />
            }

            rightComponent={
                <CartQuantityButton
                
                quantity={Qty}
                
                
                />
            }
        />

        )
        
    }

    function renderDetail() {
        return(
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding,
                    paddingHorizontal: SIZES.radius
                }}
            >

                {/* Image Card */}
                <View
                 style={{
                     height: 300,
                     borderRadius: 15,
                     backgroundColor: COLORS.lightGray2
                 }}
                >
                    <Image
                     source={BookItem?.image}
                     resizeMode='contain'
                     style={{
                         height: 300,
                         width: "100%"
                     }}
                    
                    />

                </View>

                {/* Image description */}
                <View
                    style={{
                        marginTop: SIZES.padding
                    }}
                >
                    {/* Name and Description */}

                    <Text 
                        style={{
                            ...FONTS.h1
                        }}
                    >
                        {BookItem?.name}
                    </Text>

                    <Text
                    style={{
                        marginTop:SIZES.base,
                        color: COLORS.darkGray,
                        textAlign:'justify',
                        ...FONTS.body3

                    }}
                    >
                        {BookItem?.description}
                    </Text>

                    {/* Ratings */}
                    <View
                    style={{
                        flexDirection:'row',
                        marginTop: SIZES.padding
                    }}
                    >
                        <IconLabel
                        containerStyle={{
                            backgroundColor: COLORS.primary
                        }}

                        icon={icons.star}
                        label="4.5"
                        labelStyle={{
                            color: COLORS.white
                        }}
                        />
                    </View>



                </View>
            </View>
        )
    }



    function  renderFooter() {
        return(
            <View 
             style={{
                 flexDirection:'row',
                 height: 150,
                 alignItems:'center',
                 paddingHorizontal: SIZES.padding,
                 paddingBottom:SIZES.radius
             }}
            >
                {/* stepper input */}
                <StepperInput 
                 value={Qty}
                 onAdd={() => setQty(Qty +1)}
                 onMinus={() => {

                    if (Qty > 1) {
                        setQty(Qty -1)}
                    }
                 } 
                />
                {/* text Button */}
                <TextButton 
                 buttonContainerStyle={{
                     flex: 1,
                     flexDirection:'row',
                     height: 60,
                     marginLeft: SIZES.radius,
                     paddingHorizontal: SIZES.radius,
                     borderRadius:SIZES.radius,
                     backgroundColor: COLORS.primary
                 }}

                 label = "Buy Now"
                 label2=" UGX 20000 "

                 onPress = {() => navigation.navigate('MyCart')}
                
                />
            </View>
        )
    }

    return (
        <View
            style ={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Body */}
            <ScrollView>

                {/* Book image */}
                {renderDetail()}

                <LineDivider/>
            </ScrollView>

            {/* Footer */}
            <LineDivider/>
            {renderFooter()}

        </View>
    )
}
export default BooksDetail;
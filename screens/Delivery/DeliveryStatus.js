import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Header, LineDivider,TextButton } from "../../components";
import { FONTS,COLORS,SIZES,icons,constants} from "../../constants"
const DeliveryStatus = ({ navigation }) =>{

    const[currentStep, setCurrentStep] = React.useState(0)
    

    function renderHeader(){
        return(
            <Header
            title=" DELIVERY STATUS"
        containerStyle={{
            height: 50,
            marginHorizontal: SIZES.padding,
            marginTop: 40
        }} />
        )
    }

    function renderOrderInfo(){
        return(
            <View
            style={{
                marginTop:SIZES.radius,
                paddingHorizontal:SIZES.padding
            }}
            >
                <Text style={{ ...FONTS.body4, textAlign="center", color:COLORS.gray}}> Estimated Delivery</Text>
                <Text style={{ ...FONTS.h2, textAlign:"center"}}> 31 November 2022 / 12:30 am</Text>

            </View>
          
        )
    }

    function renderTrackOrder(){
        return(
            <View
            style={{
                marginTop:SIZES.padding,
                paddingVertical:SIZES.padding,
                borderRadius:SIZES.radius,
                borderWidth:2,
                borderColor:COLORS.lightGray2,
                backgroundColor:COLORS.white2
            }}
            >
                 {/* Track Order */}
                 <View
                 style={{
                     flexDirection:'row',
                     alignItems:'center',
                     justifyContent:'center',
                     marginBottom:20,
                     paddingHorizontal:SIZES.padding
                 }}
                 >
                     <Text style={{ ...FONTS.h3}}> Track Order</Text>
                     <Text style={{...FONTS.body3, color:COLORS.gray }}> BM00123 </Text>


                 </View>

                 <LineDivider 
                 lineStyle={{
                     backgroundColor: COLORS.lightGray2
                 }}
                 
                 />

                 {/* Status */}
                 <View
                 style={{
                     marginTop:SIZES.padding,
                     paddingHorizontal:SIZES.padding
                 }}
                 >
                     {constants.track_order_status.map((item,index)
                     =>{
                         return(
                             <View
                             key={'StatusList-${index}'}
                             >
                                 {/* rendering track order icon and text component */}
                                <View
                                style={{
                                    flexDirection:'row',
                                    alignItems:'center',
                                    marginVertical:-5
                                }}
                                >
                                    <Image
                                    source={icons.check_circle}
                                    style={{
                                        width:40,
                                        height:40,
                                        tintColor: index<=currentStep? COLORS.primary : COLORS.lightGray1

                                    }}
                                    />

                                    {/* For the text Components */}
                                    <View
                                    style={{
                                        marginLeft:SIZES.radius,
                                    }}
                                    >
                                        <Text style={{ ...FONTS.h3}}> {item.title}</Text>
                                        <Text style={{...FONTS.body4, color:COLORS.gray}}>{item.sub_title}</Text>


                                    </View>

                                </View>
                                {/* linedivider between icons */}

                                {index < constants.track_order_status.length-1 && 
                                <View>
                                    {index< currentStep && 
                                    <View 
                                    style={{
                                        height:50,
                                        width:3,
                                        marginLeft:18,
                                        backgroundColor:COLORS.primary,
                                        zIndex:-1
                                    }}
                                    />}

                                    {index >= currentStep && 
                                    <Image
                                        source={icons.dotted_line}
                                        resizeMode="cover"
                                        style={{
                                            height:50,
                                            width:4,
                                            marginLeft:16,
                                            
                                        }}
                                    />
                                    }
                                
                                </View>}
                             </View>

                         )
                     })}

                 </View>
            </View>
        )
    }

    function renderFooter(){
        return(
            <View
            style={{
            marginTop:SIZES.radius,
            marginBottom: SIZES.padding
            }}
            >

            {currentStep < constants.track_order_status.length-1 &&
            <View
            style={{
                flexDirection:'row',
                height:55
            }}
            > 
                {/* cancel */}
                <TextButton
                buttonContainerStyle={{
                    width:"40%",
                    borderRadius:SIZES.base,
                    backgroundColor: COLORS.lightGray2
                }}

                label="Cancel"
                labelStyle={{
                    color:COLORS.primary
                }}
                onPress={() => navigation.navigate("BooksDetail")}
                
                
                />

                {/* Back to Home */}
                {/* 2:47:55 */}
            </View>
                
                
                }

            </View>
        )
    }


    return(
        <View
        style={{
            flex:1,
            paddingHorizontal:SIZES.padding,
            backgroundColor:COLORS.white
        }}
        >

            {/* Header */}
            {renderHeader()}


            {/* Order Information */}
            {renderOrderInfo()}

            {/* TrackOrder */}
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                {renderTrackOrder()}
            </ScrollView>
            

            {/* Footer */}
            {renderFooter()}


        </View>
    )
}

export default DeliveryStatus;


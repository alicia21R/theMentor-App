import React from 'react';
import { View, Text , BackHandler, Image} from 'react-native';
import { TextButton } from '../../components';
import{ FONTS, SIZES, images, COLORS } from "../../constants"

const Success=({ navigation}) =>{

    React.useEffect(() =>{     
        const backHandler= BackHandler.addEventListener('hardwareBackPress', () =>{return true})
        return() => backHandler.remove();
    },[])
    return(
        <View
        style={{
            flex:1,
            paddingHorizontal:SIZES.padding,
            backgroundColor:COLORS.white
        }}
        >
            <View
            style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'
            }}
            >
                <Image 
                  source={images.success}
                  resizeMode="contain"
                  style={{
                      width:150,
                      height:150
                  }}
                />

                <Text style={{marginTop:SIZES.padding, ...FONTS.h1}}> Congratulations!</Text>
                <Text style={{...FONTS.body3, textAlign:'center',color:COLORS.darkGray, marginTop:SIZES.base}}>Payment was successfully made</Text>
            </View>

            <TextButton
            label="Transaction Complete."
            buttonContainerStyle={{
                height:55,
                marginBottom:SIZES.padding,
                borderRadius:SIZES.radius,
                backgroundColor:COLORS.primary
            
            }}

            onPress={() => navigation.navigate("DeliveryStatus")}
            
            />

        </View>
    )
}

export default Success;


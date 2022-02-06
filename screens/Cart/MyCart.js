import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { 
    Header,
    IconButton,
    CartQuantityButton,
    StepperInput,
    FooterTotal
 } from "../../components";

import { FONTS,COLORS,SIZES,icons,dummyData } from "../../constants";
import { useEffect } from 'react';


const MyCart = ({  navigation }) =>{

    //states for holding the quantity in the cart
    const [myCartList, setMycartList] = React.useState(dummyData.myCart)
    const [sum,setSum] = React.useState(autoSum(myCartList))

    // useEffect(() => { 
    //        document.title = `You clicked ${count} times`;  
    //     });


    // autosummation function
    function autoSum(list){
      let  sum=0;
        for (let i = 0; i < list.length; i++) {
            // myCartList[i];          
            sum+=myCartList[i].qty*myCartList[i].price
        }
        return sum;
    }
    

    //Quatntity Handler
    function updateQuantityHandler(newQty,id) {
        
        const newMyCartList = myCartList.map(cl => (
            cl.id === id? {...cl, qty: newQty} :cl
        ))

        setMycartList(newMyCartList)
        setSum(newMyCartList)
    }

    function removeMyCarthandler(id) {
        let newMyCartList=[...myCartList]
        const index = newMyCartList.findIndex(cart => cart.id===id)

        newMyCartList.splice(index, 1)

        setMycartList(newMyCartList)
    }

    //Render

    function renderHeader() {
        return(
        <Header 
        title=" My Cart"
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
            <CartQuantityButton
            
            quantity={3}
            
            
            />
        }
        />

        )
    } 


    function renderCartList() {
        return(
            <SwipeListView
            data={myCartList}
            keyExtractor={item => `${item.id}`}
            contentContainerStyle={{
                marginTop:SIZES.radius,
                paddingHorizontal:SIZES.padding,
                paddingBottom:SIZES.padding * 4
            }}
             
            disableRightSwipe={true}
            rightOpenValue={-75}

            renderItem= {(data,rowMap) =>(
                <View 
                    style={{
                       
                        height:100,
                        backgroundColor:COLORS.lightGray2,
                        ...styles.cartItemContainer
                       
                    }}
                >
                   {/* Item image */}
                   <View
                   style={{
                       width:90,
                       height:100,
                       marginLeft:-15
                   }}
                   >
                       <Image 
                       source={data.item.image}
                       resizeMode='contain'
                       style={{
                           width:"100%",
                           height:"100%",
                           position:'absolute',
                           top: 10
                       }}
                       
                       />

                   </View>

                   {/* Item Info */}
                   <View style={{flex: 1}}>
                       <Text style={{...FONTS.body3, marginLeft:10}}>{data.item.name}</Text>
                       <Text style={{color:COLORS.primary, ...FONTS.h3, marginLeft:10}}> UGX {data.item.price}</Text>
                   </View>

                   {/* quantity */}
                   <StepperInput
                   containerStyle={{
                       height:50,
                       width:120,
                       backgroundColor: COLORS.white
                   }}
                   
                   value={data.item.qty}
                   onAdd={() => updateQuantityHandler(data.item.qty + 1, data.item.id)}
                   onMinus={() => {
                       if(data.item.qty>1){
                        updateQuantityHandler(data.item.qty  -1, data.item.id)
                       }
                   }}
                   />

                </View>
            )}

            renderHiddenItem={( data, rowMap) => (
                <IconButton 
                containerStyle={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    backgroundColor: COLORS.primary,
                    ...styles.cartItemContainer

                }}
                icon={icons.delete_icon}
                iconStyle={{
                    marginRight: 10
                }}
                onPress={() => removeMyCarthandler(data.item.id)}
                />
            )}
            
            />
        )
    }

    return(
        <View
        style={{
            flex:1,
            backgroundColor: COLORS.white
           
        }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Cart List */}
            {renderCartList()}

            {/* Footer */}
            <FooterTotal
            subTotal={sum}
            shippingFee={2000}
            total={sum+2000}
            onPress={() => navigation.navigate("MyCard")}
            
            />

        </View>
        
    )
}

//style container to be used in the select button
const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection:'row',
        alignItems:'center',
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius
 
    }
})

export default MyCart;

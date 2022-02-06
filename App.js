
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {
    BooksDetail,
    MyCart,
    MyCard,
    AddCard,
    CheckOut,
    Success,
    DeliveryStatus,
} from "./screens";

const Stack = createStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'BooksDetail'}
            >
                <Stack.Screen
                    name="BooksDetail"
                    component={BooksDetail}
                />

                <Stack.Screen
                    name="MyCart"
                    component={MyCart}
                />

                <Stack.Screen
                    name="MyCard"
                    component={MyCard}
                />


                <Stack.Screen
                    name="Checkout"
                    component={CheckOut}
                />

               
                <Stack.Screen
                    name="AddCard"
                    component={AddCard}
                />

                <Stack.Screen
                    name="Success"
                    component={Success}
                />

                <Stack.Screen
                    name="DeliveryStatus"
                    component={DeliveryStatus}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;

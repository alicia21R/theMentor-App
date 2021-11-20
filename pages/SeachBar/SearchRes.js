import React from "react";
import {
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  SafeAreaView,
  
} from "react-native";
import { Searchbar} from "react-native-paper";


class SearchRes extends React.Component {
  state = {
    firstQuery: "",
  };
  render() {
  const { firstQuery } = this.state;
    
    return (
    
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Searchbar
                style={{marginHorizontal: 20,
                   borderRadius: 25 ,
                   backgroundColor: 'lightgrey', 
                   marginBottom: 7,
                   width: '80%'}}
                placeholder="Search Resources"
                onChangeText={(query) => {
                  this.setState({ firstQuery: query });
                }}
                value={firstQuery}
              />
            </View>    
        
     
    );
  }
}
export default SearchRes;

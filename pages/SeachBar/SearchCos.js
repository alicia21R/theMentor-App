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


class SearchCos extends React.Component {
  state = {
    firstQuery: "",
  };
  render() {
  const { firstQuery } = this.state;
    
    return (
     
            <View style={{alignItems: 'center', }}>
              <Searchbar
                style={{ marginHorizontal: 20, 
                  borderRadius: 25 ,
                  backgroundColor: 'lightgrey', 
                  marginBottom: 5,
                  width: '80%'}}
                placeholder="Search Courses"
                onChangeText={(query) => {
                  this.setState({ firstQuery: query });
                }}
                value={firstQuery}
              />
            </View>    
    
    );
  }
}
export default SearchCos;

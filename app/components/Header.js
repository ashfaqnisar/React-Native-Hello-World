import React, {useState} from 'react';
import {View, Text,StyleSheet} from "react-native";

const Header = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const toggleUser = () => {
        setIsLoggedIn(!isLoggedIn)
    }
    const styles= StyleSheet.create({
        statusbar:{
            flex:0.4,
            backgroundColor: "#186ef5"
        },
        headerView:{
            flex:0.8,
            justifyContent:"center",
            backgroundColor:"#4285f4"
        },
        headerText:{
            color:"white",
            fontSize:10,
            textAlign:"right",
            paddingEnd:8
        }
    })
    return (
        <>
            <View style={styles.statusbar}/>
            <View style={styles.headerView}>
                <Text style={styles.headerText} onPress={toggleUser}>{isLoggedIn ? 'User' : props.message}</Text>
            </View>
        </>

    );
};

export default Header;

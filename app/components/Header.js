import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import logoImage from "../images/logo.png";

const Header = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const toggleUser = () => {
        setIsLoggedIn(!isLoggedIn)
    }
    const styles = StyleSheet.create({
        statusbar: {
            flex: 0.4,
            backgroundColor: "#186ef5"
        },
        headerView: {
            flex: 0.8,
            justifyContent: "center",
            backgroundColor: "#4285f4",
            flexDirection: "row"
        },
        headerText: {
            flex: 1,
            color: "white",
            fontSize: 10,
            textAlign: "right",
            textAlignVertical: "center",
            paddingEnd: 8
        }
    })
    return (
        <>
            <View style={styles.statusbar}/>
            <View style={styles.headerView}>
                <Image source={logoImage} style={{width: 60, height: 60}}/>
                <Text style={styles.headerText}
                      onPress={toggleUser}>{isLoggedIn ? 'User' : props.message}</Text>
            </View>
        </>

    );
};

export default Header;

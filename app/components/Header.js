import React, {useState} from 'react';
import {View, Text} from "react-native";

const Header = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const toggleUser = () => {
        setIsLoggedIn(!isLoggedIn)
    }
    return (
        <View >
            <Text style={{color:"white", marginTop:20}} onPress={toggleUser}>{isLoggedIn ? 'User' : props.message}</Text>
        </View>
    );
};

export default Header;

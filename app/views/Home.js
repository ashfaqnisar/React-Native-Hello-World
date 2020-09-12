import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from "react-native";
import Header from "../components/Header";


const styles = StyleSheet.create({
    container: {
        flex: 8.8,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
        color:'white'
    }
})

const Home = () => {
    const [count, setCount] = useState(0);
    const increaseTheCount = () => {
        setCount(count + 1);
    }
    return (
        <>
            <Header message={"Not Logged In"}/>
            <View style={styles.container}>
                <Text style={{flex:1, color: "white"}}>Home</Text>
                <Text style={{flex:1,fontSize: 20, color: "#ed1c24"}}>Count is {count}</Text>
            </View>
            <Button color={"#ed1c24"}
                    onPress={increaseTheCount} title={"Increase"}/>
        </>
    );
};

export default Home;

import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from "react-native";
import Header from "../components/Header";


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        <View style={styles.container}>
            <Text style={{color: "white", marginBottom: 30}}>Home</Text>
            <Button style={{}} color={"#ed1c24"}
                    onPress={increaseTheCount} title={"Increase"}/>
            <Text style={{fontSize: 20, color: "#ed1c24", marginTop: 30}}>Count is {count}</Text>
            <Header message={"Press to Login"}/>
        </View>
    );
};

export default Home;

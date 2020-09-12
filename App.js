import React, {useState} from "react";
import {View, Text,Button, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000"
    }
})
const App = () => {
    const [count, setCount] = useState(0);
    const increaseTheCount = () => {
        setCount(count + 1);
    }
    return (
        <View
            style={styles.container}
        >
            <Text style={{color: "white"}}>Ashfaq Nisar I am hello world </Text>
            <Button style={{marginTop: 30, marginBottom: 30}} color={"#ed1c24"}
                  onPress={increaseTheCount} title={"Increase"}/>
            <Text style={{fontSize: 20, color: "#ed1c24"}}>Count is {count}</Text>
        </View>
    );
}
export default App

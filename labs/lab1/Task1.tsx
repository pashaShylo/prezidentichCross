import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Pressable,
} from "react-native";
import React, { useState } from "react";

const Task1 = () => {
    const [firstInput, setFirstInput] = useState<any>();
    const [secondInput, setSecondInput] = useState<any>();
    const [thirdInput, setThirdInput] = useState<any>();
    const [res, setRes] = useState<any>(null);

    const calculate = () => {
        if (firstInput > 0 || secondInput > 0 || thirdInput > 0) {
            setRes(Math.pow(firstInput + secondInput + thirdInput, 2));
        } else {
            setRes(
                Math.pow(firstInput, 2) +
                    Math.pow(secondInput, 2) +
                    Math.pow(thirdInput, 2)
            );
        }
    };
    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: "#C2EABD",
            }}
        >
            <Text
                style={{ ...styles.text, color: "black", textAlign: "center" }}
            >
                Задано три числа. Якщо хоч одне з них додатне, то знайти квадрат
                суми. В іншому випадку – суму квадратів.
            </Text>
            <TextInput
                style={{
                    backgroundColor: "white",
                    margin: 15,
                    fontSize: 20,
                    padding: 10,
                    borderWidth: 3,
                    borderColor: "blue",
                    borderRadius: 15,
                }}
                placeholder="Input number"
                onChangeText={(text) =>
                    setFirstInput(isNaN(parseInt(text)) ? 0 : parseInt(text))
                }
            />
            <TextInput
                style={{
                    backgroundColor: "white",
                    margin: 15,
                    fontSize: 20,
                    padding: 10,
                    borderWidth: 3,
                    borderColor: "blue",
                    borderRadius: 15,
                }}
                placeholder="Input number"
                onChangeText={(text) =>
                    setSecondInput(isNaN(parseInt(text)) ? 0 : parseInt(text))
                }
            />
            <TextInput
                style={{
                    backgroundColor: "white",
                    margin: 15,
                    fontSize: 20,
                    padding: 10,
                    borderWidth: 3,
                    borderColor: "blue",
                    borderRadius: 15,
                }}
                placeholder="Input number"
                onChangeText={(text) =>
                    setThirdInput(isNaN(parseInt(text)) ? 0 : parseInt(text))
                }
            />
            <Pressable
                style={({ pressed }) => [
                    { backgroundColor: pressed ? "#F15A59" : "#D21312" },
                    styles.button,
                ]}
                onPress={calculate}
            >
                <Text style={styles.text}>Calculate</Text>
            </Pressable>
            <Text style={styles.res}>{res ? "Result =" + res : null}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        alignSelf: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 16,
        elevation: 3,
        width: 160,
    },
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
    res: {
        alignSelf: "center",
        fontSize: 20,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
        marginTop: 20,
    },
});

export default Task1;

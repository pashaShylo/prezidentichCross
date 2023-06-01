import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Pressable,
} from "react-native";
import React, { useState } from "react";
import _ from "lodash";

const Task2 = () => {
    const [firstInput, setFirstInput] = useState<any>();
    const [secondInput, setSecondInput] = useState<any>();
    const [res, setRes] = useState(null);

    const calculate = () => {
        const arr = _.range(firstInput, secondInput + 1);
        setRes(
            arr.reduce((sum: number, elem: any) => {
                if (elem % 29 === 0) {
                    return sum + 1;
                }
                if (elem % 2 === 0) {
                    return sum + 1;
                }
                if (elem % 5 === 2) {
                    return sum + 1;
                }
                return sum;
            }, 0)
        );
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
                На заданому проміжку чисел [a,b] знайдіть кількість чисел, які
                кратні 29, парні і при діленні на 5 дають в остачі 2.
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
                onChangeText={(text) => setFirstInput(parseInt(text))}
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
                onChangeText={(text) => setSecondInput(parseInt(text))}
            />
            <Pressable
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? "#F15A59" : "#D21312",
                    },
                    styles.button,
                ]}
                onPress={calculate}
            >
                <Text style={styles.text}>Click</Text>
            </Pressable>
            <Text style={styles.res}>{res}</Text>
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
        width: 130,
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

export default Task2;

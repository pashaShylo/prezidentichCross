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

const Task3 = () => {
    const [firstInput, setFirstInput] = useState<any>();
    const [res, setRes] = useState<any>([]);

    const calculate = () => {
        const arr = [];
        for (let i = 0; i < firstInput; i++) {
            let arr2 = [];
            for (let j = 0; j < firstInput; j++) {
                arr2.push((Math.random() * (10 - -10) + -10).toFixed());
            }
            arr.push(arr2);
            arr2 = [];
        }
        setRes(arr);
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
                Згенерувати матрицю розміром NxN. Знайти добуток усіх парних
                чисел. Парні числа позначити голубим.
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
            {res.length === 0 ? null : (
                <Text
                    style={{
                        ...styles.text,
                        alignSelf: "center",
                        color: "black",
                    }}
                >
                    Добуток парних чисел -{" "}
                    {res.reduce((summ: number, elem1: any) => {
                        return (
                            summ *
                            elem1.reduce((summ2: number, elem: any) => {
                                if (elem % 2 === 0) {
                                    return summ2 * elem;
                                }
                                return summ2;
                            }, 1)
                        );
                    }, 1)}
                </Text>
            )}
            <Text style={styles.res}>
                {res.map((elem: any) => {
                    return (
                        <View>
                            {elem.map((elem1: any) => {
                                if (elem1 % 2 === 0) {
                                    return (
                                        <View
                                            style={{
                                                backgroundColor: "lightblue",
                                                width: 50,
                                                height: 50,
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Text style={styles.elem}>
                                                {elem1}
                                            </Text>
                                        </View>
                                    );
                                } else {
                                    return (
                                        <View
                                            style={{
                                                backgroundColor: "white",
                                                width: 50,
                                                height: 50,
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Text style={styles.elem}>
                                                {elem1}
                                            </Text>
                                        </View>
                                    );
                                }
                            })}
                        </View>
                    );
                })}
            </Text>
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
    elem: {
        letterSpacing: 1,
        fontSize: 20,
    },
});

export default Task3;

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Pressable,
    Dimensions,
} from "react-native";
import React, { useState } from "react";
import _ from "lodash";
import { LineChart } from "react-native-chart-kit";

const Lab2 = () => {
    const [Xn, setXn] = useState("-1.7");
    const [Xk, setXk] = useState("45.3");
    const [Xh, setXh] = useState("0.5");
    const [a, setA] = useState("5");

    const [arrX, setArrX] = useState([]);
    const [arrY, setArrY] = useState([]);

    function calculate() {
        if (
            isNaN(parseFloat(Xn)) ||
            isNaN(parseFloat(Xk)) ||
            isNaN(parseFloat(Xh)) ||
            isNaN(parseFloat(a))
        ) {
            alert("Input Error");
            return;
        }

        setArrX(
            _.range(parseFloat(Xn), parseFloat(Xk), parseFloat(Xh)).map(
                (elem: any) => {
                    return Number(elem.toFixed(2));
                }
            )
        );

        setArrY(
            _.range(parseFloat(Xn), parseFloat(Xk), parseFloat(Xh)).map(
                (elem: any) => {
                    if (elem <= 0) {
                        return Number(
                            (
                                (Math.pow(Math.tan(elem + 3), 2) /
                                    Math.pow(Math.abs(elem), 1.2)) *
                                Math.sin(3 * elem)
                            ).toFixed(2)
                        );
                    } else if (0 < elem && elem <= a) {
                        return Number(
                            (
                                Math.pow(elem, 3) -
                                4 * elem +
                                2 / Math.pow(elem, 2) +
                                Math.sin(7 * elem) -
                                1
                            ).toFixed(2)
                        );
                    } else if (elem > a) {
                        return Number(
                            (
                                Math.tan(0.1 * Math.PI * Math.pow(elem, 2)) +
                                elem / Math.pow(Math.cos(2 * elem + 3), 2)
                            ).toFixed(2)
                        );
                    }
                }
            )
        );
    }

    return (
        <>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#C2EABD",
                }}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        backgroundColor: "#C2EABD",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "700",
                        }}
                    >
                        Лабораторна робота №2
                    </Text>
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "700",
                            paddingBottom: 5,
                            textAlign: "center",
                        }}
                    >
                        Виконав студент КН-32 Демидов Вадим Олексійович
                    </Text>
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "700",
                            paddingBottom: 5,
                            textAlign: "center",
                        }}
                    >
                        Вaріант №3
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "700",
                            paddingBottom: 5,
                            textAlign: "center",
                        }}
                    >
                        Створити додаток для табулювання і виведення на екран
                        значення функції, також побудувати графік функції:
                    </Text>
                </View>
                <Text
                    style={{ fontSize: 20, alignSelf: "center", marginTop: 10 }}
                >
                    Xn
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
                    value={Xn}
                    onChangeText={(text) => setXn(text)}
                />
                <Text
                    style={{ fontSize: 20, alignSelf: "center", marginTop: 10 }}
                >
                    Xk
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
                    value={Xk}
                    onChangeText={(text) => setXk(text)}
                />
                <Text
                    style={{ fontSize: 20, alignSelf: "center", marginTop: 10 }}
                >
                    Xh
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
                    value={Xh}
                    onChangeText={(text) => setXh(text)}
                />
                <Text
                    style={{ fontSize: 20, alignSelf: "center", marginTop: 10 }}
                >
                    a
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
                    value={a}
                    onChangeText={(text) => setA(text)}
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

                {arrX.length === 0 || arrY.length === 0 ? null : (
                    <LineChart
                        data={{
                            labels: arrX,
                            datasets: [
                                {
                                    data: arrY,
                                },
                            ],
                        }}
                        width={Dimensions.get("window").width - 16}
                        height={220}
                        chartConfig={{
                            backgroundColor: "#fff",
                            backgroundGradientFrom: "#fff",
                            backgroundGradientTo: "#fff",
                            color: (opacity = 1) => `black`,
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            alignSelf: "center",
                        }}
                    />
                )}
                {arrY.map((elem, index) => {
                    return (
                        <View
                            key={index}
                            style={{
                                paddingBottom: 30,
                                marginLeft: 20,
                            }}
                        >
                            <Text
                                style={{
                                    ...styles.text,
                                    textAlign: "center",
                                    color: "black",
                                }}
                            >
                                x = {arrX[index]}; y = {elem}
                            </Text>
                        </View>
                    );
                })}
            </ScrollView>
        </>
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

export default Lab2;

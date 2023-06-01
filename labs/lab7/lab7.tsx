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
import { LineChart } from "react-native-chart-kit";
import recursion from "./recursion";
import tabY from "./tabY";
import tabX from "./tabX";
import series from "./series";

const Lab7 = () => {
    const [Xn, setXn] = useState("-2");
    const [Xk, setXk] = useState("1");
    const [Xh, setXh] = useState("0.2");

    const [arrX, setArrX] = useState([]);
    const [arrY, setArrY] = useState([]);
    const [arrYSeries, setArrYSeries] = useState([]);
    const [arrYRecursion, setArrYRecursion] = useState([]);

    function calculate() {
        if (
            isNaN(parseFloat(Xn)) ||
            isNaN(parseFloat(Xk)) ||
            isNaN(parseFloat(Xh))
        ) {
            alert("Input Error");
            return;
        }

        if (parseFloat(Xn) < -9.42 || parseFloat(Xk) > 9.42) {
            alert("The range of the argument -3π<x<3π");
            return;
        }
        setArrX(tabX(parseFloat(Xn), parseFloat(Xk), parseFloat(Xh)));
        setArrY(tabY(arrX));
        setArrYSeries(series(arrX));
        setArrYRecursion(recursion(arrX));
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
                        Лабораторна робота №7
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
                            fontSize: 15,
                            fontWeight: "700",
                            paddingBottom: 5,
                            textAlign: "center",
                        }}
                    >
                        1. Розробити сервіс для табулювання функції відповідно
                        до варіанту 2. Розробити сервіс для розрахунку значень
                        функції за допомогою ряду відповідно до варіанту 3.
                        Розробити сервіс для розрахунку значень функції за
                        допомогою рекурсії відповідно до варіанту 4. Розробити
                        сервіс для логування обчислених значень у консоль та
                        використати його у попередніх трьох сервісах 5. У
                        основному застосунку підключити сервіси, вивести
                        результати усіх розрахунків та побудувати графіки для
                        усіх обрахунків.
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
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#F15A59" : "#D21312",
                        },
                        styles.button,
                        { marginBottom: 30, width: 210 },
                    ]}
                    onPress={calculate}
                >
                    <Text style={{ ...styles.text, color: "white" }}>
                        Calculate
                    </Text>
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
                {arrX.length === 0 || arrYSeries.length === 0 ? null : (
                    <LineChart
                        data={{
                            labels: arrX,
                            datasets: [
                                {
                                    data: arrYSeries,
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
                {arrX.length === 0 || arrYRecursion.length === 0 ? null : (
                    <LineChart
                        data={{
                            labels: arrX,
                            datasets: [
                                {
                                    data: arrYRecursion,
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
                {arrY.length !== 0 ? (
                    <Text
                        style={{
                            ...styles.text,
                            alignSelf: "center",
                            marginBottom: 30,
                        }}
                    >
                        Табулювання
                    </Text>
                ) : null}
                {arrY.map((elem, index) => {
                    return (
                        <View
                            style={{
                                paddingBottom: 30,
                                marginLeft: 20,
                            }}
                            key={index}
                        >
                            <Text style={styles.text}>
                                x = {arrX[index]}; y = {elem}
                            </Text>
                        </View>
                    );
                })}
                {arrYSeries.length !== 0 ? (
                    <Text
                        style={{
                            ...styles.text,
                            alignSelf: "center",
                            marginBottom: 30,
                        }}
                    >
                        Ряд
                    </Text>
                ) : null}
                {arrYSeries.map((elem, index) => {
                    return (
                        <View
                            style={{
                                paddingBottom: 30,
                                marginLeft: 20,
                            }}
                            key={index}
                        >
                            <Text style={styles.text}>
                                x = {arrX[index]}; y = {elem}
                            </Text>
                        </View>
                    );
                })}
                {arrYRecursion.length !== 0 ? (
                    <Text
                        style={{
                            ...styles.text,
                            alignSelf: "center",
                            marginBottom: 30,
                        }}
                    >
                        Рекурсія
                    </Text>
                ) : null}
                {arrYRecursion.map((elem, index) => {
                    return (
                        <View
                            style={{
                                paddingBottom: 30,
                                marginLeft: 20,
                            }}
                            key={index}
                        >
                            <Text style={styles.text}>
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
        width: 180,
    },
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
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

export default Lab7;

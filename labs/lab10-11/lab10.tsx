import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Pressable,
    Dimensions,
    ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import useStore from "./store";

const firebaseConfig = {
    apiKey: "AIzaSyDxUDxE8uymttbABO9_fQW42IKfB8A7rTk",
    authDomain: "lab11-2db54.firebaseapp.com",
    databaseURL:
        "https://lab11-2db54-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lab11-2db54",
    storageBucket: "lab11-2db54.appspot.com",
    messagingSenderId: "673448840323",
    appId: "1:673448840323:web:c06680615495bd91f55fb6",
    measurementId: "G-EBNMMPGCX5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const Lab10 = () => {
    const [newCountry, setNewCountry] = useState("");
    const [city, setCity] = useState("");

    const countries = useStore((state: any) => state.countries);
    const setCountries = useStore((state: any) => state.setCountries);

    const cities = useStore((state: any) => state.cities);
    const setCities = useStore((state: any) => state.setCities);

    const activeCountry = useStore((state: any) => state.activeCountry);
    const setActiveCountry = useStore((state: any) => state.setActiveCountry);

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
                        Лабораторна робота №10-11
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
                        Варіант №3
                    </Text>
                </View>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#F15A59" : "#D21312",
                        },
                        styles.button,
                    ]}
                    onPress={() => {
                        setActiveCountry(
                            countries[
                                countries.reduce(
                                    (summ: any, elem: any, index: any) => {
                                        if (elem.id === activeCountry.id) {
                                            return summ + index;
                                        }
                                        return summ;
                                    },
                                    0
                                ) + 1
                            ]
                                ? countries[
                                      countries.reduce(
                                          (
                                              summ: any,
                                              elem: any,
                                              index: any
                                          ) => {
                                              if (
                                                  elem.id === activeCountry.id
                                              ) {
                                                  return summ + index;
                                              }
                                              return summ;
                                          },
                                          0
                                      ) + 1
                                  ]
                                : countries[0]
                        );
                    }}
                >
                    <Text style={{ ...styles.text, color: "white" }}>
                        Наступна країна
                    </Text>
                </Pressable>

                <Text style={styles.text}>
                    Поточна країна {activeCountry.name}
                </Text>

                {cities
                    .filter((elem: any) => {
                        return elem.country_id === activeCountry.id;
                    })
                    .map((elem: any) => {
                        return (
                            <View key={elem.id}>
                                <Text style={styles.text}>
                                    Назва міста: {elem.name}
                                </Text>
                            </View>
                        );
                    })}
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
                    onChangeText={(text) => setNewCountry(text)}
                ></TextInput>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#F15A59" : "#D21312",
                        },
                        styles.button,
                    ]}
                    onPress={() => {
                        let flag = false;
                        countries.forEach((elem: any) => {
                            if (elem.name === newCountry) {
                                flag = true;
                                alert("Така країна вже існує");
                                return;
                            }
                        });
                        if (flag) return;
                        setCountries([
                            ...countries,
                            { id: countries.length + 1, name: newCountry },
                        ]);
                        push(ref(db, "/Country"), {
                            id: countries.length + 1,
                            name: newCountry,
                        });
                    }}
                >
                    <Text style={{ ...styles.text, color: "white" }}>
                        Додати країну
                    </Text>
                </Pressable>
                <Text style={{ ...styles.text, marginTop: 50, color: "black" }}>
                    Додати місто
                </Text>
                <Text style={{ ...styles.text, marginTop: 20 }}>
                    Введіть назву міста
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
                    onChangeText={(text) => setCity(text)}
                ></TextInput>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#F15A59" : "#D21312",
                        },
                        styles.button,
                    ]}
                    onPress={() => {
                        let flag = false;
                        cities.forEach((elem: any) => {
                            if (elem.name === city) {
                                flag = true;
                                alert("Таке місто вже існує");
                                return;
                            }
                        });
                        if (flag) return;
                        const newObj = {
                            id: Date.now(),
                            name: city,
                            country_id: activeCountry.id,
                        };
                        setCities([...cities, , newObj]);
                        push(ref(db, "/City"), { ...newObj });
                    }}
                >
                    <Text style={{ ...styles.text, color: "white" }}>
                        Додати місто
                    </Text>
                </Pressable>
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
        width: 240,
    },
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
        alignSelf: "center",
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

export default Lab10;

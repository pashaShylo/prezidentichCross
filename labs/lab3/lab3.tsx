import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Pressable,
    ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import _ from "lodash";

const Lab3 = () => {
    const [author, setAuthor] = useState("");
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getData() {
        setLoading(true);
        await fetch("https://api.jsonbin.io/v3/qs/64788a659d312622a368d932")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data.record);
                setLoading(false);
            });
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
                        Лабораторна робота №3
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
                            fontSize: 16,
                            fontWeight: "700",
                            paddingBottom: 5,
                            textAlign: "center",
                        }}
                    >
                        Необхідно додати у розроблений в попередній лабораторній
                        роботі застосунок сторінку для обробки JSON файлу
                        отриманого з серверу.
                    </Text>
                </View>
                <Pressable
                    style={({ pressed }) => [
                        { backgroundColor: pressed ? "#F15A59" : "#D21312" },
                        styles.button,
                    ]}
                    onPress={getData}
                >
                    <Text
                        style={{ ...styles.text, color: "white", fontSize: 20 }}
                    >
                        Завантажити
                    </Text>
                </Pressable>
                {loading ? (
                    <ActivityIndicator
                        size="large"
                        color="#0000ff"
                        style={{ marginTop: 100 }}
                    />
                ) : (
                    <>
                        <View style={{ marginTop: 30 }}>
                            {data.length === 0 ? null : (
                                <>
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
                                        placeholder=""
                                        onChangeText={(text) => setAuthor(text)}
                                    />
                                    <Pressable
                                        style={({ pressed }) => [
                                            {
                                                backgroundColor: pressed
                                                    ? "#F15A59"
                                                    : "#D21312",
                                            },
                                            styles.button,
                                            { marginBottom: 30, width: 230 },
                                        ]}
                                        onPress={() => setSearch(author)}
                                    >
                                        <Text
                                            style={{
                                                ...styles.text,
                                                color: "white",
                                                fontSize: 20,
                                            }}
                                        >
                                            Знайти автора
                                        </Text>
                                    </Pressable>
                                </>
                            )}
                            {data.map((elem: any) => {
                                if (elem.author === search) {
                                    return (
                                        <View
                                            key={elem.id}
                                            style={{
                                                borderWidth: 1,
                                                backgroundColor: "lightblue",
                                            }}
                                        >
                                            <Text style={styles.text}>
                                                Автор: {elem.author}
                                            </Text>
                                            <Text style={styles.text}>
                                                Назва: {elem.name}
                                            </Text>
                                            <Text style={styles.text}>
                                                Назва газети або журналу:{" "}
                                                {elem.nameOfNewspaper}
                                            </Text>
                                            <Text style={styles.text}>
                                                Номер газети або журналу:{" "}
                                                {elem.numberOfNewspaper}
                                            </Text>
                                            <Text style={styles.text}>
                                                Номер сторінки: {elem.numOfPage}
                                            </Text>
                                        </View>
                                    );
                                }
                                return (
                                    <View
                                        key={elem.id}
                                        style={{
                                            borderWidth: 1,
                                        }}
                                    >
                                        <Text style={styles.text}>
                                            Автор: {elem.author}
                                        </Text>
                                        <Text style={styles.text}>
                                            Назва: {elem.name}
                                        </Text>
                                        <Text style={styles.text}>
                                            Назва газети або журналу:{" "}
                                            {elem.nameOfNewspaper}
                                        </Text>
                                        <Text style={styles.text}>
                                            Номер газети або журналу:{" "}
                                            {elem.numberOfNewspaper}
                                        </Text>
                                        <Text style={styles.text}>
                                            Номер сторінки: {elem.numOfPage}
                                        </Text>
                                    </View>
                                );
                            })}
                        </View>
                    </>
                )}
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
        width: 200,
    },
    text: {
        fontSize: 16,
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

export default Lab3;

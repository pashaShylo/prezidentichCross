import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";

import { useState } from "react";
import { Village, City } from "../../classes/lab4-5";
export default function Lab4() {
    const [arr, setArr] = useState<(Village | City)[]>([]);
    const [minPopulationDensity, setMinPopulationDensity] = useState<
        number | undefined
    >(undefined);

    function calculate(): void {
        const res = [];
        for (let i = 0; i < 5; i++) {
            if (i % 2 === 0) {
                res.push(
                    new Village(`Village${i + 1}`, i + 6, 11 + i, 100 * (i + 1))
                );
            } else {
                res.push(
                    new City(`City${i + 1}`, 200 * (i + 1), 100 * (i + 2))
                );
            }
        }
        setArr(res);
    }
    function findMinPopulationDensity(): void {
        const areas = arr.map((elem) => {
            return elem.calculatePopulationDensity();
        });
        setMinPopulationDensity(areas.sort((a, b) => a - b)[0] || undefined);
    }

    function funcMap(elem: Village | City): JSX.Element {
        if (elem instanceof Village) {
            return (
                <View key={elem.name} style={{ marginTop: 20 }}>
                    <Text style={styles.text}>Назва = {elem.name}</Text>
                    <Text style={styles.text}>
                        Кількість будинків = {elem.numberOfHouses}
                    </Text>
                    <Text style={styles.text}>
                        Кількість мешканців в домі = {elem.residentsPerHouse}
                    </Text>
                    <Text style={styles.text}>
                        Площина села = {elem.villageArea} км²
                    </Text>
                </View>
            );
        }
        return (
            <View key={elem.name} style={{ marginTop: 20 }}>
                <Text style={styles.text}>Name = {elem.name}</Text>
                <Text style={styles.text}>
                    Кількість населення = {elem.population}
                </Text>
                <Text style={styles.text}>
                    Площина міста = {elem.cityArea} км²
                </Text>
            </View>
        );
    }

    return (
        <ScrollView style={{ backgroundColor: "#C2EABD" }}>
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
                    Лабораторна робота №4
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
                    Скласти програму з абстрактним батьківським класом і двома
                    об'єктами – нащадками.
                    Реалізувати циклічне виведення параметрів об'єктів, використовуючи 
                    поліморфний контейнер -
                     масив об'єктів базового класу (кількість об'єктів {">"}= 5)
                    Знайти значення найменшої щільності населення
                </Text>
            </View>

            <Pressable
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? "#F15A59" : "#D21312",
                    },
                    styles.button,
                    { marginBottom: 30, width: 180 },
                ]}
                onPress={calculate}
            >
                <Text style={{ ...styles.text, color: "white" }}>Display</Text>
            </Pressable>
            <Pressable
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? "#F15A59" : "#D21312",
                    },
                    styles.button,
                    { marginBottom: 30, width: 130 },
                ]}
                onPress={findMinPopulationDensity}
            >
                <Text style={{ ...styles.text, color: "white" }}>Find</Text>
            </Pressable>
            {arr.map(funcMap)}
            {minPopulationDensity ? (
                <Text
                    style={[
                        styles.text,
                        {
                            marginTop: 40,
                            marginBottom: 50,
                            textAlign: "center",
                        },
                    ]}
                >
                    Найменша щільность населення = {minPopulationDensity} жителя
                    на км²
                </Text>
            ) : null}
        </ScrollView>
    );
}

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

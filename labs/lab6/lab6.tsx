import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Worker, Staff, Engineer, Administration } from "../../classes/lab6";

const Lab6 = () => {
    const worker = new Worker("Vadim");
    const staff = new Staff("Oleg");
    const engineer = new Engineer("Maxim");
    const admin = new Administration("Nikita");

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
                    Лабораторна робота №6
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
                    1. Розробити ієрархію класів відповідно до варіанту
                    завдання(у запропоновану у варіанті ієрархію класів можна
                    додавати додаткові класи або інтерфейси). Деякі з класів
                    можуть бути абстрактними. 2. Реалізувати для ієрархії
                    механізм інтерфейсів, при цьому один з класів повинен
                    реалізовувати як мінімум два інтерфейси. 3. Кожен клас з
                    ієрархії класів повинен мати не менше двох методів. 4.
                    Розроблена ієрархія повинна відповідати основним принципам
                    SOLID та патерну High Cohesion + Low Coupling Для перевірки
                    роботи розроблених класів та їх методів необхідно
                    використовувати Unit тести.
                </Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 50 }}>
                <View style={{ marginBottom: 50, alignItems: "center" }}>
                    <Text style={styles.text}>Worker</Text>
                    <Text style={styles.text}>{worker.introduce()}</Text>
                    <Text style={styles.text}>{worker.doWork()}</Text>
                </View>
                <View style={{ marginBottom: 50, alignItems: "center" }}>
                    <Text style={styles.text}>Staff</Text>
                    <Text style={styles.text}>{staff.introduce()}</Text>
                    <Text style={styles.text}>{staff.doWork()}</Text>
                    <Text style={styles.text}>{staff.fire()}</Text>
                    <Text style={styles.text}>{staff.hire()}</Text>
                </View>
                <View style={{ marginBottom: 50, alignItems: "center" }}>
                    <Text style={styles.text}>Engineer</Text>
                    <Text style={styles.text}>{engineer.introduce()}</Text>
                    <Text style={styles.text}>{engineer.doWork()}</Text>
                </View>
                <View style={{ marginBottom: 50, alignItems: "center" }}>
                    <Text style={styles.text}>Administrator</Text>
                    <Text style={{ ...styles.text, textAlign: "center" }}>
                        {admin.introduce()}
                    </Text>
                    <Text style={styles.text}>{admin.hire()}</Text>
                    <Text style={styles.text}>{admin.fire()}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
        paddingBottom: 15,
    },
});

export default Lab6;

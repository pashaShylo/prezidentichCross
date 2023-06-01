import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Pressable,
} from "react-native";
import React, { useState } from "react";
import {
    nameValidator,
    initialsValidator,
    amountValidator,
    addressValidator,
    listOfTeachersValidator,
    listOfTeachers,
    Kafedra,
} from "./validation";
import Edit from "./edit";

const Lab8 = () => {
    const [kafedras, setKafedras] = useState<Kafedra[]>([]);
    const [editKafedras, setEditKafedras] = useState<Kafedra[]>([]);

    const [name, setName] = useState("");
    const [initials, setInitials] = useState("");
    const [amount, setAmount] = useState<number>(0);
    const [address, setAddress] = useState("");

    const [list, setList] = useState<listOfTeachers[]>([]);

    const [editable, setEditable] = useState(false);

    const addItem = () => {
        setList([...list, { id: Date.now(), value: "" }]);
    };

    const deleteItem = (id: number) => {
        setList(
            list.filter((elem: any) => {
                return elem.id !== id;
            })
        );
    };
    const inputChange = (id: number, text: string, key: string) => {
        setList(
            list.map((elem: any) => {
                if (elem.id === id) {
                    return { ...elem, [key]: text };
                }
                return elem;
            })
        );
    };

    const editChange = (
        elIndex: number,
        key: string,
        text: string,
        id: any = null
    ) => {
        setEditKafedras(
            editKafedras.map((elem: any, index) => {
                if (index === elIndex) {
                    if (id) {
                        const newArr = elem.listOfTeachers.map((elem1: any) => {
                            if (elem1.id === id) {
                                return { ...elem1, ["value"]: text };
                            }
                            return elem1;
                        });
                        return {
                            ...elem,
                            [key]: newArr,
                        };
                    }
                    return { ...elem, [key]: text };
                }
                return elem;
            })
        );
    };

    const addKafedra = () => {
        const newKafedra = {
            name: name,
            amount: amount,
            initials: initials,
            address: address,
            listOfTeachers: list,
        };
        if (!nameValidator(newKafedra).isValid) {
            alert(nameValidator(newKafedra).message);
            return;
        }
        if (!initialsValidator(newKafedra).isValid) {
            alert(initialsValidator(newKafedra).message);
            return;
        }
        if (!amountValidator(newKafedra).isValid) {
            alert(amountValidator(newKafedra).message);
            return;
        }
        if (!addressValidator(newKafedra).isValid) {
            alert(addressValidator(newKafedra).message);
            return;
        }
        if (!listOfTeachersValidator(newKafedra).isValid) {
            alert(listOfTeachersValidator(newKafedra).message);
            return;
        }
        setKafedras([...kafedras, newKafedra]);
        setEditKafedras([...kafedras, newKafedra]);
    };

    return (
        <>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#C2EABD",
                }}
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
                        Лабораторна робота №8-9
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
                    <Text style={{ textAlign: "center" }}>
                        1. Розробити компонент який буде вміщувати динамічну
                        реактивну форму відповідно до варіанту. 2. Передбачити у
                        формі можливість додавання та видалення певних полів під
                        час виконання. 3. Провести валідування ведених у форму
                        значень, як за допомогою списку статичних методів класу
                        Validators. 4. Створити сервіси для більш точного
                        валідування ведених даних, кількість сервісів не менше
                        двох. 5. Створити модульні тести для перевірки сервісів
                        та функцій для валідування
                    </Text>
                </View>
                <Text
                    style={{ fontSize: 20, alignSelf: "center", marginTop: 10 }}
                >
                    Назва кафедри
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
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Text
                    style={{ fontSize: 20, alignSelf: "center", marginTop: 10 }}
                >
                    ПІБ завідувача кафедри.
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
                    value={initials}
                    onChangeText={(text) => setInitials(text)}
                />
                <Text
                    style={{ fontSize: 20, alignSelf: "center", marginTop: 10 }}
                >
                    Кількість викладачів
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
                    value={amount.toString()}
                    onChangeText={(text: string) =>
                        setAmount(parseInt(text) ? parseInt(text) : 0)
                    }
                />
                <Text
                    style={{ fontSize: 20, alignSelf: "center", marginTop: 10 }}
                >
                    Адреса
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
                    value={address}
                    onChangeText={(text) => setAddress(text)}
                />
                <View
                    style={{
                        flexDirection: "column",
                        alignSelf: "center",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 23,
                            alignSelf: "center",
                            marginTop: 10,
                        }}
                    >
                        Список викладачів кафедри{" "}
                    </Text>
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? "#F15A59"
                                    : "#D21312",
                            },
                            styles.button,
                            { width: 270, marginBottom: 30 },
                        ]}
                        onPress={addItem}
                    >
                        <Text style={styles.text}>Додати викладача</Text>
                    </Pressable>
                </View>
                <View>
                    {list.map((elem: any) => {
                        return (
                            <View
                                key={elem.id}
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <TextInput
                                    style={{
                                        backgroundColor: "white",
                                        margin: 15,
                                        fontSize: 20,
                                        padding: 10,
                                        borderWidth: 3,
                                        borderColor: "blue",
                                        borderRadius: 15,
                                        flex: 1,
                                    }}
                                    value={elem.value}
                                    onChangeText={(text: string) =>
                                        inputChange(elem.id, text, "value")
                                    }
                                />
                                <Pressable
                                    style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed
                                                ? "#F87373"
                                                : "#F80000",
                                        },
                                        {
                                            width: 30,
                                            height: 30,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: 12,
                                            marginRight: 15,
                                        },
                                    ]}
                                    onPress={() => deleteItem(elem.id)}
                                >
                                    <Text style={styles.text}>-</Text>
                                </Pressable>
                            </View>
                        );
                    })}
                </View>
                <Pressable
                    style={({ pressed }) => [
                        { backgroundColor: pressed ? "#F15A59" : "#D21312" },
                        styles.button,
                        { width: 240 },
                    ]}
                    onPress={addKafedra}
                >
                    <Text style={styles.text}>Додати кафедру</Text>
                </Pressable>
                <Edit
                    editable={editable}
                    streets={kafedras}
                    editChange={editChange}
                />
                {kafedras.length !== 0 ? (
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? "#F15A59"
                                    : "#D21312",
                            },
                            styles.button,
                            { marginBottom: 50 },
                        ]}
                        onPress={() => {
                            if (editable) {
                                let flag = true;
                                editKafedras.forEach((newKafedra: any) => {
                                    if (!nameValidator(newKafedra).isValid) {
                                        alert(
                                            nameValidator(newKafedra).message
                                        );
                                        flag = false;
                                        return;
                                    }
                                    if (
                                        !initialsValidator(newKafedra).isValid
                                    ) {
                                        alert(
                                            initialsValidator(newKafedra)
                                                .message
                                        );
                                        flag = false;
                                        return;
                                    }
                                    if (!amountValidator(newKafedra).isValid) {
                                        alert(
                                            amountValidator(newKafedra).message
                                        );
                                        flag = false;
                                        return;
                                    }
                                    if (!addressValidator(newKafedra).isValid) {
                                        alert(
                                            addressValidator(newKafedra).message
                                        );
                                        flag = false;
                                        return;
                                    }
                                    if (
                                        !listOfTeachersValidator(newKafedra)
                                            .isValid
                                    ) {
                                        alert(
                                            listOfTeachersValidator(newKafedra)
                                                .message
                                        );
                                        flag = false;
                                        return;
                                    }
                                });
                                if (!flag) return;
                                setKafedras([...editKafedras]);
                            }
                            setEditable(!editable);
                        }}
                    >
                        {editable ? (
                            <Text style={styles.text}>Submit</Text>
                        ) : (
                            <Text style={styles.text}>Edit</Text>
                        )}
                    </Pressable>
                ) : null}
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
        color: "white",
        alignSelf: "center",
    },
    textDesc: {
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
    input: {
        backgroundColor: "white",
        margin: 10,
        fontSize: 20,
        padding: 5,
        flex: 1,
    },
});

export default Lab8;

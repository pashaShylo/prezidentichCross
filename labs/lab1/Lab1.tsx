import BottomTabNavigator from "../../navigation/bottomTabNavigator";
import { Text, View } from "react-native";

export default function Lab1() {
    return (
        <>
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
                    Лабораторна робота №1
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
            <BottomTabNavigator />
        </>
    );
}

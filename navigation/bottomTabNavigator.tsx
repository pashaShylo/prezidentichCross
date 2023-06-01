import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Task1 from "../labs/lab1/Task1";
import Task2 from "../labs/lab1/Task2";
import Task3 from "../labs/lab1/Task3";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }: any) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: "#444",
                tabBarStyle: styles.tabBarStyle,
                tabBarActiveTintColor: "#7d5fff",
                tabBarIcon: ({ color }: any) => {
                    let iconName, title;
                    if (route.name === "Task1") {
                        iconName = "circle";
                        title = "Task1";
                    } else if (route.name === "Task2") {
                        iconName = "triangle";
                        title = "Task2";
                    } else if (route.name === "Task3") {
                        iconName = "square";
                        title = "Task3";
                    }
                    return (
                        <View style={{ alignItems: "center" }}>
                            <Icon name={iconName} size={22} color={color} />
                            <Text style={{ paddingTop: 5, color: color }}>
                                {title}
                            </Text>
                        </View>
                    );
                },
            })}
        >
            <Tab.Screen name={"Task1"} component={Task1} />
            <Tab.Screen name={"Task2"} component={Task2} />
            <Tab.Screen name={"Task3"} component={Task3} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: "#FFFFFF",
        height: 92,
    },
});

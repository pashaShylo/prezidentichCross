import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Kafedra } from "./validation";
const Edit = (props: any) => {
    return (
        <View>
            {props.editable
                ? props.streets.map((elem: Kafedra, index: any) => {
                      return (
                          <View
                              key={index}
                              style={{ marginBottom: 10, marginTop: 10 }}
                          >
                              <Text style={styles.textDesc}>
                                  {index + 1} Кафедра
                              </Text>
                              <Text style={styles.textDesc}>
                                  Назва кафедри:
                              </Text>
                              <TextInput
                                  defaultValue={elem.name}
                                  onChangeText={(text) =>
                                      props.editChange(index, "name", text)
                                  }
                                  style={styles.text}
                              ></TextInput>
                              <Text style={styles.textDesc}>
                                  Кількість викладачів:
                              </Text>
                              <TextInput
                                  defaultValue={elem.amount.toString()}
                                  onChangeText={(text) =>
                                      props.editChange(index, "amount", text)
                                  }
                                  style={styles.text}
                              ></TextInput>
                              <Text style={styles.textDesc}>
                                  ПІБ завідувача кафедри:
                              </Text>
                              <TextInput
                                  defaultValue={elem.initials}
                                  onChangeText={(text) =>
                                      props.editChange(index, "initials", text)
                                  }
                                  style={styles.text}
                              ></TextInput>
                              <Text style={styles.textDesc}>Адреса:</Text>
                              <TextInput
                                  defaultValue={elem.address}
                                  onChangeText={(text) =>
                                      props.editChange(index, "address", text)
                                  }
                                  style={styles.text}
                              ></TextInput>
                              {elem.listOfTeachers.length === 0 ? null : (
                                  <View>
                                      <Text style={styles.textDesc}>
                                          Список викладачів кафедри:
                                      </Text>
                                      {elem.listOfTeachers.map(
                                          (elem1: any, index1) => {
                                              return (
                                                  <TextInput
                                                      key={index1}
                                                      style={styles.text}
                                                      defaultValue={elem1.value}
                                                      onChangeText={(text) =>
                                                          props.editChange(
                                                              index,
                                                              "listOfTeachers",
                                                              text,
                                                              elem1.id
                                                          )
                                                      }
                                                  ></TextInput>
                                              );
                                          }
                                      )}
                                  </View>
                              )}
                          </View>
                      );
                  })
                : props.streets.map((elem: Kafedra, index: any) => {
                      return (
                          <View
                              key={index}
                              style={{ marginBottom: 10, marginTop: 10 }}
                          >
                              <Text style={styles.textDesc}>
                                  {index + 1} Кафедра
                              </Text>
                              <Text style={styles.text}>
                                  Назва кафедри - {elem.name}
                              </Text>
                              <Text style={styles.text}>
                                  Кількість викладачів - {elem.amount}
                              </Text>
                              <Text style={styles.text}>
                                  ПІБ завідувача кафедри - {elem.initials}
                              </Text>
                              <Text style={styles.text}>
                                  Адреса - {elem.address}
                              </Text>
                              {elem.listOfTeachers.length === 0 ? null : (
                                  <View>
                                      <Text style={styles.textDesc}>
                                          Список викладачів кафедри:
                                      </Text>
                                      {elem.listOfTeachers.map(
                                          (elem: any, index) => {
                                              return (
                                                  <Text
                                                      key={index}
                                                      style={styles.text}
                                                  >
                                                      {index +
                                                          1 +
                                                          "  " +
                                                          elem.value}
                                                  </Text>
                                              );
                                          }
                                      )}
                                  </View>
                              )}
                          </View>
                      );
                  })}
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        alignSelf: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        width: 180,
    },
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
        alignSelf: "center",
        textAlign: "center",
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
        backgroundColor: "black",
        margin: 10,
        fontSize: 20,
        padding: 5,
        flex: 1,
    },
});

export default Edit;

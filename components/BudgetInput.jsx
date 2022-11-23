import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Alert } from "react-native";

const BudgetInput = ({ onBudgetAdd }) => {
    const [budgetDescripcion, setBudgetDescripcion] = useState("");
    const changeTextHandlerDescripcion = (value) => {
        setBudgetDescripcion(value);
    };
    const [budgetPrecio, setBudgetPrecio] = useState("");
    const changeTextHandlerPrecio = (value) => {
        setBudgetPrecio(value);
    };
    const addBudgetHandlerIngreso = () => {
        const sanitizedDescripcion = budgetDescripcion.trim();
        const sanitizedPrecio = budgetPrecio;
        let numeroPunto = budgetPrecio;
        if (sanitizedPrecio.includes(",")) {
            numeroPunto = parseFloat(sanitizedPrecio.replace(",", ".")).toFixed(2);
        }
        if (sanitizedDescripcion.trim() !== "" && numeroPunto !== "") {
            onBudgetAdd(sanitizedDescripcion, numeroPunto);
        } else {
            Alert.alert("ERROR: Falata rellenar algún campo");
        }
        setBudgetDescripcion("");
        setBudgetPrecio("");
    };
    const addBudgetHandlerGasto = () => {
        const sanitizedDescripcion = budgetDescripcion.trim();
        const sanitizedPrecio = budgetPrecio;
        let numeroPunto = budgetPrecio;
        if (sanitizedPrecio.includes(",")) {
            numeroPunto = parseFloat(sanitizedPrecio.replace(",", ".")).toFixed(2);
        }
        if (sanitizedDescripcion.trim() !== "" && numeroPunto !== "") {
            onBudgetAdd(sanitizedDescripcion, -numeroPunto);
        } else {
            Alert.alert("ERROR: Falata rellenar algún campo");
        }
        setBudgetDescripcion("");
        setBudgetPrecio("");
    };
    return (
        <View style={styles.BudgetInput}>
            <View style={styles.organizarItem}>
                <TextInput
                    style={styles.porductInputs}
                    placeholderTextColor="lightgrey"
                    placeholder="Descpricpión: "
                    color="lightgrey"
                    keyboardType="default"
                    onChangeText={changeTextHandlerDescripcion}
                    value={budgetDescripcion}
                ></TextInput>
                <TextInput
                    style={styles.porductInputs}
                    placeholderTextColor="lightgrey"
                    placeholder="Importe: "
                    color="lightgrey"
                    keyboardType="numeric"
                    onChangeText={changeTextHandlerPrecio}
                    value={budgetPrecio}
                ></TextInput>
            </View>
            <View style={styles.organizarItem}>
                <Button
                    color="#8B0000"
                    title="Añadir Gasto"
                    onPress={addBudgetHandlerGasto}
                ></Button>
                <Button
                    color="#2D572C"
                    title="Añadir Ingreso"
                    onPress={addBudgetHandlerIngreso}
                ></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    BudgetInput: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "80%",
        height: 120,
        borderRadius: 5,
        padding: 10,
        borderWidth: 2,
        shadowOffset: { width: -1, height: 5 },
        shadowColor: "#171717",
        shadowOpacity: 1,
        shadowRadius: 6,
        marginTop: 60,
        backgroundColor: "#9E9E9E",
    },
    organizarItem: {
        flexDirection: "colum",
        alignItems: "center",
        justifyContent: "space-around",
        width: "80%",
        height: 80,
        borderRadius: 5,
    },
    porductInputs: {
        width: "50%",
        padding: 9,
        backgroundColor: "#3E4144",
        borderRadius: 5,
    },
});

export default BudgetInput;

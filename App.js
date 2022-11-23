import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.introducirDatos}>
                <TextInput style={styles.importeDatos}
                    placeholder='Importe: '>
                </TextInput>
                <TextInput style={styles.importeDatos}
                    placeholder='Descripción: '>
                </TextInput>
                <TextInput style={styles.importeDatos}
                    placeholder='Fecha: '>
                </TextInput>
            </View>
            <View style={styles.verMovimientos}>
                <Text>Ver movimeintos</Text>
            </View>
            <View style={styles.verTotal}>
                <Text>Ver total</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    introducirDatos: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        flexDirection: 'row',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    verMovimientos: {
        flex: 10,
        backgroundColor: 'yellow',
        width: '90%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    verTotal: {
        marginTop: 10,
        borderRadius: 10,
        flex: 2,
        backgroundColor: 'pink',
        width: '90%',
    },
    importeDatos: {
        fontSize: 20,
    },
});

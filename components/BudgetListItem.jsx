import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal, TextInput, Button, Alert } from 'react-native';

const BudgetListItem = ({ id, budgetItem, budget, onbudgetRemove, setPrecioNuevo }) => {
    const [productdescripcion, setProductdescripcion] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const changeTextHandlerdescripcion = (value) => {
        setProductdescripcion(value);
        budgetItem.descripcion = value
    }

    const [productQuantity, setProductQuantity] = useState('');
    const changeTextHandlerPrecio = (value) => {
        setProductQuantity(value);
        budgetItem.precio = value
    }

    const [productDate, setProductDate] = useState('');
    const changeTextHandlerDate = (value) => {
        setProductDate(value);
        budgetItem.fecha = value
    }

    const updateVerde = () => {
        let dia = budgetItem.fecha.substring(0, 2);
        let mes = budgetItem.fecha.substring(3, 5);
        let ano = budgetItem.fecha.substring(6, 10);
        if (!parseInt(dia) || !parseInt(mes) || !parseInt(ano) || budgetItem.fecha.length < 10) {
            Alert.alert("ERROR: Fecha introducida incorrecta")
        } else {
            if (budgetItem.precio == "" || budgetItem.descripcion == "") {
                Alert.alert("ERROR: Introduce todo los campos")
            } else {
                budgetItem.descripcion;
                budgetItem.precio;
                budgetItem.fecha;
                if (budgetItem.precio < 0) {
                    budgetItem.precio = -budgetItem.precio
                }
                setModalVisible(!modalVisible);
            }
        }
    }

    const updateRojo = () => {
        let dia = budgetItem.fecha.substring(0, 2);
        let mes = budgetItem.fecha.substring(3, 5);
        let ano = budgetItem.fecha.substring(6, 10);
        if (!parseInt(dia) || !parseInt(mes) || !parseInt(ano) || budgetItem.fecha.length < 10) {
            Alert.alert("ERROR: Fecha introducida incorrecta")
        } else {
            if (budgetItem.precio == "" || budgetItem.descripcion == "") {
                Alert.alert("ERROR: Introduce todo los campos")
            } else {
                budgetItem.descripcion;
                budgetItem.fecha;
                if (budgetItem.precio < 0) {
                    budgetItem.precio = budgetItem.precio
                } else {
                    budgetItem.precio = -budgetItem.precio;
                }
                setModalVisible(!modalVisible);
            }
        }
    }

    let precioTotal = 0

    for (let i = 0; i < budget.length; i++) {
        precioTotal += parseFloat(budget[i].precio)
        setPrecioNuevo(precioTotal.toFixed(2))
    }

    return (
        <View style={
            budgetItem.precio >= 0
                ? styles.listItemVerde
                : styles.listItemRojo
        }>
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.container}>
                    <View style={styles.budgetInput}>
                        <View style={styles.budgetItems}>
                            <TextInput style={styles.porductInputs} placeholderTextColor='lightgrey'
                                placeholder='Descpricpión: '
                                color='lightgrey'
                                keyboardType="default"
                                onChangeText={changeTextHandlerdescripcion}
                                value={budgetItem.descripcion}>
                            </TextInput>
                            <TextInput style={styles.porductInputs} placeholderTextColor='lightgrey'
                                placeholder='Importe: '
                                color='lightgrey'
                                keyboardType="decimal-pad"
                                onChangeText={changeTextHandlerPrecio}
                                value={budgetItem.precio}>
                            </TextInput>
                            <TextInput style={styles.porductInputs} placeholderTextColor='lightgrey'
                                placeholder='Fecha: '
                                color='lightgrey'
                                keyboardType="default"
                                onChangeText={changeTextHandlerDate}
                                value={budgetItem.fecha}>
                            </TextInput>
                        </View>
                        <View style={styles.budgetItems}>
                            <Button style={styles.productButton} color="#8B0000"
                                title='Cambiar a Gasto'
                                onPress={updateRojo}>
                            </Button>
                            <Button style={styles.productButton} color="#2D572C"
                                title='Cambiar a Ingreso'
                                onPress={updateVerde}>
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="none"
                visible={modalVisible2}
                transparent={true}
                onRequestClose={() => {
                    setModalVisible2(!modalVisible2);
                }}>
                <View style={styles.fondoModal}>
                    <Pressable onPress={() => setModalVisible2(false)}>
                        <View style={styles.container}>
                            <View style={styles.userViewModal}>
                                <Text style={styles.texto}> Importe</Text>
                                <Text style={styles.descripcion}>{budgetItem.precio} €</Text>
                                <Text style={styles.texto}>Descripción</Text>
                                <Text style={styles.descripcion}>{budgetItem.descripcion}</Text>
                                <Text  style={styles.texto}>Fecha</Text>
                                <Text style={styles.fecha}>{budgetItem.fecha}</Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
            </Modal>

            <Pressable onPress={() => setModalVisible2(true)}>
                <View style={styles.userView}>
                    <Text style={styles.precio}>{budgetItem.precio} €</Text>
                    <Pressable onPress={() => setModalVisible(true)}>
                        <Image style={styles.imagenes} source={require('../assets/lapiz_goyo.png')} />
                    </Pressable>
                    <Pressable onPress={() => onbudgetRemove(id)}>
                        <Image style={styles.imagenes} source={require('../assets/bausra_Goyo.png')} />
                    </Pressable>
                </View>
            </Pressable>

        </View>
    )
}

export default BudgetListItem


const styles = StyleSheet.create({
    fondoModal: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        height: '100%'
    },
    container: {
        marginTop: 60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
    },
    listItemImagenes: {
        alignItems: 'center',
    },
    userView: {
        padding: 4,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: "space-between"
    },
    listItemVerde: {
        marginBottom: 10,
        padding: 4,
        borderRadius: 5,
        flexDirection: 'colum',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#77dd77',
        shadowOffset: { width: -1, height: 5 },
        shadowColor: '#171717',
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    listItemRojo: {
        marginBottom: 10,
        padding: 4,
        borderRadius: 5,
        flexDirection: 'colum',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#e2504c',
        shadowOffset: { width: -1, height: 5 },
        shadowColor: '#171717',
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    imagenes: {
        width: 50,
        height: 50,
    },
    precio: {
        width: "50%",
        fontSize: 30,
        fontWeight: "bold",
    },
    descripcion: {
        textAlign: 'center',
        fontSize: 20
    },
    texto: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "bold",
    },
    budgetInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '80%',
        height: 150,
        borderRadius: 5,
        padding: 10,
        borderWidth: 2,
        shadowOffset: { width: -1, height: 5 },
        shadowColor: '#171717',
        shadowOpacity: 1,
        shadowRadius: 6,
        backgroundColor: '#9E9E9E'
    },
    budgetItems: {
        flexDirection: 'colum',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '80%',
        height: 120,
        borderRadius: 5,
    },
    porductInputs: {
        padding: 9,
        backgroundColor: '#3E4144',
        borderRadius: 5
    },
    userViewModal: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '80%',
        height: 170,
        borderRadius: 5,
        padding: 10,
        borderWidth: 2,
        shadowOffset: { width: -1, height: 5 },
        shadowColor: '#171717',
        shadowOpacity: 1,
        shadowRadius: 6,
        backgroundColor: '#9E9E9E'
    },
    fecha : {
        fontStyle : 'italic',
        fontSize: 20
    }
});
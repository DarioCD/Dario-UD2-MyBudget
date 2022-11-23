import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import ModalSelector from 'react-native-modal-selector';

const ProductInput = ({ onProductAdd }) => {
    const [productName, setProductName] = useState('');
    const changeTextHandlerName = (value) => {
        console.log('valor de name : ', value);
        setProductName(value);
    }
    const [productQuantity, setProductQuantity] = useState('');
    const changeTextHandlerQuantity = (value) => {
        value = value.label
        console.log('valor de quantity : ', value);
        setProductQuantity(value);
    }
    const [productType, setproductType] = useState('');
    const changeTextHandlerProduct = (value) => {
        value = value.label
        console.log('valor de type : ', value);
        setproductType(value);
    }
    const addProductHandler = () => {
        const sanitizedName = productName.trim();
        const sanitizedQuantity = productQuantity.trim();
        const sanitizedType = productType.trim();
        if (sanitizedName.trim() !== '' && sanitizedQuantity.trim() !== '' && sanitizedType.trim() !== '') {
            onProductAdd(sanitizedName, sanitizedQuantity, sanitizedType);
        }
        setProductName('');
        setProductQuantity('');
        setproductType('');
    }

    return (
        <View style={styles.productInput}>
            <View style={styles.productItems}>
                <TextInput style={styles.porductName} placeholderTextColor='lightgrey'
                    placeholder='Nombre del producto: '
                    color='lightgrey'
                    keyboardType="default"
                    onChangeText={changeTextHandlerName}
                    value={productName}>
                </TextInput>
                <TextInput style={styles.porductName} placeholderTextColor='lightgrey'
                    placeholder='Nombre del producto: '
                    color='lightgrey'
                    keyboardType="default"
                    onChangeText={changeTextHandlerName}
                    value={productName}>
                </TextInput>
            </View>
            <View style={styles.productItems}>
                <TextInput style={styles.porductName} placeholderTextColor='lightgrey'
                    placeholder='Nombre del producto: '
                    color='lightgrey'
                    keyboardType="default"
                    onChangeText={changeTextHandlerName}
                    value={productName}>
                </TextInput>
                <Button style={styles.productButton} color="black"
                    title='Añadir'
                    onPress={addProductHandler}>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    productInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '80%',
        height: 120,
        borderRadius: 5,
        padding: 10,
        borderWidth: 2,
        shadowOffset: { width: -1, height: 5 },
        shadowColor: '#171717',
        shadowOpacity: 1,
        shadowRadius: 6,
        marginTop: 40,
        backgroundColor: '#FFAE3B'
    },
    productItems: {
        flexDirection: 'colum',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '80%',
        height: 80,
        borderRadius: 5,
    },
    porductName: {
        padding: 9,
        backgroundColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgrey'
    },
    productButton: {

    },
    productQuantity: {
        backgroundColor: 'black',
        borderRadius: 5,
    },
    ProductType: {
        backgroundColor: 'black',
        borderRadius: 5,
    }

})

export default ProductInput
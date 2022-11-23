import {StyleSheet, Text, View, Image, Pressable} from 'react-native';

const ListItem = ({id, productName,productQuantity, onProductRemove}) => {
    return(
        <Pressable onPress={() => onProductRemove(id)}>
                <View style={styles.listItem}>
                    <Text style={styles.compra}>{productQuantity} x {productName}</Text>
                </View>     
        </Pressable>
    )
    
}

export default ListItem


const styles = StyleSheet.create({
    listItem: {
        marginBottom: 10,
        padding: 4,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FFAE3B',
        shadowOffset: {width: -1, height: 5},  
        shadowColor: '#171717',  
        shadowOpacity: 1,  
        shadowRadius: 3,  
    },
    compra : {
        marginRight : 20,
        fontSize: 30,
    }
});
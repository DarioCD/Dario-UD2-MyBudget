import { useState } from 'react';
import {StyleSheet, Text, View, ScrollView } from 'react-native';
import BudgetInput from './components/BudgetInput';
import BudgetListItem from './components/BudgetListItem';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [budget, setBudget ] = useState([]);
  const [precioNuevoTotal, setPrecioNuevoTotal] = useState(0)
  const addBudgetHandler = (budgetDescripcion, budgetPrecio) => {
    let today = new Date();
    const newBudget = {
      id: uuidv4(),
      descripcion: budgetDescripcion,
      precio: budgetPrecio,
      fecha: today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear(),
    };

    setBudget(() => [...budget, newBudget]);
  }
  
  const removeBudgetHandler = (budgetID) => {
    setBudget(() => budget.filter((budgetFull) => budgetFull.id != budgetID));
    console.log(budget);
    setPrecioNuevoTotal(0);
  }; 

  return (
    <View style={styles.container}>
        <BudgetInput onBudgetAdd={addBudgetHandler}/>
        <Text style={styles.movimientos}>Movimientos</Text>
        <ScrollView style={styles.budgetList}>
          { 
            budget.length === 0 
            ? <Text style = {styles.nobudget}>No hay ningún dato</Text> 
            : budget.map((budgets, idx) =>(
              
              <BudgetListItem 
                setPrecioNuevo={setPrecioNuevoTotal}
                budget={budget}
                budgetItem={budgets}
                key={budgets.id}
                id={budgets.id}
                onbudgetRemove={removeBudgetHandler}/>
            )) 
          }
        </ScrollView>
        <View style = {
          precioNuevoTotal >= 0
          ?
          styles.totalVerde
          :
          styles.totalRojo
        }>
            <Text style = {styles.textTotal}>Total en la cuenta</Text>
            <Text style = {styles.textTotal}>{precioNuevoTotal}€</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  movimientos : {
    fontSize: 30,
    marginTop: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a18661',
    justifyContent: 'flex-start',
  },
  budgetList: {
    flex: 5,
    width: '90%',
    marginTop: 10,
    padding:10,
    backgroundColor: '#a18661',
    borderRadius: 5,
    borderWidth: 3
  },
  nobudget : {
    fontSize: 30,
    textAlign: 'center',
    fontWeight:"bold"
  },
  totalVerde : {
    flex: 0.2,
    width: '50%',
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#77dd77',
  },
  totalRojo : {
    flex: 0.2,
    width: '50%',
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e2504c'
  },
  textTotal : {
    fontSize: 30,
    fontWeight:"bold"
  },
});


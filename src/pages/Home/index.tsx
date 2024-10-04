import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Transaction from '../../components/Transaction';
import Actions from '../../components/Actions';
import list from '../../data/db';

<<<<<<< HEAD
const accountValue = (type: ('receita' | 'despesa')) => {
  const result = list.filter(item => item.type === type).reduce((accumulator, current) => {
    return accumulator += parseFloat(current.value)
  }, 0)
  return new Intl.NumberFormat('pt-br', { style: 'decimal', minimumFractionDigits: 2 }).format(result)
}
=======
export type ITransaction = {
  id: number;
  label: string;
  value: number;
  date: Date;
  type: "receita" | "despesa"
}
const list: ITransaction[] = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: 300.90,
    date: new Date(2024, 8, 17),
    type: 'despesa'
  },
  {
    id: 2,
    label: 'Pix Cliente',
    value: 2500.00,
    date: new Date(2024, 8, 18),
    type: 'receita'
  },
  {
    id: 3,
    label: 'Salário',
    value: 7500.00,
    date: new Date(2024, 8, 25),
    type: 'receita'
  },
]
const balance = new Intl.NumberFormat('pt-br',
  { style: 'currency', currency: 'BRL' })
  .format(list.filter(({ type }) => type == 'receita').reduce((acc, { value }) => acc += value, 0))

const expense = new Intl.NumberFormat('pt-br',
  { style: 'currency', currency: 'BRL' })
  .format(list.filter(({ type }) => type == 'despesa').reduce((acc, { value }) => acc += value, 0))
>>>>>>> 5be5a25f2054d4f8f547652802a2705c99d59ef3

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header name="Eduardo Rauta" />
<<<<<<< HEAD
      <Balance balance={accountValue('receita')} expense={accountValue('despesa')} />
=======
      <Balance balance={balance} expense={expense} />
>>>>>>> 5be5a25f2054d4f8f547652802a2705c99d59ef3
      <Actions />
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Transaction data={item} />}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginHorizontal: 14
  }
});

export default Home
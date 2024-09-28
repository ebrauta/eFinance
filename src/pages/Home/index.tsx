import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Transaction from '../../components/Transaction';
import Actions from '../../components/Actions';

export type ITransaction = {
  id: number;
  label: string;
  value: string;
  date: string;
  type: "receita" | "despesa"
}
const list: ITransaction[] = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300.90',
    date: '17/09/2024',
    type: 'despesa'
  },
  {
    id: 2,
    label: 'Pix Cliente',
    value: '2500.00',
    date: '18/09/2024',
    type: 'receita'
  },
  {
    id: 3,
    label: 'Salário',
    value: '7500.00',
    date: '25/09/2024',
    type: 'receita'
  },
]
const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header name="Eduardo Rauta" />
      <Balance balance="10000,00" expense="-300,90" />
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
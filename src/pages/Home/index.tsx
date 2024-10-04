import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Transaction from '../../components/Transaction';
import Actions from '../../components/Actions';
import list from '../../data/db';

const accountValue = (type: ('receita' | 'despesa')) => {
  const result = list.filter(item => item.type === type).reduce((accumulator, current) => {
    return accumulator += parseFloat(current.value)
  }, 0)
  return new Intl.NumberFormat('pt-br', { style: 'decimal', minimumFractionDigits: 2 }).format(result)
}

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header name="Eduardo Rauta" />
      <Balance balance={accountValue('receita')} expense={accountValue('despesa')} />
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
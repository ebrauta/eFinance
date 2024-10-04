import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MotiView } from "moti";

interface BalanceProps {
    balance: string;
    expense: string;
}
const Balance = ({ balance, expense }: BalanceProps) => {
    return (
        <MotiView
            style={styles.container}
            from={{ rotateX: '-100deg', opacity: 0 }}
            animate={{ rotateX: '0deg', opacity: 1 }}
            transition={{ type: 'timing', delay: 300, duration: 900 }}
        >
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.balance}>{balance}</Text>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.expense}>{expense}</Text>
                </View>
            </View>
        </MotiView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        paddingVertical: 22,
        marginTop: -24,
        marginHorizontal: 14,
        borderRadius: 4,
        zIndex: 99
    },
    item: {

    },
    itemTitle: {
        fontSize: 20,
        color: '#DADADA'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    balance: {
        fontSize: 22,
        color: '#2ECC71'
    },
    expense: {
        fontSize: 22,
        color: "#E74C3C"
    }
})

export default Balance
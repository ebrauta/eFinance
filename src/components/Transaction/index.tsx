import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ITransaction } from "../../pages/Home";
import { MotiView, AnimatePresence, MotiText } from "moti";

interface TransactionProps {
    data: ITransaction
}

function BRL(value: number): string {
    return new Intl.NumberFormat('pt-br', {
        style: "currency", currency: 'BRL'
    }).format(value)
}

const Transaction = ({ data }: TransactionProps) => {
    const [showValue, setShowValue] = useState<boolean>(false)
    return (
        <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
            <Text style={styles.date}>{new Intl.DateTimeFormat('pt-br').format(data.date)}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>
                    {data.label}
                </Text>
                {showValue ? (

                    <AnimatePresence exitBeforeEnter>
                        <MotiText
                            style={data.type == 'receita' ? styles.balance : styles.expense}
                            from={{ translateX: 100 }}
                            animate={{ translateX: 0 }}
                            transition={{ type: 'timing', duration: 500 }}>
                            {BRL(data.value)}</MotiText>
                    </AnimatePresence>
                ) : (
                    <AnimatePresence exitBeforeEnter>
                        <MotiView
                            style={styles.skeleton}
                            from={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ type: 'timing' }}
                        ></MotiView>
                    </AnimatePresence>
                )
                }
            </View>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: "#DADADA"
    },
    date: {
        color: '#DADADA',
        fontWeight: 'bold'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16
    },
    balance: {
        fontSize: 16,
        color: '#2ECC71',
        fontWeight: 'bold'
    },
    expense: {
        fontSize: 16,
        color: '#E74C3C',
        fontWeight: 'bold'
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8
    }
})

export default Transaction
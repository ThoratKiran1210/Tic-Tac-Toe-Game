import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Cell = ({ value, onPress }) => (
    <TouchableOpacity style={styles.cell} onPress={onPress}>
        <Text style={styles.cellText}>{value}</Text>
    </TouchableOpacity>
);

const Board = ({ board, onPress }) => (
    <View style={styles.board}>
        {board.map((row, rowIndex) => (
            <View style={styles.row} key={rowIndex}>
                {row.map((cellValue, cellIndex) => (
                    <Cell
                        key={cellIndex}
                        value={cellValue}
                        onPress={() => onPress(rowIndex, cellIndex)}
                    />
                ))}
            </View>
        ))}
    </View>
);

const styles = StyleSheet.create({
    board: {
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 5,
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
    },
    cellText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Board;

import React ,{useState, useEffect} from 'react'
import { View, StyleSheet, TouchableOpacity, Alert, Text, Animated} from 'react-native'
import Board from './Board';


const Game = () => {

    const initialBoard = [
        ['','',''],
        ['','',''],
        ['','',''],
    ];

    const[board, setBoard] = useState(initialBoard);
    const [player, setPlayer] = useState('X');
    const [winner,setWinner]=useState('');
    const [titleAnimation] = useState(new Animated.Value(0));

    useEffect(() => {
        checkWinner();
    }, [board]);

    useEffect(() => {
        // Add animation effect here
        Animated.timing(titleAnimation, {
            toValue: 1, // Animate to fully visible
            duration: 4000, // Animation duration in milliseconds
            useNativeDriver: true, // Use native driver for better performance
        }).start();
    }, []);

    const handlePress =(rowIndex, cellIndex) => {
        if (board[rowIndex][cellIndex] === '' && !winner) {
            const newBoard = [...board];
            newBoard[rowIndex][cellIndex] = player;
            setBoard(newBoard);
            setPlayer(player === 'X' ? '0' : 'X');
        }
    };

    const checkWinner = () => {
        // check row
        for (let i=0; i<3; i++) {
            if (
                board[i][0] !== '' &&
                board[i][0] === board[i][1] &&
                board[i][0] === board[i][2] 
            ) {
                setWinner(board[i][0]);
                break;
            }
        }
        // check columns
        for (let i=0; i<3; i++){
            if (
                board[0][i] !== '' &&
                board[0][i] === board[1][i] &&
                board[0][i] === board[2][i] 
            ) {
                setWinner(board[0][i]);
                break;
            }
        }
        // check diagonal
        if (
            board[0][0] !== '' &&
            board[0][0] === board[1][2] &&
            board[0][0] === board[2][2] 
        ) {
            setWinner(board[0][0]);
        } 
        else if(
            board[0][2] !== '' &&  
            board[0][2] === board[1][1] &&  
            board[0][2] === board[2][0]
        ) {
            setWinner(board[0][2]);
        }
    };

    const resetBoard =  () => {
        setBoard(initialBoard);
        setPlayer('X');
        setWinner('');
    };

    useEffect (() => {
        if(winner) {
            Alert.alert(`Player ${winner} won!!`, '', [{text: 'OK', onPress: resetBoard}]);
        }
    }, [winner]);

    useEffect (() => {
        if(!winner) {
            const isBoardFull = board.every((row) => row.every((cell) => cell !== ''));
            if (isBoardFull) {
                Alert.alert('It\'s a tie', '', [{text: 'OK', onPress: resetBoard}]);
            }
        }
    },[board]);

    return (
        <View style={styles.container}>
            <Animated.Text
                style={[styles.title, {
                    opacity: titleAnimation, // Apply animated opacity
                }]}
            >
                Tic-Tac-Toe Game
            </Animated.Text>
            <Board board={board} onPress={handlePress} />
            <TouchableOpacity
                style={styles.resetButton}
                onPress={resetBoard}
            >
                <Text style={styles.resetButtonText}>Reset Game</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title : {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#4D5A4F'

    },
    resetButton: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginTop: 50,

    },
    resetButtonText: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default Game









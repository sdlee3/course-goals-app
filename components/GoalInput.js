import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';


const GoalInput = props => {
	const [enteredText, setEnteredText] = useState('');

	const goalInputHandler = enteredText => {
		setEnteredText(enteredText);
	}

	const addGoalHandler = () => {
		props.onAddInput(enteredText);
		setEnteredText('');

	}

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredText} />
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='ADD'
							onPress={addGoalHandler}
						// onPress={props.onAddInput.bind(this, enteredText)}
						/>
					</View>
					<View style={styles.button}>
						<Button title='CANCEL' color="red"
							onPress={props.onCancel}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		width: '80%',
		borderColor: 'black',
		borderBottomWidth: 1,
		padding: 10,
		marginBottom: 10
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '60%'
	},
	button: {
		width: '40%'
	}
})

export default GoalInput;
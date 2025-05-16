// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		padding: 20,
		paddingBottom: 50,
	},
	label: {
		marginTop: 15,
		fontSize: 16,
		fontWeight: 'bold',
	},
	input: {
		borderColor: '#999',
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
	},
	picker: {
		marginVertical: 10,
	},
	checkboxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 15,
	},
	checkboxBox: {
		height: 24,
		width: 24,
		borderWidth: 2,
		borderColor: '#333',
		alignItems: 'center',
		justifyContent: 'center',
	},
	checkboxInner: {
		height: 12,
		width: 12,
		backgroundColor: '#333',
	},
	checkboxLabel: {
		marginLeft: 10,
		fontSize: 16,
	},
	radioContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginVertical: 10,
	},
	radioButton: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#888',
		backgroundColor: '#eee',
	},
	radioSelected: {
		backgroundColor: '#4caf50',
		borderColor: '#4caf50',
	},
	radioText: {
		fontSize: 16,
		color: '#000',
	},
});

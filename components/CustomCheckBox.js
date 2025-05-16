// components/CustomCheckBox.js
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from '../styles/styles';

export default function CustomCheckBox({ value, onValueChange }) {
	return (
		<TouchableOpacity onPress={() => onValueChange(!value)} style={styles.checkboxBox}>
			{value ? <View style={styles.checkboxInner} /> : null}
		</TouchableOpacity>
	);
}

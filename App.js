// Importa React y el hook useState para manejar estados locales del componente
import React, { useState } from 'react';

// Importa componentes de React Native para construir la interfaz de usuario
import {
	View, // Contenedor de vistas
	Text, // Etiquetas de texto
	TextInput, // Campo de entrada de texto
	Button, // Botón presionable
	ScrollView, // Vista con desplazamiento vertical
	TouchableOpacity, // Área presionable (usada para botones personalizados)
} from 'react-native';

// Importa el componente Picker para listas desplegables
import { Picker } from '@react-native-picker/picker';

// Importa estilos personalizados desde un archivo local
import styles from './styles/styles';

// Importa un componente de checkbox personalizado
import CustomCheckBox from './components/CustomCheckBox';

// Componente principal de la aplicación
export default function App() {
	// Estado para almacenar el nombre ingresado por el usuario
	const [nombre, setNombre] = useState('');
	// Estado para la contraseña ingresada
	const [password, setPassword] = useState('');
	// Estado para el género seleccionado
	const [genero, setGenero] = useState('');
	// Estado para el nivel de satisfacción (por defecto en "3")
	const [nivel, setNivel] = useState('3');
	// Estado para verificar si el usuario acepta los términos
	const [aceptaTerminos, setAceptaTerminos] = useState(false);
	// Estado para la respuesta del usuario sobre recibir notificaciones (sí/no)
	const [respuestaRadio, setRespuestaRadio] = useState('');

	// Función que se ejecuta al presionar el botón "Enviar formulario"
	const enviarFormulario = () => {
		// Muestra una alerta con los datos ingresados por el usuario
		alert(
			`Nombre: ${nombre}\nContraseña: ${password}\nGénero: ${genero}\nNivel: ${nivel}\nAcepta Términos: ${aceptaTerminos}\nRespuesta: ${respuestaRadio}`
		);
	};

	// Retorna la interfaz de usuario (JSX)
	return (
		// Contenedor principal con desplazamiento
		<ScrollView style={styles.container}>
			{/* Campo de nombre */}
			<Text style={styles.label}>Nombre:</Text>
			<TextInput
				style={styles.input}
				placeholder="Ingresa tu nombre"
				value={nombre}
				onChangeText={setNombre} // Actualiza el estado al escribir
			/>

			{/* Campo de contraseña */}
			<Text style={styles.label}>Contraseña:</Text>
			<TextInput
				style={styles.input}
				placeholder="********"
				secureTextEntry // Oculta el texto como contraseña
				value={password}
				onChangeText={setPassword}
			/>

			{/* Selección de género */}
			<Text style={styles.label}>Género:</Text>
			<Picker
				selectedValue={genero}
				onValueChange={(itemValue) => setGenero(itemValue)} // Actualiza el estado
				style={styles.picker}
			>
				<Picker.Item label="Selecciona..." value="" />
				<Picker.Item label="Masculino" value="masculino" />
				<Picker.Item label="Femenino" value="femenino" />
				<Picker.Item label="Otro" value="otro" />
			</Picker>

			{/* Nivel de satisfacción */}
			<Text style={styles.label}>Nivel de satisfacción:</Text>
			<Picker
				selectedValue={nivel}
				onValueChange={(itemValue) => setNivel(itemValue)} // Actualiza el estado
				style={styles.picker}
			>
				<Picker.Item label="1 - Muy bajo" value="1" />
				<Picker.Item label="2 - Bajo" value="2" />
				<Picker.Item label="3 - Medio" value="3" />
				<Picker.Item label="4 - Alto" value="4" />
				<Picker.Item label="5 - Excelente" value="5" />
			</Picker>

			{/* Checkbox para aceptar términos */}
			<View style={styles.checkboxContainer}>
				<CustomCheckBox value={aceptaTerminos} onValueChange={setAceptaTerminos} />
				<Text style={styles.checkboxLabel}>Acepto los términos y condiciones</Text>
			</View>

			{/* Radio botones para recibir notificaciones */}
			<Text style={styles.label}>¿Deseas recibir notificaciones?</Text>
			<View style={styles.radioContainer}>
				<TouchableOpacity
					style={[
						styles.radioButton,
						respuestaRadio === 'sí' && styles.radioSelected, // Marca seleccionado
					]}
					onPress={() => setRespuestaRadio('sí')} // Actualiza el estado
				>
					<Text style={styles.radioText}>Sí</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.radioButton,
						respuestaRadio === 'no' && styles.radioSelected, // Marca seleccionado
					]}
					onPress={() => setRespuestaRadio('no')} // Actualiza el estado
				>
					<Text style={styles.radioText}>No</Text>
				</TouchableOpacity>
			</View>

			{/* Botón para enviar el formulario */}
			<View style={{ marginTop: 20 }}>
				<Button title="Enviar formulario" onPress={enviarFormulario} />
			</View>
		</ScrollView>
	);
}

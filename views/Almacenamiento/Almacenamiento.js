import React, { useState } from 'react';
import { ScrollView, View, TextInput, Button, FlatList, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const Almacenamiento = () => {
  const [newStudent, setNewStudent] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    curso: ''
  });
  const [students, setStudents] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedStudent, setEditedStudent] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    curso: ''
  });

  const addStudent = () => {
    setStudents([...students, newStudent]);
    setNewStudent({ nombre: '', apellido: '', edad: '', curso: '' });
  };

  const deleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  const editStudent = (index) => {
    setEditingIndex(index);
    const studentToEdit = students[index];
    setEditedStudent({ ...studentToEdit });
  };

  const saveEditedStudent = () => {
    const updatedStudents = [...students];
    updatedStudents[editingIndex] = editedStudent;
    setStudents(updatedStudents);
    setEditingIndex(null);
    setEditedStudent({ nombre: '', apellido: '', edad: '', curso: '' });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
      <TextInput
         
          placeholder="Agregar Alumno"
      
        />
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={newStudent.nombre}
          onChangeText={(text) => setNewStudent({ ...newStudent, nombre: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          value={newStudent.apellido}
          onChangeText={(text) => setNewStudent({ ...newStudent, apellido: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Edad"
          value={newStudent.edad}
          onChangeText={(text) => setNewStudent({ ...newStudent, edad: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Curso"
          value={newStudent.curso}
          onChangeText={(text) => setNewStudent({ ...newStudent, curso: text })}
        />
        <Button title="Agregar" onPress={addStudent} />
      </View>
      {editingIndex !== null && (
        <View style={styles.editForm}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={editedStudent.nombre}
              onChangeText={(text) => setEditedStudent({ ...editedStudent, nombre: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Apellido"
              value={editedStudent.apellido}
              onChangeText={(text) => setEditedStudent({ ...editedStudent, apellido: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Edad"
              value={editedStudent.edad}
              onChangeText={(text) => setEditedStudent({ ...editedStudent, edad: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Curso"
              value={editedStudent.curso}
              onChangeText={(text) => setEditedStudent({ ...editedStudent, curso: text })}
            />
          </View>
          <Button title="Guardar" onPress={saveEditedStudent} />
        </View>
      )}
      <FlatList
        data={students}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.studentItem}>
            <Text style={styles.studentInfo}>{`Nombre: ${item.nombre}`}</Text>
            <Text style={styles.studentInfo}>{`Apellido: ${item.apellido}`}</Text>
            <Text style={styles.studentInfo}>{`Edad: ${item.edad}`}</Text>
            <Text style={styles.studentInfo}>{`Curso: ${item.curso}`}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button} onPress={() => editStudent(index)}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => deleteStudent(index)}>
                <Text style={styles.buttonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  studentItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center'
  },
  studentInfo: {
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  editForm: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
});

export default Almacenamiento;
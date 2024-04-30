import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Linking } from "react-native";
import Communications from "react-native-communications";

const Mensajeria = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [phoneNumberSMS, setPhoneNumberSMS] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendSMS = () => {
    Communications.text(phoneNumber, message);
  };

  const handleSendEmail = () => {
    Communications.email([email], null, null, subject, emailBody);
  };

  const handleCall = () => {
    const formattedPhoneNumber = 'tel:${phoneNumber}';
    Linking.openURL(formattedPhoneNumber).catch((err) =>
      console.error("Error al abrir el enlace: ", err)
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.smsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mensaje de texto"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
        />
        <TextInput
          style={styles.input}
          placeholder="Número de teléfono"
          value={phoneNumberSMS}
          onChangeText={setPhoneNumberSMS}
          keyboardType="phone-pad"
        />
        <Button title="Enviar SMS" onPress={handleSendSMS} style={styles.button} />
      </View>
      <View style={styles.emailContainer}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Asunto"
          value={subject}
          onChangeText={setSubject}
        />
        <TextInput
          style={styles.input}
          placeholder="Contenido del correo"
          value={emailBody}
          onChangeText={setEmailBody}
          multiline
          numberOfLines={4}
        />
        <Button title="Enviar Email" onPress={handleSendEmail} style={styles.button} />
      </View>
      <View style={styles.callContainer}>
        <TextInput
          style={styles.input}
          placeholder="Número de teléfono"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <Button title="Llamar" onPress={handleCall} style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#AAAAAA",
  },
  smsContainer: {
    marginBottom: 20,
    backgroundColor: "#E2E2E2",
    borderRadius: 10,
    padding: 10,
  },
  emailContainer: {
    marginBottom: 20,
    backgroundColor: "#E2E2E2",
    borderRadius: 10,
    padding: 10,
  },
  callContainer: {
    marginBottom: 20,
    backgroundColor: "#E2E2E2",
    borderRadius: 10,
    padding: 10,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  button: {
    width: "100%",
  },
});

export default Mensajeria;

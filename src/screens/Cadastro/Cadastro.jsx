import { useState } from "react";
import { Alert, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCreateUser } from "../../hooks/user";
import { Container } from "../Home/Styles";
import { Text, Button } from "react-native";

function Cadastro() {
  const navigation = useNavigation();
  const createUser = useCreateUser({
    onSuccess: () => {
      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      navigation.navigate("Login");
    },
    onError: () => {
      Alert.alert("Erro", "Erro ao cadastrar usuário.");
    },
  });

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  const handleCadastro = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios.");
      return;
    }
    if (senha !== confirmaSenha) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }
    createUser({ nome, email, cargo, senha });
  };

  return (
    <Container>
      <Container>
        <Text>CADASTRO</Text>

        <TextInput
          placeholderTextColor='white'
          placeholder='Nome'
          value={nome}
          onChangeText={setNome}
          style={{ color: "white" }}
        />
        <TextInput
          placeholderTextColor='white'
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          style={{ color: "white" }}
        />
        <TextInput
          placeholderTextColor='white'
          placeholder='Cargo'
          value={cargo}
          onChangeText={setCargo}
          style={{ color: "white" }}
        />
        <TextInput
          placeholderTextColor='white'
          placeholder='Senha'
          value={senha}
          onChangeText={setSenha}
          style={{ color: "white" }}
          secureTextEntry
        />
        <TextInput
          placeholderTextColor='white'
          placeholder='Confirme sua senha'
          value={confirmaSenha}
          onChangeText={setConfirmaSenha}
          style={{ color: "white" }}
          secureTextEntry
        />

        <Button title='Criar Conta' onPress={handleCadastro} />

        <Button
          title='Já possui uma conta? Faça o login aqui.'
          onPress={() => navigation.navigate("Login")}
        />
      </Container>
    </Container>
  );
}

export default Cadastro;

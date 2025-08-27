import { Container, PlaceHolder } from "./Styles";
import { Header } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />
      <Button title='Criar Conta' onPress={() => navigation.navigate("Cadastro")} />
    </Container>
  );
}

export default Home;

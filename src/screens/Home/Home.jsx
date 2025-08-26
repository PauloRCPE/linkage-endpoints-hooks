import { Container, PlaceHolder } from "./Styles";
import { Header } from "../../components";

export default function Home({ navigation }) {
  return (
    <Container>
      <Header />
      <PlaceHolder>Seus eventos aparecerão aqui</PlaceHolder>
    </Container>
  );
}

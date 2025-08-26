import { TouchableOpacity } from "react-native";
import { Container, MenuItem } from "./Styles";

export default function Header(props) {
  return (
    <Container>
      <TouchableOpacity>
        <MenuItem>Home</MenuItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <MenuItem>Nav 1</MenuItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <MenuItem>Nav 2</MenuItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <MenuItem>Nav 3</MenuItem>
      </TouchableOpacity>
    </Container>
  );
}

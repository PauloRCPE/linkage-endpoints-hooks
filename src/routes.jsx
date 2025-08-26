import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens";
import { colors } from "./styles/styleVariables";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: colors.yellow,
          },
          headerTintColor: colors.black,
          headerTitle: "Agendamento",
          headerTitleStyle: {
            fontSize: 25,
          },
        }}
      />
    </Stack.Navigator>
  );
}

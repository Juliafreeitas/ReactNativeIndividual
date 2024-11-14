import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface PropsButton {
  title: string;
  handleFunction: () => void;
}

export default function ButtonForgotPassoword({
  title,
  handleFunction,
}: PropsButton) {
  return (
    <TouchableOpacity onPress={handleFunction} style={styles.botao}>
      <Text style={styles.texto}>{title}</Text>
    </TouchableOpacity>
  );
}

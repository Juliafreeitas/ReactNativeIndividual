import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface PropsButton {
  title: string;
  propsBackgroundColor?: string;
  handleFunction: () => void;
}
export default function ButtonTypes({
  title,
  propsBackgroundColor,
  handleFunction,
}: PropsButton) {
  return (
    <TouchableOpacity
      onPress={handleFunction}
      activeOpacity={0.4}
      style={[
        styles.styleButton,
        {
          backgroundColor: propsBackgroundColor
            ? propsBackgroundColor
            : "green",
        },
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

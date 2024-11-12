import { TextInput } from "react-native";
import { styles } from "./style";

interface PropsInput {
  placeholder: string;
  typeInput: boolean;
  valueInput: string;
  handleFunctionInput: (value: string) => void;
  tamanhomax?: number;
}

export default function TextInputField({
  placeholder,
  typeInput,
  valueInput,
  handleFunctionInput,
  tamanhomax,
}: PropsInput) {
  return (
    <TextInput
      keyboardType="numeric"
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={typeInput}
      value={valueInput}
      onChangeText={handleFunctionInput}
      placeholderTextColor={"gray"}
      maxLength={tamanhomax}
    />
  );
}

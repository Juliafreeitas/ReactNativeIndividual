import {
  View,
  Text,
  Image,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./style";
import Seta from "../../assets/setaverde.png";
import TextInputField from "../../components/TextInput";
import { useState } from "react";
import ButtonTypes from "../../components/ButtonTypes";
import ButtonForgotPassoword from "../../components/ButtonForgotPassword";

export default function Login() {
  const [cpf, setCpf] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const handleCpf = (value: string) => {
    setCpf(value);
  };

  const handleSenha = (value: string) => {
    setSenha(value);
  };

  const handleLogin = () => {
    Alert.alert("Login Efetuado!");
  };

  const handleEsqueceuSenha = () => {
    Alert.alert("Esqueceu a senha!");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Image
            style={styles.iconVoltar}
            source={Seta}
            alt="Setinha verde para voltar"
          />
          <Text style={styles.textoCabecalho}>Login</Text>
        </View>
        <View style={styles.input}>
          <TextInputField
            placeholder="Informe seu CPF"
            typeInput={false}
            valueInput={cpf}
            handleFunctionInput={handleCpf}
            tamanhomax={11}
          />
          <TextInputField
            placeholder="Senha"
            typeInput={true}
            valueInput={senha}
            handleFunctionInput={handleSenha}
            tamanhomax={8}
          />
          <ButtonForgotPassoword
            handleFunction={handleEsqueceuSenha}
            title="Esqueci minha senha"
          />
        </View>
        <View style={styles.botaoRodape}>
          <ButtonTypes
            handleFunction={handleLogin}
            title="Entrar"
            propsBackgroundColor="#238662"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

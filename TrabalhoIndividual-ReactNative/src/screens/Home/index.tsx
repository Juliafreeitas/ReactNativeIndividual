import React from "react";
import { ScrollView, Text, View } from "react-native";
import { ButtonsHome } from "../../components/ButtonsHome";
import { CardsHome } from "../../components/CardsHome";
import { DailyHome } from "../../components/DailyHome";
import { HeaderFooter } from "../../components/FooterHome";
import { HeaderHome } from "../../components/HeaderHome";
import { styles } from "./styles";

export const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <HeaderHome />
        </View>

        <View style={styles.main}>
          <CardsHome />
          <Text style={styles.textoTitulo}>Pro dia a dia</Text>
          <DailyHome />
          <ButtonsHome />
        </View>

        <View style={styles.rodape}>
          <HeaderFooter />
        </View>
      </View>
    </ScrollView>
  );
};

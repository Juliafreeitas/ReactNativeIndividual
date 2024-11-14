import { View, FlatList, ScrollView, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { HomeApi } from "../../Mock/home";
import { HeaderHome } from "../../components/HeaderHome";
import { ButtonsHome } from "../../components/ButtonsHome";
import { DailyHome } from "../../components/DailyHome";
import { CardsHome } from "../../components/CardsHome";
import { HeaderFooter } from "../../components/FooterHome";

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

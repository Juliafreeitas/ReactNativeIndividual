// import {
//   View,
//   Text,
//   ScrollView,
//   FlatList,
//   FlatListComponent,
//   Image,
//   ImageSourcePropType,
// } from "react-native";
// // import React from "react";
// import { styles } from "./styles";
// import { HomeApi } from "../../Mock/home";

// export const FooterHome = () => {
//   return (
//     <FlatList
//       data={HomeApi}
//       keyExtractor={(dados) => dados.id.toString()}
//       renderItem={({ item }) => (
//         <View style={styles.container}>
//           <CardApi data={item} />
//         </View>
//       )}
//     />
//   );
// };

// interface PropsApi {
//   data: {
//     titulo: string;
//     icon: ImageSourcePropType | string | any;
//   };
// }

// const CardApi = ({ data }: PropsApi) => {
//   return (
//     <View style={styles.main}>
//       <View style={styles.btnbig}>
//         <Text>{data.titulo}</Text>
//         <Image source={data.icon} alt="Icone" style={styles.image}/>
//       </View>
//     </View>
//   );
// };
// const CardHeader = ({ data }: PropsApi) => {
//   return (
//     <View style={styles.cabecalho}>
//       <View>
//         <Text>{data.titulo}</Text>
//         <Image source={data.icon} alt="Icone" style={styles.image}/>
//       </View>
//     </View>
//   );
// };
// const CardFooter = ({ data }: PropsApi) => {
//   return (
//     <View style={styles.rodape}>
//       <View>
//         <Text>{data.titulo}</Text>
//         <Image source={data.icon} alt="Icone" style={styles.image}/>
//       </View>
//     </View>
//   );
// };





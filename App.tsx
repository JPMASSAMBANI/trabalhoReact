import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import batata from "./assets/batata.png";
import footer from "./assets/footer.png";
import promo1 from "./assets/promo1.png";
import promo2 from "./assets/promo2.jpg";
import mec1 from "./assets/mec1.png";
import mec2 from "./assets/mec2.png";
import mec3 from "./assets/mec3.png";
import mec4 from "./assets/mec4.png";

export default function App() {
  return (
    <View style={styles.container2}>
      <View style={styles.containerTitulo}>
        <Image source={batata} style={styles.batata} />
        <Text style={styles.titulo}>Escolha como você prefere!</Text>
      </View>
      <TextInput style={styles.textInput} placeholder="Encontre cupons" />
      <View>
        <ScrollView
          horizontal={true}
          style={styles.scrow}
          showsHorizontalScrollIndicator={false}
        >
          <Image style={styles.banner} source={promo1} />
          <Image style={styles.banner} source={promo2} />
        </ScrollView>
      </View>
      <Text style={styles.titulo2}>Méqui Friday 🍟🍔</Text>
      <View>
        <ScrollView
          horizontal={true}
          style={styles.scrow}
          showsHorizontalScrollIndicator={false}
        >
          <Image style={styles.banner2} source={mec1} />
          <Image style={styles.banner2} source={mec2} />
          <Image style={styles.banner2} source={mec3} />
          <Image style={styles.banner2} source={mec4} />
        </ScrollView>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.registro}>
          <Text style={styles.chave}>🔑</Text>
          <Text style={styles.textButton1}>Complete o registro</Text>
          <Text style={styles.textButton2}>Necessario para acumular pontos e pagar</Text>
        </TouchableOpacity>
      <Image style={styles.footer} source={footer} />
    </View>
  );
}

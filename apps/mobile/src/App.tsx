import { StyleSheet, Text, View } from "react-native";
import { t } from "./i18n";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("app.name")}</Text>
      <Text>{t("app.setupDone")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 8 },
  title: { fontSize: 24, fontWeight: "700" },
});

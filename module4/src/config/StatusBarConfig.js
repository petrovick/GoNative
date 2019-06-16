import { StatusBar, Platform } from "react-native";

StatusBar.setBarStyle("light-content");

if (Platform.OS === "Android") {
  StatusBar.setBackgroundColor("#111");
}

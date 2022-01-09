import { Platform } from "react-native";
import colors from "./colors";
export default {
  colors,
  textInput: {
    fontSize: 16,
    color: colors.black,
    fontFamily: Platform.OS === "android" ? "Roboto" : null,
    flex: 1,
    marginLeft: 5,
    padding: Platform.OS === "ios" ? 15 : 10,
  },
  text: {
    fontSize: 16,
    color: colors.black,
    // marginLeft: 5,
    fontFamily: Platform.OS === "android" ? "Roboto" : null,
  },
};

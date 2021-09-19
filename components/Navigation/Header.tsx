import { DrawerNavigationProp } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import IonIcons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TDrawerNavigation, TNavigation } from "../../models/navigation";

type THeaderProps = {
  toggleDrawer: () => void;
  goBack?: () => void;
  canGoBack?: boolean;
};

export const Header: React.FC<THeaderProps> = ({
  toggleDrawer,
  goBack,
  canGoBack,
}) => {
  return (
    <View style={style.container}>
      {goBack && canGoBack ? (
        <IonIcons.Button
          name="arrow-back"
          backgroundColor="transparent"
          color="blue"
          onPress={() => goBack()}
        />
      ) : (
        <FontAwesome.Button
          name="calendar"
          backgroundColor="transparent"
          color="blue"
          onPress={() => console.log("Calendar")}
        />
      )}
      <Text>My Header</Text>
      <IconFeather.Button
        name="menu"
        backgroundColor="transparent"
        color="blue"
        onPress={() => toggleDrawer()}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 3,
  },
  hamburgerButton: {},
});

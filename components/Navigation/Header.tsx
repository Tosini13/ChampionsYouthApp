import { DrawerNavigationProp } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import IonIcons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

type THeaderProps = {
  toggleDrawer: () => void;
  goBack?: () => void;
  canGoBack?: boolean;
  title?: string;
};

export const Header: React.FC<THeaderProps> = ({
  toggleDrawer,
  goBack,
  canGoBack,
  title,
}) => {
  console.log("title", title);
  return (
    <View style={style.container}>
      {goBack && canGoBack ? (
        <IonIcons.Button
          name="arrow-back"
          backgroundColor="transparent"
          color="white"
          onPress={() => goBack()}
        />
      ) : (
        <FontAwesome.Button
          name="calendar"
          backgroundColor="transparent"
          color="white"
          onPress={() => console.log("Calendar")}
        />
      )}
      <View>
        <Text style={style.title}>{title ?? "No Title"}</Text>
      </View>
      <IconFeather.Button
        name="menu"
        backgroundColor="transparent"
        color="white"
        onPress={() => toggleDrawer()}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 3,
    paddingTop: 28,
    backgroundColor: "blue",
  },
  title: {
    color: "white",
  },
});

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { TDrawerNavigation } from "../../models/navigation";
import { BottomTabNavigation } from "../Navigation/BottomTabNavigation";

type TTournamentScreenProps = {} & DrawerScreenProps<
  TDrawerNavigation,
  "Tournaments"
>;
export const TournamentScreen: React.FC<TTournamentScreenProps> = ({
  navigation,
}) => {
  return <BottomTabNavigation toggleDrawer={navigation.toggleDrawer} />;
};

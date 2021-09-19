import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TDrawerNavigation } from "../../../models/navigation";
import { Text, View } from "react-native";

type TCreateTournamentProps = {} & NativeStackScreenProps<
  TDrawerNavigation,
  "CreateTournament"
>;
export const CreateTournament: React.FC<TCreateTournamentProps> = ({}) => {
  return (
    <View>
      <Text>CreateTournament</Text>
    </View>
  );
};

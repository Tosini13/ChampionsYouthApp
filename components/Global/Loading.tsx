import React from "react";
import { Text, View } from "react-native";

type TLoadingProps = {};

const Loading: React.FC<TLoadingProps> = ({}) => {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

export default Loading;

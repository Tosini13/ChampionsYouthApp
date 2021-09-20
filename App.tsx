import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StyleSheet, View } from "react-native";
import { DrawerNavigation } from "./components/Navigation/DrawerNavigation";

export default function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });
  return (
    <View style={styles.container}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      </ApolloProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

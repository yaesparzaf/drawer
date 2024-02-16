import * as React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from "../screens/Screen1";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  return (
    <NavigationContainer
    >
      <Drawer.Navigator
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerStyle:{
            backgroundColor:'red'
          }
        }}
      >
        <Drawer.Screen
          name="Paz Mundial"
          component={HomeScreen}
          options={{
            drawerPosition: "right",
            headerStyle: {  backgroundColor: "blue" },
          }}
        />
        <Drawer.Screen name="Screen1" component={Screen1} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

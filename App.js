import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from './app/Splash';
import Loginf from './app/Login';
import RecuperarSenha from './app/RecuperarSenha';
import Home from './app/Home';
import Dashboard from './app/Dashboard';
import Dashboard_User from './app/Dashboard_User';
import Tarefas from './app/Tarefas';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
         
        <Stack.Screen
          name="Login"
          component={Loginf}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecuperarSenha"
          component={RecuperarSenha}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Dashboard_User"
          component={Dashboard_User}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tarefas"
          component={Tarefas}
          options={{ headerShown: false }}
        />



     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

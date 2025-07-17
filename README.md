Passo a passo na inicialização de um app:

1. Criação do projeto:
   npx create-expo-app NomeDoApp --template(é possível escolher o template desejado escrevendo seu nome à frente, EX: --template blank)

2. Instalar as bibliotecas a serem usadas, como por exemplo:
   npm install @react-navigation/native (Essa é o núcleo da biblioteca, parte fundamental e essencial da biblioteca);
   *SE O PROJETO USAR NAVEGAÇÃO ENTRE TELAS*
      Dependência adicional:
         npm install react-native-screens react-native-safe-area-context(safe-area-context garante que o conteúdo da tela não será cortado, nem modificado, independentemente do aparelho em que a aplicação esteja sendo usada);
      Biblioteca de navegação em pilha(Navigation Stack):
         npm install @react-navigation/stack;
   *SE O PROJETO USAR ARMAZENAMENTO INTERNO*
      npx expo install @react-native-async-storage/async-storage;

3. Importar as bibliotecas para seu código, neste caso:
   import * as React from 'react';
   import { NavigationContainer } from '@react-navigation/native';(Funcionalidades de navegação)
   import { createStackNavigator } from '@react-navigation/stack';(Navegação por pilhas)
   import AsyncStorage from '@react-native-async-storage/async-storage';

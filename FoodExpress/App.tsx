import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import CadastroScreen from './src/screens/CadastroScreen';
import ListagemScreen from './src/screens/ListagemScreen';

export default function App() {
  const [tela, setTela] = useState<'cadastro' | 'listagem'>('listagem');

  return (
    <View style={styles.container}>
      <View style={styles.botoes}>
        <Button title="Listar Cardápio" onPress={() => setTela('listagem')} />
        <Button title="Cadastrar Produto" onPress={() => setTela('cadastro')} />
      </View>
      {tela === 'cadastro' ? <CadastroScreen /> : <ListagemScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  botoes: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
});
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
  } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/fechada.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
     'Lucas 2:19 "Maria, porém, guardava todas essas coisas e sobre elas refletia em seu coração." ', 
      'Salmos 94:11 "O Senhor conhece os pensamentos do homem, e sabe como são fúteis." ', 
      'João 16:33 "Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo".', 
      'Filipenses 4:13 "Tudo posso naquele que me fortalece"',
      'Êxodo 20:12 "Honra teu pai e tua mãe, a fim de que tenhas vida longa na terra que o Senhor,o teu Deus, te dá."',
      ' Mateus 19:14 "Então disse Jesus: "Deixem vir a mim as crianças e não as impeçam; pois o Reino dos céus pertence aos que são semelhantes a elas".',
      'Levítico 19:28 "Não façam cortes no corpo por causa dos mortos nem tatuagens em vocês mesmos. Eu sou o Senhor."',
      'Marcos, 11, 24 "Por isso, vos digo que tudo o que pedireis, orando, crede que o recebereis e tê-lo-eis."',
      'Carta de São Tiago, 1, 6 "Todavia é preciso pedir com fé, sem duvidar, porque aquele que duvida é como a onda do mar, que o vento leva de um lado para outro."',
      'Marcos, 9, 29 "Eu creio, mas ajuda-me na minha falta de fé."',
      'Hebreus, 11, 1 "Ora, a fé é o firme fundamento das coisas que se esperam e a prova das coisas que não se veem."',
      'Hebreus, 10, 23"Apeguemo-nos com firmeza à esperança que professamos, pois aquele que prometeu é fiel.."',
      'Romanos, 12, 12 "Sejam alegres na esperança, pacientes na tribulação e perseverantes na oração."',
    ];

  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length );

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./src/aberta.png')
    });
  
  }


  render(){
    return(
      <View style={styles.container} > 
      
      <Image
        source={this.state.img}
        style={styles.img}
      />

      <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Abrir Palavra</Text>
          </View>
      </TouchableOpacity>  
      <Text style={{padding:20, color:'gray'}}> Dev: Fernando Gustavo </Text>
      </View>    
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width: 250,
    height: 250,
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25 
  },
  btnArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;
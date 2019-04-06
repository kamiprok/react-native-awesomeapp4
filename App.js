import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={{ flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 35, textAlign: 'center', margin: 10}}>Siemanko!</Text>
        <Text style={{fontSize: 30, textAlign: 'center', margin: 10}}>Witam w mojej apce!</Text>
        <Text style={{fontSize: 20, textAlign: 'center', margin: 10}}>Wybierz imię, które najbardziej pasuje do Twojej osobowości: </Text>
      </View>
      <View>
          <Button 
            title="Anna"
            onPress={() => {
              this.props.navigation.navigate('Anna')
              }}>
          </Button>
          
          <Button 
              title="Maria"
              onPress={() => {
                this.props.navigation.navigate('Maria')
                }}>
          </Button>

          <Button 
              title="Monika"
              onPress={() => {
                this.props.navigation.navigate('Monika')
                }}>
          </Button>
      </View></View>
    );
  }
}

class AnnaScreen extends React.Component {
  static navigationOptions = {
    title: 'Anna',
  };

  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.text}>Anna</Text>
          <Text style={styles.text2}>Naciśnij "Losuj", żeby wylosować cytat zgodny z Twoją naturą: </Text>
        </View>
        <View>
          <Button
            title='Losuj'
            onPress={() => this.props.navigation.navigate('AnnaLosuj')}/>
          <Button 
            title="Go Back"
            onPress={() => this.props.navigation.navigate('Home')}
            />
        </View>
      </View>
    );
  }
}

class AnnaLosuj extends React.Component {
  static navigationOptions = {
    title: 'Losuj',
  };

  state = {
    myState: anna(),
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.text2}>"{this.state.myState}"</Text>
        </View>
        <View>
          <Button 
            title="Go Back"
            onPress={() => this.props.navigation.navigate('Anna')}
            />
        </View>
      </View>
    );
  }
}

class MariaScreen extends React.Component {
  static navigationOptions = {
    title: 'Maria',
  };

  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.text}>Maria</Text>
          <Text style={styles.text2}>Naciśnij "Losuj", żeby wylosować cytat zgodny z Twoją naturą: </Text>
        </View>
        <View>
          <Button
            title='Losuj'
            onPress={() => this.props.navigation.navigate('MariaLosuj')}/>
          <Button 
            title="Go Back"
            onPress={() => this.props.navigation.navigate('Home')}
            />
        </View>
      </View>
    );
  }
}

class MariaLosuj extends React.Component {
  static navigationOptions = {
    title: 'Losuj',
  };

  state = {
    myState: maria(),
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.text2}>"{this.state.myState}"</Text>
        </View>
        <View>
          <Button 
            title="Go Back"
            onPress={() => this.props.navigation.navigate('Maria')}
            />
        </View>
      </View>
    );
  }
}

class MonikaScreen extends React.Component {
  static navigationOptions = {
    title: 'Monika',
  };

  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.text}>Monika</Text>
          <Text style={styles.text2}>Naciśnij "Losuj", żeby wylosować cytat zgodny z Twoją naturą: </Text>
        </View>
        <View>
          <Button
            title='Losuj'
            onPress={() => this.props.navigation.navigate('MonikaLosuj')}/>
          <Button 
            title="Go Back"
            onPress={() => this.props.navigation.navigate('Home')}
            />
        </View>
      </View>
    );
  }
}

class MonikaLosuj extends React.Component {
  static navigationOptions = {
    title: 'Losuj',
  };

  state = {
    myState: monika(),
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.text2}>"{this.state.myState}"</Text>
        </View>
        <View>
          <Button 
            title="Go Back"
            onPress={() => this.props.navigation.navigate('Monika')}
            />
        </View>
      </View>
    );
  }
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Anna: {
    screen: AnnaScreen,
  },
  AnnaLosuj: {
    screen: AnnaLosuj,
  },
  Maria: {
    screen: MariaScreen,
  },
  MariaLosuj: {
    screen: MariaLosuj,
  },
  Monika: {
    screen: MonikaScreen,
  },
  MonikaLosuj: {
    screen: MonikaLosuj,
  },
}, {
  initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);


let lista1 = [
  'Jak w świętą Annę deszcz pada, to robak orzechy zjada.',
  'Szczęśliwy, kto na świętą Annę upatrzy sobie pannę.',
  'Od świętej Anki chłodne wieczory i ranki.',
  'Na świętą Annę mrowiska, szukaj w zimie ogniska.',
  'Kto mieszkał z kobietą ten się w cyrku nie śmieje.',
];

let lista2 = [
  'Być kobietą to strasznie trudne zajęcie, bo polega głównie na zadawaniu się z mężczyznami.',
  'Kobieta miewa w oczach błyski stokroć wymowniejsze od słów.',
  'Serce kobiety jest niezgłębioną tajemnicą.',
  'Kobieta umie dochować tajemnicy. Tajemnicy swojego wieku.',
  'Kto mieszkał z kobietą ten się w cyrku nie śmieje.',
];

let lista3 = [
  'Kobieta bywa nieobliczalna, ale zawsze do pewnego stopnia.',
  'Kobieta jest najpiękniejszą ozdobą mężczyzny i najdroższą.',
  'Kobieta zmienną jest.',
  'Kobieta jest gotowa na wszystko.',
  'Kto mieszkał z kobietą ten się w cyrku nie śmieje.',
];

function anna(){
  let rand = lista1[Math.floor(Math.random()*lista1.length)];
  return rand;
}

function maria(){
  let rand = lista2[Math.floor(Math.random()*lista2.length)];
  return rand;
}

function monika(){
  let rand = lista3[Math.floor(Math.random()*lista3.length)];
  return rand;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  text2: {
    fontSize: 20,
    textAlign: 'center', 
    margin: 10,
  },
});

import React,{Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert} from 'react-native';

const currencyPerRupee = {
DOLLAR :	0.014,	
EURO :	0.013,	
BRIPOUND:	0.011,
AUSD:	0.020,	
CAD:	0.019,
SINGD:	0.019,	
SWISSFRANC:	0.014,	
MALRINGIT:	0.059,	
YEN:	1.566,			
};

export default class App extends Component {


  constructor(props){
    super(props);
    this.state = {
      inputValue:"",
      resultValue:"0.00"
    };
  }

  buttonPressed = currency => {
    if (this.state.inputValue === '') {
      Alert.alert('Please enter some value');
    }
    let result = (this.state.inputValue) * currencyPerRupee[currency];
    this.setState({resultValue: result.toFixed(2) });
  };

  render(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenview}>
        <View style={styles.resultcontainer}>
          <Text style={styles.resultValue}>
            {this.state.resultValue}
          </Text>
        </View>
        <View style={styles.inputcontainer}>
        <TextInput
        style={styles.input}
        keyboardType='number-pad'
        selectionColor='#FFF'
        placeholder='Enter Value'
        value={this.state.inputValue}
        onChangeText={inputValue=()=>{this.setState({inputValue})}}
        />
        </View>

        <View style={styles.convertercontainer}>
          <TouchableOpacity
          onPress={ () => this.buttonPressed('DOLLAR')} 
          style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>
              $
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={ () => this.buttonPressed('EURO')} 
          style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>
              Euro
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={ () => this.buttonPressed('BRITPOUND')} 
          style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>
              Pound
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={ () => this.buttonPressed('AUSD')} 
          style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>
              AusD
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={ () => this.buttonPressed('CAD')} 
          style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>
              Canadian
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={ () => this.buttonPressed('SINGD')} 
          style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>
              Singapore
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={ () => this.buttonPressed('SWISSFRANK')} 
          style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>
              Swiss
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={ () => this.buttonPressed('MALRINGIT')} 
          style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>
              Malasiya
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={ () => this.buttonPressed('YEN')} 
          style={styles.converterbutton}>
            <Text style={styles.converterbuttontext}>
              Yen
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#758AA2',
    alignItems: 'center',
    
  },
  resultcontainer:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#74B9FF',
    borderColor:'#c1c1c1',
    borderWidth:2,
    marginTop:180,
    height:70,
    width:400,
    borderRadius:5,
    marginLeft:6
  },
  resultValue:{
    fontSize:30,
    color:'white',
    fontWeight:'bold'
  },
  screenview:{
    
  },
  inputcontainer:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#74B9FF',
    borderColor:'#c1c1c1',
    borderWidth:2,
    marginTop:10,
    height:70,
    borderRadius:5
    
  },
  input:{
    fontSize:25,
    color:'white',
    fontWeight:'bold',
    justifyContent:'center',
  },
  convertercontainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:20,
    borderColor:'#c1c1c1',

  },
  converterbutton:{
    width:'33.3%',
    height:100,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#c1c1c1',
    borderWidth:1,
    backgroundColor: '#74B9FF',
    borderRadius:5
  },
  converterbuttontext:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff'
  }
});

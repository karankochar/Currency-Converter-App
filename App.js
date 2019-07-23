import React,{Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue:'',
      resultValue:'0.00'
    };
  }
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
      </View>
      
    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  resultcontainer:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#74B9FF',
    borderColor:'#c1c1c1',
    borderWidth:2,
    marginTop:60,
    height:70,
    width:400
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
    
  },
  input:{
    fontSize:25,
    color:'white',
    fontWeight:'bold',
    justifyContent:'center',
  }
});

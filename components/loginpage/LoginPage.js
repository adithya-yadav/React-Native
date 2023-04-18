import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';

const LoginPage = ({navigation}) => {
  const [inputState, setInputState] = React.useState({ name: "", password: "" })
  function onPressHandler() {
    console.warn(`name:${inputState.name} -- password:${inputState.password}`)
    navigation.navigate('Home',{name:`${inputState.name}`})
  }
  function userNameStateHandler(text) {
    const updatedState = {
      name: text,
      password: inputState.password
    }
    setInputState(updatedState)
  }
  function passwordStateHandler(text) {
    const updatedState = {
      name: inputState.name,
      password: text
    }
    setInputState(updatedState)
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground blurRadius={3} source={require("../../saved_pictures/loginAreo.jpeg")} style={styles.image} >
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputName}>USERNAME :</Text>
            <TextInput style={styles.inputBox} onChangeText={userNameStateHandler}></TextInput>
          </View>
          <View style={styles.input}>
            <Text style={styles.inputName}>PASSWORD :</Text>
            <TextInput style={styles.inputBox} secureTextEntry={true} onChangeText={passwordStateHandler}></TextInput>
          </View>
          <Text style={styles.forgot}>Forgot password ?</Text>
          <TouchableOpacity style={styles.signIn} onPress={onPressHandler}>
            <Text style={styles.signInText}>
              SIGN IN
            </Text>
          </TouchableOpacity>

          <View style={styles.line}>
            <View style={styles.endLine} />
            <View>
              <Text style={styles.lineText}>OR CONNECT WITH</Text>
            </View>
            <View style={styles.endLine} />
          </View>
          <TouchableOpacity style={{
            backgroundColor: "#3b5998", borderRadius: 30, marginVertical: 10,
            paddingHorizontal: 16,
            paddingVertical: 10,
          }} onPress={null}>
            <View style={styles.btnView}>
              <Image source={require("../../saved_pictures/fb.png")} style={styles.btnImg} />
              <Text style={styles.fgText}>SIGN WITH FACEBOOK</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{
            backgroundColor: "#DB4437", borderRadius: 30, marginVertical: 10,
            paddingHorizontal: 16,
            paddingVertical: 10,
          }} onPress={null}>
            <View style={styles.btnView}>
              <Image style={styles.btnImg} source={require("../../saved_pictures/google3.jpg")} />
              <Text style={styles.fgText}>SIGN WITH GOOGLE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, image: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  form: {
    backgroundColor: "transparent",
    flex: .8,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  input: {
    marginVertical: 16,
  },
  inputName: {
    color: "#ff8c00",
    fontSize: 15,
    fontWeight: 600
  },
  inputBox: {
    borderBottomWidth: 1,
    borderBottomColor: "#ff8c00",
    padding: 5
  },
  forgot: {
    color: "gray",
    fontWeight: "bold",
    fontSize:15,
    textDecorationLine: 'underline',
    textAlign: "center",
    marginVertical: 16
  },
  signIn: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#ff8c00"
  },
  signInText: {
    fontSize: 20,
    fontWeight: 600,
    color: "black",
    textAlign: "center"
  },
  btnView: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
  },
  btnImg: {
    height: 40,
    width: 40
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  endLine:
  {
    flex: .5,
    height: 1,
    backgroundColor: 'black'
  },
  lineText: {
    paddingVertical: 16,
    width: 150,
    textAlign: 'center'
  },
  fgText: {
    color: "white",
    fontWeight:"bold",
    fontSize:20,
    marginLeft:20
  }

});

export default LoginPage;
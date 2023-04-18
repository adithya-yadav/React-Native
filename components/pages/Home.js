import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Home({navigation,route}) {
    const {name} = route.params
    function playQuizHandler (){
        navigation.navigate('Quiz')
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello {name}</Text>
            <Button
                title="Go to About Page"
                onPress={() => navigation.push('About')}
            />
            <View style={styles.playQuizContainer}>
                <Text style={styles.playQuiz}>Play Qwiz</Text>
                <TouchableOpacity onPress={playQuizHandler}>
                    <Text style={styles.playbtn}>
                        Play
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    playQuizContainer:{
        marginTop:10 , 
        borderColor:"green" ,
        borderWidth:1 ,
        padding:40
    },
    playQuiz:{
        color:"red",
        fontSize:20,
        fontWeight:"bold",
        marginBottom:20
    },
    playbtn:{
        backgroundColor:"green",
        textAlign:"center",
        color:"white",
        padding:10,
        fontSize:20,
        fontWeight:"bold",
        borderRadius:10
    }
})

export default Home;
import React from 'react';
import { Button, Text, View } from 'react-native';

function Home({navigation,route}) {
    const {name} = route.params
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello {name}</Text>
            <Button
                title="Go to About Page"
                onPress={() => navigation.push('About')}
            />
        </View>
    );
}

export default Home;
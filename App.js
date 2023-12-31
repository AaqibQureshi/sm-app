import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from "./src/screens/WelcomeScreen/WelcomeScreen";
import {AppNavigator} from "./src/navigation/AppNavigator";

export default function App() {
    return (
        // <NavigationContainer>
            <View style={styles.container}>
              <AppNavigator />
                {/*<StatusBar style="auto" />*/}
            </View>
        // </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

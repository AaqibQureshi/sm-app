import { StatusBar } from 'expo-status-bar';
import {Image, ImageBackground, Text, View} from 'react-native';
import styles from "./styles";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export default function WelcomeScreen({navigation}) {
   const onPressGetStarted =()=>{
       navigation.navigate('SignInScreen')
   }
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode='cover' source={require('../../../assets/images/welcomeScreen.png')} style={styles.backgroundImage}>
                <View style={styles.bottomContainer}>
                    <Text style={styles.welcomeText}>Welcome !</Text>
                        <Text style={styles.subTitle}>Experience a wonderful moment with
                            <View style={styles.logoContainer}>
                                <Image source={require('../../../assets/images/ciao.png')} style={styles.logoImage} resizeMode={'contain'}/>
                            </View>
                        </Text>
                    <ButtonComponent title="Get Started" onPress={onPressGetStarted} />
                </View>
            </ImageBackground>
        </View>
    );
}


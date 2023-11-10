import {StyleSheet} from "react-native";
import {colors} from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    backgroundImage:{
        // flex:1,
        width:'100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    bottomContainer:{
        width:'100%',
        height: 280,
        backgroundColor: colors.PURPLE,
        justifyContent: 'space-evenly',
        // alignItems: "space-around",
        paddingHorizontal:50,
    },
    welcomeText:{
        fontSize: 36,
        fontWeight: 'bold',
        color: colors.WHITE,
        // textAlign: "justify"

    },
    logoContainer:{
        // backgroundColor:'red',
        alignItems: 'flex-start',
        justifyContent:'flex-start',
        width: 80,
        height: 20,

    },
    subTitle:{
        fontSize: 20,
        fontWeight: 'normal',
        color: colors.WHITE,
        lineHeight: 28,
        paddingEnd: 20,
    },
    logoImage:{
        width: '100%',
        height: '100%',
    },
});

export default styles;
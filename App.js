import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export default function App() {
    return (
        <View style={[styles.container]}>
            <View style={[styles.menuBar, styles.darkBlue]}>
                <View style={[styles.navBlock]}/>
                <View style={[styles.navBlock]}/>
                <View style={[styles.navBlock]}/>
            </View>


            <View style={[styles.bodyScreen]}>
                <View style={[styles.txtBlock, styles.center]}>
                    <Text style={styles.txt}>Some text</Text>
                </View>

                <TouchableOpacity style={[styles.bigButton, styles.darkBlue]}>
                    <Text style = {[styles.txt, styles.white]}>Button</Text>
                </TouchableOpacity>

                <View style={[styles.smallBtnBlock]}>
                    <TouchableOpacity style={[styles.smallButton, styles.darkBlue]}/>
                    <TouchableOpacity style={[styles.smallButton, styles.darkBlue]}/>
                </View>

            </View>


            <View style={[styles.menuBar, styles.darkBlue]}>
                <View style={[styles.navBlock]}/>
                <View style={[styles.navBlock]}/>
                <View style={[styles.navBlock]}/>
            </View>


            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2825BB',
        marginTop: 25
    },
    darkBlue: {
        backgroundColor: '#161137',
    },
    white:{
        color: '#FFFFFF'
    },
    menuBar: {
        paddingHorizontal: 45,
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bodyScreen: {
        flex: 10,
        alignItems: 'center',
    },
    navBlock: {
        height: 35,
        width: 70,
        backgroundColor: '#DCFC16',
        borderRadius: 5,
    },
    txtBlock: {
        marginTop: 56,
        height: 75,
        width: 300,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        fontSize: 30,
        lineHeight: 35,
    },
    bigButton:{
        height: 200,
        width: 200,
        borderRadius: 150,
        marginTop: 54,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallBtnBlock:{
        marginTop: 83,
        height: 100,
        width:300,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    smallButton:{
        height: 100,
        width: 100,
        borderRadius: 50,
    }

});

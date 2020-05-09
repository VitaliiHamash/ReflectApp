import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    cent:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 64,
        marginBottom: 48,
        },
    listContainer:{
        backgroundColor:'grey',
        padding:16
    },
    listText:{
        fontSize:30
    },
    container: {
        flex: 1,
        margin: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    foodInput: {
        fontSize: 32,
        marginBottom: 32,
        borderWidth: 1,
        padding: 8,
        width: '80%',
        borderRadius: 10,
    }
});
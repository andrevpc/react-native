import { StyleSheet } from 'react-native-web';

const styles = StyleSheet.create({
    centerDiv: {
        width: "100vw",
        display: "flex",
        justifyContent: "center"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        width: "60px",
        height: "60px",
        margin: "10px",
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    buttonDiv: {
        display: "flex",
        justifyContent: "space-evenly",
        width: "100vw"
    },
    square: {
        width: "80vw",
        height: "10vh",
        borderStyle: "solid",
        margin: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    displayedText: {
        fontSize: 30
    },
    numbers: {
        marginTop: "10px",
        display: "flex",
        flexWrap: "wrap",
        width: "70vw",
        justifyContent: "center",
    }
});

export default styles;
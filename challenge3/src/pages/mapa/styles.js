import { StyleSheet } from "react-native";

import { metrics } from "~/styles";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    annotationContainer: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 15
    },
    annotationFill: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#7159C1",
        transform: [
            {
                scale: 0.8
            }
        ]
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: metrics.baseRadius * 10
    },
    calloutContainer: {
        width: 100,
        height: 100,
        backgroundColor: "#FFF"
    }
});

export default styles;

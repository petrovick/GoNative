import { StyleSheet } from "react-native";
import { colors, general, metrics } from "~/styles";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkTransparent,
        flex: 1,
        justifyContent: "center"
    },
    contentContainer: {
        ...general.box
    },
    input: {
        alignSelf: "stretch",
        borderColor: colors.light,
        borderRadius: metrics.baseRadius,
        borderWidth: 1,
        color: colors.regular,
        fontSize: 16,
        marginBottom: metrics.baseMargin,
        padding: metrics.basePadding
    },
    buttonContainerView: {
        flexDirection: "row"
    },
    buttonContainer: {
        alignItems: "center",
        borderRadius: metrics.baseRadius,
        flex: 1,
        paddingVertical: metrics.basePadding * 1.5
    },
    cancel: {
        backgroundColor: colors.regular,
        marginRight: metrics.baseMargin
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "bold"
    },
    placeholder: {
        color: colors.light
    },
    save: {
        backgroundColor: colors.success
    }
});

export default styles;

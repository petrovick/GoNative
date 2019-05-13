import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
    margin: metrics.baseMargin,
    padding: metrics.basePadding,
    backgroundColor: colors.lighter,
    alignItems: 'center',
  },
  image: {
    width: 48,
    height: 48,
  },
  containerText: {
    flex: 1,
    marginHorizontal: metrics.baseMargin,
  },
  titleText: {
    fontSize: metrics.fontSizeUp,
    color: colors.darker,
  },
  loginText: {
    fontSize: metrics.fontSizeDown,
    color: colors.dark,
  },
  icon: {},
});

export default styles;

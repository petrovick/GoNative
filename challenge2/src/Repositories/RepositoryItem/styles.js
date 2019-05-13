import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: colors.lighter,
    marginTop: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin,
  },
  image: {
    width: 48,
    height: 48,
    justifyContent: 'flex-start',
  },
  boxReposDetails: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: metrics.baseMargin,
  },
  nameText: {
    fontSize: metrics.fontSizeUp,
    color: colors.darker,
  },
  loginText: {
    fontSize: metrics.fontSizeDown,
    color: colors.dark,
  },
  icon: {
    justifyContent: 'flex-end',
  },
});

export default styles;

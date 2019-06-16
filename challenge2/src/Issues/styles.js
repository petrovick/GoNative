import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: metrics.baseMargin,
    backgroundColor: colors.light,
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: metrics.baseMargin,
    backgroundColor: colors.regular,
  },
  button: {
    fontSize: 18,
    padding: metrics.basePadding,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.light,
  },
  boxSearch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: 40,
    backgroundColor: colors.white,
  },
  boxSearchInput: {
    flex: 1,
  },
  boxSearchButton: {
    justifyContent: 'flex-end',
    marginHorizontal: metrics.baseMargin * 2,
  },
});

export default styles;

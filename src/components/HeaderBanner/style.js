import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    margin: '10px 0 0',
  },
  back: {
    '&::before': {
      content: '"\\2190"',
      paddingRight: '10px',
    },
  },
  subtitle: {
    fontSize: 15,
    margin: '5px 0',
  },
}));

export default useStyles;

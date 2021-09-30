import { makeStyles, theme } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
  },
  productCard: {
    minWidth: 275,
    marginTop: theme.spacing(10),
  },
  productDesc: {
    marginTop: theme.spacing(2),
  }
}));

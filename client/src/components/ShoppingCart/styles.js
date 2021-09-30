import { makeStyles, theme } from '@material-ui/core/styles';
import { CenterFocusStrong, CenterFocusStrongSharp } from '@material-ui/icons';

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
  },

  Media: {
    paddingBottom: 20,
    paddingTop: 20,
    width: 100,
    height: 100
  },

  totalprice: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(1),
    textAlign: 'right'
  },

  BtnGrp: {
    textAlign: 'right'
  },

}));

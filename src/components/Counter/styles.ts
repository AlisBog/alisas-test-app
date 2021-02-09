import { createStyles, makeStyles } from '@material-ui/core';

const offsetHeight = '200px';

export const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      marginTop: '5rem'
    },
    row: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    value: {
      fontSize: '78px',
      paddingLeft: '16px',
      paddingRight: '16px',
      marginTop: '2px',
    },
    textbox: {
      fontSize: '32px',
      padding: '2px',
      width: '64px',
      textAlign: 'center',
      marginRight: '8px',
    }
  }),
);

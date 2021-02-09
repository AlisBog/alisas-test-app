import { createStyles, makeStyles } from '@material-ui/core';

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
    textbox: {
      fontSize: '14px',
      padding: '2px',
      width: '500px',
      textAlign: 'center',
    },
  }),
);

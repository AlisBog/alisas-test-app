export const muiTheme = {
  palette: {
    primary: {
      main: '#0038ed',
      light: '#e6ecff',
    },
    background: {
      default: '#50545e',
      paper: '#e8e9ed',
    },
    grey: {
      // darker background color
      A400: '#43464f',
      // grey text color
      A700: '#979797',
    },
    white: 'white',
  },
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#50545e',
        top: 'unset',
      },
    },
    MuiAccordion: {
      root: {
        backgroundColor: '#fff',
        boxShadow: 'none',
        '&$expanded': {
          margin: 0,
        },
        '&::before': {
          background: 'none',
        },
      },
    },
    MuiAccordionSummary: {
      root: {
        paddingLeft: '20px',
        '&$expanded': {
          backgroundColor: '#e6ecff',
        },
      },
      content: {
        order: 2,
      },
      expandIcon: {
        transform: 'rotate(-90deg)',
        '&$expanded': {
          transform: 'initial',
        },
      },
    },
    MuiAccordionDetails: {
      root: {
        display: 'block',
        padding: 0,
      },
    },
    MuiDialog: {
      root: {
        ScrollPaper: {
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'flex-end',
        },
      },
    },
    MuiTable: {
      root: {
        backgroundColor: '#50545e',
      },
    },
    MuiTableCell: {
      root: {
        border: 'none',
      },
    },
    MuiButton: {
      root: {
        borderRadius: '28.5px',
        padding: '.5rem 0',
        // fix for known issue https://github.com/mui-org/material-ui/issues/16307
        textTransform: 'initial' as never,
      },
    },
    MuiToolbar: {
      root: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    },
    MuiInputBase: {
      inputMultiline: {
        padding: '1px 0',
      },
    },
  },
  typography: {
    fontFamily: `"Nunito Sans", sans-serif`,
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
      lineHeight: 1.83,
    },
    h6: {
      fontWeight: 600,
    },
  },
};

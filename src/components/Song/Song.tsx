import React from 'react';
import { useDispatch, useSelector, connect} from 'react-redux';

import { loadSongs } from '../../store/state/actions';
import { ApplicationState, SongsState } from '../../store/state/types';

import Button from '@material-ui/core/Button';
import { useStyles } from './styles';



export function Song() {

  const dispatch = useDispatch();
  const classes = useStyles();

  const song = useSelector((appState: ApplicationState) => {
    return appState.songs.song
  })

  const loading = useSelector((appState: ApplicationState) => {
    return appState.songs.loading
  })

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <h3>David Bowie | Starman</h3>
      </div>
      <div className={classes.row}>
        <Button
          aria-label="get song"
          onClick={() => dispatch(loadSongs())}
        >
          Get Song
        </Button>
      </div>
      <div className={classes.row}>
        {loading ? 'loading ...' : 
          <div className={classes.textbox}>
            {song || '...'}
          </div>
        }
      </div>
    </div>
  );
};



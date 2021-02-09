import React, { useState } from 'react';
import { connect, useDispatch, useSelector} from 'react-redux';

import { 
  resetCounter,
  incrementCounter,
  decrementCounter 
} from '../../store/state/actions';
import { ApplicationState } from '../../store/state/types';

import Button from '@material-ui/core/Button';
import { useStyles } from './styles';


type CounterProps = {
  count: number
}

const Counter = ({count} : CounterProps) => {

  const dispatch = useDispatch();
  const classes = useStyles();
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <h3>Counter</h3>
      </div>
      <div className={classes.row}>              
        <span className={classes.value}>{count}</span>       
      </div>
      <div className={classes.row}>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(incrementCounter())}
        >
          +
        </Button>
        <Button
          onClick={() => dispatch(resetCounter())}
        >
          Reset
        </Button>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrementCounter())}
        >
          -
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state: ApplicationState) => ({
  count: state.count.count
});

export default connect(mapStateToProps)(Counter);


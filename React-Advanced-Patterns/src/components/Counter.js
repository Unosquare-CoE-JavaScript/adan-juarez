import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useActions } from '../hooks/use-action';
import { useCounter } from '../hooks/use-counter';
import { decrement, increment, set } from '../state/actions';
   
export const Counter = () => {
    const incident = 'Incident';
    //const count = useSelector((state) => state.count);
    const dispatch = useDispatch()

    // option with custom hook useCounter
const { count, increment, decrement, set } = useCounter()

return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => set(0)}>Reset</button>
        <button onClick={() => decrement()}>Decrement</button>
      </section>
    </main>
  )

    /* With custom hook */
    /*const actions = useActions({increment, decrement, set})
    return (
        <main className="Counter">
          <h1>Days Since Last {incident}</h1>
          <p className="count">{count}</p>
          <section className="controls">
            <button onClick={() => actions.increment()}>Increment</button>
            <button onClick={() => actions.set(0)}>Reset</button>
            <button onClick={() => actions.decrement()}>Decrement</button>
          </section>
        </main>
      );*/

    /* with bindingActionCreators option */
     //const actions = bindActionCreators({ increment, decrement, set}, dispatch)
   /* return (
        <main className="Counter">
          <h1>Days Since Last {incident}</h1>
          <p className="count">{count}</p>
          <section className="controls">
            <button onClick={() => actions.increment()}>Increment</button>
            <button onClick={() => actions.set(0)}>Reset</button>
            <button onClick={() => actions.decrement()}>Decrement</button>
          </section>
        </main>
      );*/
      /*
    return (
      <main className="Counter">
        <h1>Days Since Last {incident}</h1>
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(set(0))}>Reset</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </section>
      </main>
    );
    */
  };
  
  export default Counter;
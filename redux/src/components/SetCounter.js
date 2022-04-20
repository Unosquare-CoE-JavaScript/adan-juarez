import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { set } from '../state/actions';

export const SetCounter = () => {
    const countFromStore = useSelector(state => state.count)

    const [count, setCounter] = useState(countFromStore)
    const dispatch = useDispatch()

    useEffect(() => {
        setCounter(countFromStore)
    }, [countFromStore])

    return (
      <section className="controls">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(set(count))
          }}
        >
          <label htmlFor="set-to">Set Count</label>
          <input 
            id="set-to" 
            type="number" 
            value={count}
            onChange={(e) => setCounter(e.target.value)}
          />
          <input type="submit" />
        </form>
      </section>
    );
  };
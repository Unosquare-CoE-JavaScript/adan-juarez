import { createContext, useState, useEffect, useReducer } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

//action
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

// reducer
const userReducer = (state, action) => {
    console.log('dispatch')
    console.log(action)
    const { type, payload } = action;

    switch(type) {
        case  'SET_CURRENT_USER':
                return {
                    ...state,
                    currentUser: payload
                }
        case 'increment':
            return {
                value: state.value + 1
            }
        default: 
            throw new Error(`Unhandled type ${type} in userReducer`)
    }
}

export const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({ children }) => {
  //const [currentUser, setCurrentUser] = useState(null);
  const [  { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE);
  console.log(currentUser)
  
  const setCurrentUser = (user) => {
      dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
  }

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/* 
const userReducer = (state, action) => {
    return {

    }
}
*/
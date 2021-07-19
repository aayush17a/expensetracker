import React, {createContext,useReducer} from "react";
import AppReducer from "./AppReducer"

//initial state

const initialState = {
    transactions: [
       
    ] 
}

//create context
/*
“useContext” hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level. Context defined will be available to all the child components without involving “props”.




*/
export const GlobalContext = createContext(initialState);


//provider component
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    //Actions
    function deleteTrans(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTrans(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(<GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTrans,
            addTrans
        }}>
            {children}
        </GlobalContext.Provider>
    );
}


//reducer
/*
A reducer is basically a function which determines a change to an application’s state. It takes the help of an action by using it to receive and determine that particular change.
It carries an initial state and a reducer function as its arguments and then provides a state variable and a dispatch function to enable us to update the state. If you’re familiar with how Redux updates the store through reducers and actions, then you already know how useReducer works. And if not, then also we will learn about useReducer functionality in core.


*/
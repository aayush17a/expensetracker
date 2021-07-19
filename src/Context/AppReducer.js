export default (state,action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
                
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }    
        default:
            return state;
    }
}



//filterring the id to delete it
/*
 In addition, we need to use the filter function to create a new array of items which does not contain the item which was clicked. Then we have to call the setState() function to update the state.



*/
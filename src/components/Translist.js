import React, {useContext} from 'react';
import { GlobalContext } from '../Context/globalState';
import { Transaction } from './Transaction';

export const Translist = () => {
    const {transactions} = useContext(GlobalContext);
    

    return (
    <>
        <h3>History</h3>
        <ul className="list">
            {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} /> ))}
            
        </ul>
    </>
    )
}

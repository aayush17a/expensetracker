import React,{useContext} from 'react';
import { GlobalContext } from '../Context/globalState';


export const Transaction = ({ transaction }) => {
  const {deleteTrans} =  useContext(GlobalContext)
  const sign =  transaction.amount < 0 ? '-' : '+'; //if transaction amount is less than 0 then show - otherwise +
    return (
        
          <li className={transaction.amount < 0 ? 'minus' : 'plus'}> {transaction.text}
             <span>{sign}Rs.{Math.abs(transaction.amount)} </span><button onClick={() => deleteTrans(transaction.id) } className="delete-btn">x</button>
            </li>
          
    )
}

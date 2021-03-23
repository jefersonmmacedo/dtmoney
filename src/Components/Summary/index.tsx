import { Container } from "../Summary/styles";
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import totalImg from '../../assets/total.svg'
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary () {

    const {transactions} = useContext(TransactionsContext);

    const totalDeposit = transactions.reduce((acc, transaction) => {
        if (transaction.type == 'deposit') {
            return acc + transaction.amount;
        }

        return acc
    }, 0)

    const totalWithdraw = transactions.reduce((acc, transaction) => {
        if (transaction.type == 'withdraw') {
            return acc + transaction.amount
        }

        return acc
    }, 0)

    const summary = transactions.reduce((acc, transaction) => {
        if ( transaction.type == 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount
        }

        return acc

    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })
    
    return (
       <Container>
           <div>
               <header>
                   <p>Entradas</p>
                   <img src={incomeImg} alt="Entradas"/>
               </header>
               <strong>+ {new Intl.NumberFormat('po-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.deposits)}</strong>
           </div>

           <div>
               <header>
                   <p>Saídas</p>
                   <img src={outcomeImg} alt="Entradas"/>
               </header>
               <strong>- {new Intl.NumberFormat('po-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.withdraws)}</strong>
           </div>

           <div className="highlight-background">
               <header>
                   <p>Total</p>
                   <img src={totalImg} alt="Entradas"/>
               </header>
               <strong>{new Intl.NumberFormat('po-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.total)}</strong>
           </div>
       </Container>
    )
}
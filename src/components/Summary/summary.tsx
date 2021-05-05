import { useContext } from 'react';
import incomeSVG from '../../assets/income.svg'
import outcomeSVG from '../../assets/outcome.svg'
import totalSVG from '../../assets/total.svg'
import { useTransactions } from '../../contexts/useTransactions';
import { SummaryWrapper } from "./styles";


export function Summary(){
    const { transactions } = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {
      switch(transaction.type) {
        case "income": {
          acc.entries += transaction.value;
          acc.balance += transaction.value;
          break;
        }

        case "outcome": {
          acc.exits += transaction.value;
          acc.balance -= transaction.value;
          break;
        }
        default: {
          break;
        }
      }

      return acc;

    }, {
      entries: 0,
      exits: 0,
      balance: 0
    })

    return(
        <SummaryWrapper>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeSVG} alt="Entradas"/>
                </header>
                <strong>{new Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  }).format(summary.entries)}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeSVG} alt="Saidas"/>
                </header>
                <strong>- {new Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  }).format(summary.exits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saldo Atual</p>
                    <img src={totalSVG} alt="Saldo"/>
                </header>
                <strong>{new Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  }).format(summary.balance)}</strong>
            </div>
        </SummaryWrapper>
    )
}

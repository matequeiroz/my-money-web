import React, { useContext } from "react";
import { useTransactions } from "../../contexts/useTransactions";
import {
  TransactionsContent,
  TransactionsHeader,
  TransactionsWrapper,
} from "./styles";

export function Transactions() {
  const { transactions } = useTransactions();

  return (
    <TransactionsWrapper>
      <TransactionsHeader>
        <ul>
          <li>Titulo</li>
          <li>Valor</li>
          <li>Categoria</li>
          <li>Data</li>
        </ul>
      </TransactionsHeader>
      <TransactionsContent>
        <div className="content-header">
          <h2>Listagem</h2>
          <p>{transactions.length} itens</p>
        </div>
        {transactions.length > 0 ? (
          transactions.map((transaction) => {
            return (
              <>
                <div key={transaction.id} className="transaction-line">
                  <h4 className="title">{transaction.title}</h4>
                  <p
                    className={`value ${
                      transaction.type === "income" ? "income" : "outcome"
                    }`}
                  >
                    {new Intl.NumberFormat("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    }).format(transaction.value)}
                  </p>
                  <p className="category">{transaction.category}</p>
                  <p className="date">
                    {new Intl.DateTimeFormat("pt-br", {}).format(
                      new Date(transaction.createdAt)
                    )}
                  </p>
                </div>
                <div key={transaction.id} className="transaction-line mobile">
                  <div className="box">
                    <div className="box-header">
                      <h4 className="title">{transaction.title}</h4>
                      <p
                        className={`value ${
                          transaction.type === "income" ? "income" : "outcome"
                        }`}
                      >
                        {new Intl.NumberFormat("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        }).format(transaction.value)}
                      </p>
                    </div>
                    <div className="box-footer">
                      <p className="category">{transaction.category}</p>
                      <p className="date">
                        {new Intl.DateTimeFormat("pt-br", {}).format(
                          new Date(transaction.createdAt)
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <div className="transaction-line">Você não possui transações</div>
        )}
      </TransactionsContent>
    </TransactionsWrapper>
  );
}

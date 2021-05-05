import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import api from "../services/api";

interface Transaction {
  id: number;
  title: string;
  category: string;
  type: string;
  value: number;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createNewTransaction: (transaction: TransactionInput) => Promise<void>;
}
const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function createNewTransaction(transaction: TransactionInput) {
    const { data: newTransaction } = await api.post(
      "/transactions",
      transaction
    );

    setTransactions([...transactions, newTransaction.transaction]);
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}

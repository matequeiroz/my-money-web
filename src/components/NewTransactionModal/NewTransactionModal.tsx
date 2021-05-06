import { useFormik } from "formik";
import React, { useState } from "react";
import Modal from "react-modal";

import closeSvg from "../../assets/close.svg";
import incomeSvg from "../../assets/income.svg";
import outcomeSvg from "../../assets/outcome.svg";
import { useTransactions } from "../../contexts/useTransactions";
import {
  ButtonsTypesTransactionsContainer,
  NewTransactionModalWrapper,
} from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  closeModalFunc: () => void;
}

enum ITypeTransaction {
  income = "income",
  outcome = "outcome",
  default = ""
}

interface Transaction {
  title: string;
  value: number;
  category: string;
  type: ITypeTransaction;
}

export function NewTransactionModal({
  isOpen,
  closeModalFunc,
}: NewTransactionModalProps) {
  const { createNewTransaction } = useTransactions();

  const [typeTransaction, setTypeTransaction] = useState<ITypeTransaction>(ITypeTransaction.default);

  function handleTypeTransaction(type: ITypeTransaction): void {
    setTypeTransaction(type);
  }

  function clearDataOfModalNewTransaction() {
    setTypeTransaction(ITypeTransaction.default);
  }

  function closeModalNewTransaction() {
    closeModalFunc();
  }

  async function handleCreateNewTransaction({ category, title, value, type }: Transaction) {


    await createNewTransaction({ category, title, value, type });

    clearDataOfModalNewTransaction();

    closeModalNewTransaction();
  }

  const formik = useFormik<Transaction>({
    initialValues: {
      title: "",
      value: 0,
      category: "",
      type: ITypeTransaction.income,
    },
    onSubmit: (values: Transaction) => {
      values.type = typeTransaction;
      handleCreateNewTransaction(values);
    },
  });

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModalFunc}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <NewTransactionModalWrapper onSubmit={formik.handleSubmit}>
          <h2>Cadastrar transação</h2>
          <img
            src={closeSvg}
            alt="Close"
            className="btn-close"
            onClick={closeModalFunc}
          />
          <input
            placeholder="Titulo"
            type="text"
            name="title"
            onChange={formik.handleChange}
          />
          <input
            placeholder="Valor"
            name="value"
            type="number"
            onChange={formik.handleChange}
          />
          <ButtonsTypesTransactionsContainer>
            <button
              type="button"
              name="type"
              className={`income ${
                typeTransaction === "income" ? "active" : ""
              }`}
              onClick={() => handleTypeTransaction(ITypeTransaction.income)}
              onChange={formik.handleChange}
            >
              <img src={incomeSvg} alt="Entradas" />
              <span>Entrada</span>
            </button>
            <button
              type="button"
              name="type"
              className={`outcome ${
                typeTransaction === "outcome" ? "active" : ""
              }`}
              onClick={() => handleTypeTransaction(ITypeTransaction.outcome)}
              onChange={formik.handleChange}
            >
              <img src={outcomeSvg} alt="Saídas" />
              <span>Saída</span>
            </button>
          </ButtonsTypesTransactionsContainer>
          <select
            placeholder="Categoria"
            name="category"
            onChange={formik.handleChange}
          >
            <option defaultValue="Categoria">Categoria</option>
            <option value="Moradia">Moradia</option>
            <option value="Assinatura">Assinatura</option>
            <option value="Receita">Receita</option>
            <option value="Salário">Salário</option>
            <option value="Investimento">Investimento</option>
            <option value="Estudos">Estudos</option>
            <option value="Lazer">Lazer</option>
          </select>
          <button type="submit">Cadastrar</button>
        </NewTransactionModalWrapper>
      </Modal>
    </div>
  );
}

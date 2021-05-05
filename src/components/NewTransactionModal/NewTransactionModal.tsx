import { useFormik } from "formik";
import React, { FormEvent, useState } from "react";
import Modal from "react-modal";

import closeSvg from "../../assets/close.svg";
import incomeSvg from "../../assets/income.svg";
import outcomeSvg from "../../assets/outcome.svg";
import { useTransactions } from "../../contexts/useTransactions";
import api from "../../services/api";
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

  const [typeTransaction, setTypeTransaction] = useState("");

  function handleTypeTransaction(type: ITypeTransaction): void {
    setTypeTransaction(type);
  }

  function clearDataOfModalNewTransaction() {
    setTypeTransaction("");
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
      value: "",
      category: "",
      type: "",
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
            <option value="1">Moradia</option>
            <option value="2">Assinatura</option>
            <option value="3">Receita</option>
            <option value="4">Salário</option>
            <option value="5">Investimento</option>
            <option value="6">Estudos</option>
            <option value="7">Lazer</option>
          </select>
          <button type="submit">Cadastrar</button>
        </NewTransactionModalWrapper>
      </Modal>
    </div>
  );
}

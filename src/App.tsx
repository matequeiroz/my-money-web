import React, { useState } from "react";
import ReactModal from "react-modal";

import { Dashboard } from "./components/Dashboard/dashboard";
import { Header } from "./components/Header/header";
import { NewTransactionModal } from "./components/NewTransactionModal/NewTransactionModal";
import { TransactionsProvider } from "./contexts/useTransactions";

ReactModal.setAppElement("#root")

function App() {
  const [isOpenNewTransactionModal, setIsOpenNewTransactionModal] = useState(
    false
  );

  function handleOpenNewTransactionModal() {
    setIsOpenNewTransactionModal(!isOpenNewTransactionModal);
  }

  return (
    <TransactionsProvider>
      <Header onCloseNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal closeModalFunc={handleOpenNewTransactionModal} isOpen={isOpenNewTransactionModal} />
    </TransactionsProvider>
  );
}

export default App;

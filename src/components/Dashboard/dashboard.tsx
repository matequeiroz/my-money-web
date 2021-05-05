import React from "react";
import { Summary } from "../Summary/summary";
import { Transactions } from "../Transactions/transactions";

import { DashboardWapper } from "./styles";

export function Dashboard() {
  return (
    <DashboardWapper>
      <Summary />
      <Transactions />
    </DashboardWapper>
  );
}

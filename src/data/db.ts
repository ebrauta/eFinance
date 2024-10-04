export interface ITransaction {
  id: number;
  label: string;
  value: string;
  date: string;
  type: "receita" | "despesa";
}

const list: ITransaction[] = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: "300.90",
    date: "17/09/2024",
    type: "despesa",
  },
  {
    id: 2,
    label: "Pix Cliente",
    value: "100.00",
    date: "18/09/2024",
    type: "receita",
  },
  {
    id: 3,
    label: "Salário",
    value: "7500.00",
    date: "25/09/2024",
    type: "receita",
  },
  {
    id: 4,
    label: "Boleto conta água",
    value: "125.00",
    date: "25/09/2024",
    type: "despesa",
  },
  {
    id: 5,
    label: "Contas Streaming",
    value: "390.00",
    date: "25/09/2024",
    type: "despesa",
  },
];

export default list;

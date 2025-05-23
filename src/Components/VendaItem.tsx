import { NavLink } from "react-router-dom";
import { IVenda } from "../Context/DataContext";

export const VendaItem = ({ venda }: { venda: IVenda }) => {
  return (
    <div className="venda box">
      <NavLink to={`/vendas/${venda.id}`}>
          <h3>{venda.nome}</h3>
          <p style={{ fontFamily: "monospace" }}>
            {venda.id}
          </p>
      </NavLink>
      <p>{venda.preco.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })}</p>
    </div>
  );
};

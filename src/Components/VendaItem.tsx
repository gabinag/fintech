import { NavLink } from "react-router-dom";
import { IVenda } from "../Context/DataContext";

export const VendaItem = ({ venda }: { venda: IVenda }) => {
  return (
    <NavLink to={`/vendas/${venda.id}`} className="venda box">
      <div>
        <h3>{venda.nome}</h3>
        <p style={{ fontFamily: "monospace" }}>{venda.id}</p>
      </div>
      <p>
        {venda.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </NavLink>
  );
};

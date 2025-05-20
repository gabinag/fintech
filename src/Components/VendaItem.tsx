import { IVenda } from "../Context/DataContext";

export const VendaItem = ({ venda }: { venda: IVenda }) => {
  return (
    <div className="venda box">
      <a href="">
          <h3>{venda.nome}</h3>
          <p style={{ fontFamily: "monospace" }}>
            {venda.id}
          </p>
      </a>
      <p>{venda.preco.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })}</p>
    </div>
  );
};

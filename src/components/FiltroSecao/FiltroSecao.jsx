import PropTypes from "prop-types";
import { Fragment } from "react";
export const FiltroSecao = ({ secoes = [], onSelecionarSecao, index }) => {
  return (
    <Fragment>
      <div>
        <ul
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          {secoes.map((secao, index) => (
            <li key={index}>
              <button onClick={() => {}}>{secao.nome}</button>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

FiltroSecao.prototype = {
  onSelecionarSecao: PropTypes.func.isRequired,
  secoes: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string,
    })
  ),
};

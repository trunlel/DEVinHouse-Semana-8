import PropTypes from "prop-types";
import { Fragment } from "react";
import styles from "./FiltroSecao.module.css";

export const FiltroSecao = ({ secoes = [], onSelecionarSecao, index }) => {
  return (
    <Fragment>
      <div>
        <ul className={styles.filtroUl}>
          {secoes.map((secao, index) => (
            <li key={index}>
              <button
                className={styles.filtroButton}
                onClick={() => {
                  onSelecionarSecao(secao.nome);
                }}
              >
                {secao.nome}
              </button>
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

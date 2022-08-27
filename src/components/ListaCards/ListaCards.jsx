import PropTypes from "prop-types";

import { Card } from "@components";

import styles from "./ListaCards.module.css";
import { useState } from "react";

export const ListaCards = ({ produtos }) => {
  const [idSelecionados, setIdSeleciondos] = useState([]);

  const handleSelecionar = (idASelecionar) => {
    if (idSelecionados.includes(idASelecionar)) {
      setIdSeleciondos(idSelecionados.filter((id) => id !== idASelecionar));
    } else {
      setIdSeleciondos([...idSelecionados, idASelecionar]);
    }
  };
  return (
    <ul className={styles.lista}>
      {produtos.map((produto) => (
        <li className={styles.listaItem} key={produto.id}>
          <Card
            produto={produto}
            selecionado={idSelecionados.includes(produto.id)}
            onSelecionar={() => {
              handleSelecionar(produto.id);
            }}
          />
        </li>
      ))}
    </ul>
  );
};

ListaCards.propTypes = {
  produtos: PropTypes.array.isRequired,
};

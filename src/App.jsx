import { Footer, Header, Secao, FiltroSecao } from "@components";
import produtos from "@services/produtos.json";
import { Fragment } from "react";
import styles from "./App.module.css";

const subSecoesEntradas = new Set(produtos.entradas.map((p) => p.subSecao));
const subSecoesPrincipais = new Set(produtos.principais.map((p) => p.subSecao));

const secoes = [
  {
    nome: "Entradas",
    produtos: produtos.entradas,
    subSecoes: subSecoesEntradas,
  },
  {
    nome: "Principais",
    produtos: produtos.principais,
    subSecoes: subSecoesPrincipais,
  },
  { nome: "Sobremesas", produtos: produtos.sobremesas },
];

function App() {
  console.log(subSecoesEntradas, subSecoesPrincipais);
  const handleSelecionarSecao = (titulo) => {};

  return (
    <div className={styles.app}>
      <Header />
      <FiltroSecao secoes={secoes} onSelecionarSecao={handleSelecionarSecao} />
      <main className={styles.main}>
        {secoes.map((secao) => {
          return (
            <Fragment key={secao.nome}>
              <Secao
                nome={secao.nome}
                produtos={secao.produtos}
                subSecoes={secao.subSecoes && Array.from(secao.subSecoes)}
              />
            </Fragment>
          );
        })}
        {/* <Secao
          nome="Entradas"
          produtos={produtos.entradas}
          subSecoes={Array.from(subSecoesEntradas)}
        />

        <Secao
          nome="Principais"
          produtos={produtos.principais}
          subSecoes={Array.from(subSecoesPrincipais)}
        /> */}

        <Secao nome="Sobremesas" produtos={produtos.sobremesas} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

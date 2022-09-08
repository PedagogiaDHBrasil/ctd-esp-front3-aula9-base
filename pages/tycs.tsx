import { NextPage } from "next";
import React from "react";
import { TyC, TyCsAPIResponse } from "../types";
import styles from "../styles/TYC.module.css";
import Head from "next/head";

// Por enquanto estamos usando dados mockado, mas
// devemos substituir isso por informações da
// API

export const data: TyCsAPIResponse = {
  version: "3 de julho, 2022",
  tycs: [
    {
      id: 1,
      title: "Em geral",
      description: `Loja Gratuita é uma empresa que oferece serviços principalmente ligados ao comércio eletrônico.
                     Os serviços são projetados para formar um ecossistema que permite que as pessoas vendam,
                     comprar, pagar, enviar produtos e realizar outras atividades comerciais com tecnologia aplicada.`,
    },
  ],
};

const TermosCondicoes: NextPage = () => {
  if (!data) return null;

  const { version, tycs } = data;

  const renderTyc: (tyc: TyC) => JSX.Element = ({ id, description, title }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

  return (
    <div className={styles.tycContainer}>
      <Head>
        <title>Loja Gratuita - Termos e Condições</title>
        <meta
          name="description"
          content="Termos e condições da Loja Gratuita"
        />
      </Head>
      <h2>Termos e Condições</h2>
      <p>Versão: {version}</p>
      {tycs.map(renderTyc)}
    </div>
  );
};

// Aqui devemos adicionar o método para obter as informações
// da API

export default TermosCondicoes;

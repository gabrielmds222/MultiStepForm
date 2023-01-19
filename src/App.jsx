import React from "react";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form>
          <div className="actions">
            <button type="button">
              <ArrowLeft size={32} color="#802323" weight="duotone" />
              <span>Voltar</span>
            </button>
            <button type="submit">
              <span>Continuar</span>
              <ArrowRight size={32} color="#802323" weight="duotone" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

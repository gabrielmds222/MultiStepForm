import React from "react";

import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";

import { ArrowLeft, ArrowRight } from "phosphor-react";
import "./App.css";

import useForm from "./hooks/useForm";

function App() {
  const formComponents = [<StepOne />, <StepTwo />, <StepThree />];

  const { currentStep, currentComponent, changeStep } = useForm(formComponents);

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
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <ArrowLeft size={28} color="#000" />
              <span>Voltar</span>
            </button>
            <button type="submit">
              <span>Continuar</span>
              <ArrowRight size={28} color="#000" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

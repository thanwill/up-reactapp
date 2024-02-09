import { React } from "react";
import ErrorBoundary from '../components/ErrorBoundary/index';
import StepForm from '../components/StepForm/index';

function Cadastro() {

  return (
    <ErrorBoundary>        
        <StepForm/>
    </ErrorBoundary>
  );
}
export default Cadastro;

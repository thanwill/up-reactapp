import React from "react";
import Title from "../../components/Title/index.js";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o estado para que a próxima renderização mostre a UI de fallback.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Você também pode registrar o erro em um serviço de relatório de erros
    console.error("Erro capturado pelo Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className='text-center pt-5'>
          <img src={"./assets/image/imagem-break.png"} alt='' srcset='' />
          <Title
            title={"Ops, temos um probleminha aqui..."}
            classe={"text-center m-5"}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

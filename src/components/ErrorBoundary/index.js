import React from 'react';
import Title from "../../components/Title/index.js";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or send it to a logging service
    console.error(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="text-center pt-5">
        <img src={'./assets/image/imagem-break.png'} alt="Icone indicando moça trabalhando em um computador enquanto a página carrega." srcset="" />
        <Title title={'Ops, temos um probleminha aqui...'} classe={'text-center m-5'}/>
    </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

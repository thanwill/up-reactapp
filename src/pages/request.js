import { React } from "react";
import ErrorBoundary from "../components/ErrorBoundary/index";
import ChatRoom from "../components/ChatRoom/index";
import JsonPost from "../components/ChatRoom/JsonPost";

function Cadastro() {
  return (
    <ErrorBoundary>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-12 col-md-4 offset-md-1'>
            <ChatRoom />
          </div>
          <div className='col-12 col-md-4 offset-md-1'>
            <JsonPost />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
export default Cadastro;

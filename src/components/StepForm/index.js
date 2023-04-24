import "./stepform.css";
import { Form , Button} from "react-bootstrap";

export default function StepForm() {

    

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-6 offset-md-3 mt-5'>
          <h1>Formulário de Cadastro</h1>
            <Form>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type='text' placeholder='Digite seu nome' />
                </Form.Group>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Digite seu email' />
                </Form.Group>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type='password' placeholder='Digite sua senha' />
                </Form.Group>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Confirme sua senha</Form.Label>
                    <Form.Control type='password' placeholder='Confirme sua senha' />
                </Form.Group>
            </Form>

            <Button variant='primary' type='submit'>
                Cadastrar
            </Button>


        </div>
      </div>
    </div>
  );
}

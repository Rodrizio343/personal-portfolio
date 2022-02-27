import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import css from '../../Styles/Login.module.scss';
import cs from 'classnames';
import { Redirect } from 'react-router-dom';
import Title from '../Titlte';
import useLogin from '../../Hooks/useLogin';

export default function Login() {

  const { user, handleSubmit, isLoading } = useLogin();

  if(user._id) return <Redirect to="/" />

  return (
    <>
      <Title title={'Log in'} />
      <Form
        className={cs(
          "w-100 mb-5 mx-auto p-5 shadow-lg rounded-lg bg-white",
          css.formLogin
        )}
        onSubmit={handleSubmit}
      >
         <h3 className="mb-3">Log in</h3>
        <Form.Group controlId="email">
          <Form.Label className="text-muted">E-mail</Form.Label>
          <Form.Control type="email" name="email" required />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label className="text-muted mt-2">Password</Form.Label>
          <Form.Control type="password" name="password" required />
        </Form.Group>
        <div className='d-grid gap-2 mt-3'>
          <Button variant="success" type="submit" size='lg' disabled={isLoading} >
            {isLoading ? "Checking..." : "Log in"}
          </Button>        
        </div>
      </Form>
    </>
  )
}
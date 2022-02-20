import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { memo, useState } from "react";
import Title from "../Titlte";
import useForm from "../../Hooks/useForm";

function Contact() {
  const mutation = useForm();
  const [data, setData] = useState({ subject: "", name: "", user_email: "",  message: "" });
  const onChange = ({ target }) => {
    setData((d) => ({ ...d, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutateAsync(data);
  };

  return (
    <>
      <Title title="Contacto" />
      <Form
        style={{ width: "100%", maxWidth: "650px" }}
        onSubmit={handleSubmit}
      >
        <h1 className="mb-4 font-weight-bold">Contact me</h1>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Message subject"
            name="subject"
            disabled={mutation.isLoading}
            onChange={onChange}
            value={data.subject}
            autoFocus
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Your name"
            name="name"
            disabled={mutation.isLoading}
            onChange={onChange}
            value={data.name}
            autoFocus
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Your email"
            name="user_email"
            disabled={mutation.isLoading}
            onChange={onChange}
            value={data.user_email}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            as="textarea"
            placeholder="Your message"
            style={{ minHeight: "7rem" }}
            name="message"
            disabled={mutation.isLoading}
            onChange={onChange}
            value={data.message}
            required
          />
        </Form.Group>

        <Form.Group>
          <Button
            type="submit"
            variant="success"
            disabled={mutation.isLoading}
            block
          >
            {mutation.isLoading ? "Sending..." : "Send"}
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default memo(Contact);

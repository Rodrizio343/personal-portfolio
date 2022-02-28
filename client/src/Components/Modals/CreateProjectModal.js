import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { createProject } from "../../Helpers/requests";
import { useMutation } from "react-query";
import { blobToUrl } from "../../Helpers/utils";
import { WEB_TECHNOLOGIES } from "../../Config/config";
import { toast } from "react-toastify";

const label = { fontSize: "15px" };

export default function CreateProjectModal({ setProjects, ...args }) {
  const [validated, setValidated] = useState(false);
  const mutation = useMutation((data) => createProject(data));

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity() === false) {
      return e.stopPropagation();
    }

    setValidated(true);

    const fd = new FormData(form);
    blobToUrl(form.image.files[0], async (image) => {
      if (image) fd.set("image", image);
      try {
        const newProject = await mutation.mutateAsync(fd);
        setProjects((projects) => [newProject, ...projects]);
        toast.success("Project created");
      } catch (error) {
        toast.error("Error to create project");
        console.log(error);
      }
    });
  };
  return (
    <Modal {...args} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>New project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form validated={validated} onSubmit={handleSubmit} noValidate>
          <Form.Group controlId="title">
            <Form.Label style={label}>Title</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              name="title"
              placeholder="Project title"
              disabled={mutation.isLoading}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label style={label}>Description</Form.Label>
            <Form.Control
              size="sm"
              as="textarea"
              name="description"
              placeholder="Project description"
              disabled={mutation.isLoading}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label style={label} htmlFor="image">
              Choose project picture
            </Form.Label>
            <input
              accept="image/*"
              type="file"
              id="image"
              name="image"
              className="form-control form-control-sm custom-file"
              disabled={mutation.isLoading}
            />
          </Form.Group>

          <Form.Row>
            <Col>
              <Form.Group controlId="github">
                <Form.Label style={label}>GitHub link</Form.Label>
                <Form.Control
                  size="sm"
                  type="url"
                  name="github"
                  placeholder="Project GitHub"
                  disabled={mutation.isLoading}
                ></Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="link">
                <Form.Label style={label}>Demo link</Form.Label>
                <Form.Control
                  size="sm"
                  type="url"
                  name="link"
                  placeholder="Project demo"
                  disabled={mutation.isLoading}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Group controlId="technologies">
            <Form.Label style={label}>Technologies</Form.Label>
            <Form.Control
              size="sm"
              as="select"
              name="technologies"
              placeholder="Project technologies"
              style={{ height: "150px" }}
              disabled={mutation.isLoading}
              required
              multiple
            >
              {WEB_TECHNOLOGIES.map((op) => (
                <option key={op} value={op}>
                  {op}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Button
            variant="success"
            type="submit"
            disabled={mutation.isLoading}
            block
          >
            {mutation.isLoading ? "Creating project..." : "Create project"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

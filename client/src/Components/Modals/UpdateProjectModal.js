import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { updateProject } from "../../Helpers/requests";
import { useMutation } from "react-query";
import { blobToUrl } from "../../Helpers/utils";
import { WEB_TECHNOLOGIES } from "../../Config/config";
import { useState } from "react";
import { toast } from "react-toastify";

const label = { fontSize: "15px" };

export default function UpdateProjectModal({
  _id,
  title,
  description,
  github,
  link,
  technologies,
  image,
  setProjects,
  isVisibleUpdateModal,
  toggleUpdateModal,
}) {
  const mutation = useMutation((data) => updateProject(data));
  const [techno, setTechno] = useState(technologies);
  const onChange = (e) => {
    setTechno(
      [...e.target.options].filter((op) => op.selected).map((op) => op.value)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    blobToUrl(form.image.files[0], async (img) => {
      data.set("image", img || image);
      try {
        await mutation.mutateAsync({ _id, data });
        setProjects((projects) => {
          const editedValues = Object.fromEntries(data.entries());
          editedValues.technologies = techno;
          editedValues._id = _id;
          const copy = [...projects];
          let index = copy.findIndex((p) => p._id === _id);
          copy[index] = editedValues;
          return copy;
        });
        toast.success("Project updated");
      } catch (error) {
        toast.error("Error to update project");
        console.log(error);
      }
    });
  };
  return (
    <Modal
      show={isVisibleUpdateModal}
      onHide={toggleUpdateModal}
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Update project</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit} noValidate>
          <Form.Group controlId="title">
            <Form.Label style={label}>Título</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              name="title"
              placeholder="Project title"
              defaultValue={title}
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
              defaultValue={description}
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
                  defaultValue={github}
                  disabled={mutation.isLoading}
                  required
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
                  defaultValue={link}
                  disabled={mutation.isLoading}
                  required
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
              onChange={onChange}
              value={techno}
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
            {mutation.isLoading
              ? "Updating project..."
              : "Update project"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useMutation } from "react-query";
import { deleteProject } from "../../Helpers/requests";
import { toast } from "react-toastify";
import React from "react";

export default function DeleteProjectModal({
  id,
  isVisibleDeleteModal,
  toggleDeleteModal,
  title,
  setProjects,
}) {
  const mutation = useMutation((id) => deleteProject(id));

  const deleteProjectOnclick = async () => {
    try {
      await mutation.mutateAsync(id);
      toggleDeleteModal();
      toast.success("Project deleted");
      setProjects((projects) => {
        const projectsFilter = projects.filter((project) => project._id !== id);
        return projectsFilter;
      });
    } catch {
      toast.error("Error to delete project");
    }
  };

  return (
    <Modal
      show={isVisibleDeleteModal}
      onHide={toggleDeleteModal}
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="mb-3">
          <small>
            The project <strong>{title}</strong> will be deleted and this action is not reversible.
            <br />
            ¿Are you sure to delete this project?
          </small>
        </p>

        <Button
          variant="danger"
          onClick={deleteProjectOnclick}
          disabled={mutation.isLoading}
          block
        >
          {mutation.isLoading ? "Deleting..." : "Yes, i'm sure."}
        </Button>
      </Modal.Body>
    </Modal>
  );
}

import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";

const EditContact = ({
  showEditModal,
  handleEditClose,
  editedContact,
  saveChanges,
}) => {
  const [contact, setContact] = useState(editedContact);

  const handleInput = (e) => {
    let newObj = {
      ...contact,
      [e.target.name]: e.target.value,
    };
    console.log(newObj);
    setContact(newObj);
  };

  function saveEditedContact() {
    for (let i in contact) {
      if (contact[i] === "") {
        alert("Some inputs are empty!");
        return;
      }
    }
    // console.log(contact);
    saveChanges(contact);
  }

  return (
    <>
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="form">
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Name"
              value={contact.name}
              name="name"
              onChange={handleInput}
            />

            <FormControl
              size="lg"
              className="my-3"
              placeholder="Surname"
              value={contact.surname}
              name="surname"
              onChange={handleInput}
            />

            <FormControl
              size="lg"
              className="my-3"
              placeholder="Image"
              value={contact.phone}
              name="phone"
              onChange={handleInput}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveEditedContact}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditContact;

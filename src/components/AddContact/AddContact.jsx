import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";

const AddContact = ({ show, handleClose, addContact }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  function createContact() {
    let newContact = {
      name,
      surname,
      phone,
      id: Date.now(),
    };

    for (let i in newContact) {
      if (newContact[i] === "") {
        alert("Some inputs are empty!");
        return;
      }
    }

    addContact(newContact);

    setName("");
    setSurname("");
    setPhone("");

    handleClose();
  }

  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Contact
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="form">
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <FormControl
              size="lg"
              className="my-3"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <FormControl
              size="lg"
              className="my-3"
              type="number"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createContact}>
            Add Contact
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddContact;

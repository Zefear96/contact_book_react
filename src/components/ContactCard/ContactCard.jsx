import React from "react";
import { Card, Button } from "react-bootstrap";

const ContactCard = ({ item, getOneContact, deleteContact }) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="w-25 mx-5 mb-5">
        <div
          className="d-flex"
          style={{
            backgroundColor: "#1dc0ec",
          }}
        >
          <Card.Title className="my-3 ms-3">
            {item.name} {item.surname}
          </Card.Title>
        </div>

        <Card.Body
          style={{
            backgroundColor: "#1dc0ec",
          }}
        >
          <Card.Text>
            {item.phone} <br />
          </Card.Text>
          <Button
            variant="danger"
            className="mx-1"
            onClick={() => deleteContact(item.id)}
          >
            Delete
          </Button>
          <Button variant="warning" onClick={() => getOneContact(item.id)}>
            Edit
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ContactCard;

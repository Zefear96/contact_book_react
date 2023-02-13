import React from "react";
import ContactCard from "../ContactCard/ContactCard";

const ContactList = ({ contacts, getOneContact, deleteContact }) => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap w-75 my-5 mx-auto">
        {contacts?.map((item) => (
          <ContactCard
            key={item.id}
            item={item}
            getOneContact={getOneContact}
            deleteContact={deleteContact}
            contacts={contacts}
          />
        ))}
      </div>
    </>
  );
};

export default ContactList;

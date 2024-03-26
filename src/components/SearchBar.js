import React, { useState } from "react";
import ReactSearchBox from "react-search-box";
import { Modal, Button } from "react-bootstrap";

export function SearchBar({buttonName}) {
  const [showModal, setShowModal] = useState(false);

  const data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];

  const handleSearchCallback = (record) => {
    console.log(record);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        {buttonName}
      </Button>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-search"
      >
        <Modal.Body>
          <ReactSearchBox
            placeholder="Placeholder"
            value="Doe"
            data={data}
            callback={handleSearchCallback}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};


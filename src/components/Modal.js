import {
  Badge,
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import React from "react";

export default function CharacterModal({
  selectedCharacter: { name, image, status },
  isOpen,
  toggle,
}) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {name}
        <Badge pill>{status}</Badge>
      </ModalHeader>
      <ModalBody>
        <img src={image}></img>
      </ModalBody>
      <ModalFooter>
        <Button onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

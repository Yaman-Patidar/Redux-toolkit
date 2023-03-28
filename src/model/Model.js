import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM, DELETE_ITEM } from "../actions/actionType";

function ModelComponent(props) {
  const { show, setShow, stateHolder, setStateHolder } = props;
  const dispatch = useDispatch();

  const isUpdate = () => {
    dispatch({
      type: DELETE_ITEM,
      payload: { id: stateHolder.id },
    });
    dispatch({
      type: ADD_ITEM,
      payload: stateHolder,
    });
    setStateHolder({
      ...stateHolder,
      firstName: "",
      secondName: "",
    });
    setShow(false);
  };
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label>FirstName </Form.Label>
        <Form.Control
          type="text"
          value={stateHolder.firstName}
          onChange={(e) =>
            setStateHolder({
              ...stateHolder,
              firstName: e.target.value,
            })
          }
        />
        <Form.Label>LastName </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          value={stateHolder.secondName}
          onChange={(e) =>
            setStateHolder({
              ...stateHolder,
              secondName: e.target.value,
            })
          }
        />
        <Button className="m-2 text-center" type="submit" onClick={() => isUpdate()}>
          Submit
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default ModelComponent;

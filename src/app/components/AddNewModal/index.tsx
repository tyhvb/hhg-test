import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useDataTableSlice } from '../DataTable/slice';
import { useDispatch } from 'react-redux';

export const AddNewModal = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');

  const { actions } = useDataTableSlice();
  const dispatch = useDispatch();

  const handleShow = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler = () => {
    dispatch(actions.updateEmployee({ name, email, position }));
    setOpen(false);
    setName('');
    setEmail('');
    setPosition('');
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleShow}>
        + New
      </Button>

      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new employee</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column">
          <TextField
            className="mb-2"
            id="email"
            label="Email"
            onChange={event => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            className="mb-2"
            id="name"
            label="Name"
            onChange={event => {
              setName(event.target.value);
            }}
          />
          <TextField
            className="mb-2"
            id="position"
            label="Position"
            onChange={event => {
              setPosition(event.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="mr-3"
            variant="contained"
            color="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={submitHandler}
            disabled={!(name && email && position)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

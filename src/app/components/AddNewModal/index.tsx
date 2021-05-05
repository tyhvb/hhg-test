import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import { useDataTableSlice } from '../DataTable/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectDataTable } from '../DataTable/slice/selectors';
import { toast } from 'react-toastify';

interface AddNewModalProps {}

export const AddNewModal = (props: AddNewModalProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');

  const { actions } = useDataTableSlice();
  const dispatch = useDispatch();
  const dataState = useSelector(selectDataTable);

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

  useEffect(() => {
    const { updateEmployeeResult } = dataState;
    if (updateEmployeeResult) {
      toast.success('Add employee successfully');
      dispatch(actions.resetUpdateEmployeeResult());
    }
  }, [dataState, actions, dispatch]);

  return (
    <>
      <Button
        className="align-self-end mr-3"
        variant="contained"
        color="primary"
        onClick={handleShow}
      >
        + New
      </Button>

      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new employee</Modal.Title>
        </Modal.Header>
        <form
          onSubmit={e => {
            e.preventDefault();
            submitHandler();
          }}
        >
          <Modal.Body className="d-flex flex-column">
            <Input
              className="mb-2"
              id="email"
              placeholder="Email"
              type="email"
              onChange={event => {
                setEmail(event.target.value);
              }}
            />
            <Input
              className="mb-2"
              id="name"
              placeholder="Name"
              onChange={event => {
                setName(event.target.value);
              }}
            />
            <Input
              className="mb-2"
              id="position"
              placeholder="Position"
              onChange={event => {
                setPosition(event.target.value);
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="mr-3"
              type="submit"
              variant="contained"
              color="primary"
              disabled={!(name && email && position)}
            >
              Save Changes
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

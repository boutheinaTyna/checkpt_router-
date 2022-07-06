import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

function AddMovie(props) {
    const [show, setShow] = useState(false);
    const [newMovie, setNewMovie] = useState();

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);
    const handleChange = (e) => {
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value,
            id: Math.random(),
        });
    };
    const saveChanges = () => {
        props.setMovies([...props.movies, newMovie]);
        handleClose();
    };
    const handleSaveChanges = () => {
        // newMovie ? saveChanges() : alert("You cannot add an empty fileds");
        saveChanges();
    };
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add new movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onChange={(e) => handleChange(e)}>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                placeholder="title name"
                                autoFocus
                                isRequired
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Cover</Form.Label>
                            <Form.Control
                                type="text"
                                name="cover"
                                placeholder="add movie cover"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                name="category"
                                placeholder="exemple : Action, Drama, Comedy...."
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Rate</Form.Label>
                            <Form.Control
                                type="number"
                                name="rate"
                                min={1}
                                max={10}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Cast</Form.Label>
                            <Form.Control type="text" name="cast" autoFocus />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Release date</Form.Label>
                            <Form.Control
                                type="date"
                                name="release"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => handleSaveChanges()}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddMovie;


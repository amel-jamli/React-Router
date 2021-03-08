import React, { useState } from 'react'

import { Button, Modal, InputGroup, FormControl, Form } from 'react-bootstrap';

function Add({ handleAdd }) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [Year, setYear] = useState('');
    const [Image, setImage] = useState('');
    const [rate, setRate] = useState('');

    const addMovie = () => {
        return (
            handleAdd({ title, Image, Year, rate }),
            setShow(false),
            setTitle(""),
            setYear(""),
            setImage(""),
            setRate("")
        )
    }

    return (
        <>

            <Button id="btnAdd" variant="success" onClick={() => setShow(true)}>
                Add  Movie
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                sise="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add New Film
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Movie name</Form.Label>
                        <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image</Form.Label>
                        <Form.Control value={Image} onChange={(e) => setImage(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="moviedescription">
                        <Form.Label>Year</Form.Label>
                        <Form.Control value={Year} onChange={(e) => setYear(e.target.value)} />
                    </Form.Group>





                    <Form.Group>
                        <Form.Label>rate</Form.Label>
                        
                        <div className="stars">
                            <input class="star star-5" id="star-5" type="radio" value="5" name="star" onChange={(e) => setRate(e.target.value)} />
                            <label class="star star-5" for="star-5"></label>
                            <input class="star star-4" id="star-4" type="radio" value="4" name="star" onChange={(e) => setRate(e.target.value)} />
                            <label class="star star-4" for="star-4"></label>
                            <input class="star star-3" id="star-3" type="radio" value="3" name="star" onChange={(e) => setRate(e.target.value)} />
                            <label class="star star-3" for="star-3"></label>
                            <input class="star star-2" id="star-2" type="radio" value="2" name="star" onChange={(e) => setRate(e.target.value)} />
                            <label class="star star-2" for="star-2"></label>
                            <input class="star star-1" id="star-1" type="radio" value="1" name="star" onChange={(e) => setRate(e.target.value)} />
                            <label class="star star-1" for="star-1"></label>
                        </div>
                    </Form.Group>


                    <Button className="btn" variant="success" type="submit" className="mr-2" onClick={addMovie}>
                        Add
                    </Button>



                </Modal.Body>
            </Modal>
        </>
    )
}

export default Add

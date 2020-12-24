import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";

const AddMovie = ({ addMovies }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [genre, setGenre] = useState("");
  const [poster, setPoster] = useState("");
  const [trailer, setTrailer] = useState("");
  const [rate, setRate] = useState("");
  const [id, setId] = useState(uuid);
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovies(title, date, genre, poster, trailer, rate, id, description);
    setTitle("");
    setDate("");
    setGenre("");
    setPoster("");
    setTrailer("");
    setRate("");
    setShow(false);
    setId();
    setDescription("");
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            Got a new movie?
            <br />
            Add it here!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mBody">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type={Number}
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="genre"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <input
            type="text"
            placeholder="Poster Link"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
          />
          <input
            type="text"
            placeholder="Trailer"
            value={trailer}
            onChange={(e) => setTrailer(e.target.value)}
          />
          <input
            type="number"
            placeholder="Rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
          <input
            type="text"
            id="description"
            placeholder="Movie Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;

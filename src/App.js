import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';



function App() {

  return (
    <>
      <MainSection />
      <ListingSection />

    </>
  );
}

function ListingSection() {
  return (
    <div class="album py-5 bg-body-tertiary">
      <div class="container">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              <div class="card-body">
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small class="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function MainSection() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    console.log('inside handleSubmit method');
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <>
      <main>
        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Public Restrooms Search</h1>
              <p class="lead text-body-secondary">Search, Add public restrooms in your city!!</p>
              <p>
                <Button variant="primary" onClick={handleShow}>
                  Add Restrooms
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Enter Restroom details in the form below.</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>


                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                          We'll send you a confirmation email when this restroom details are added. we'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formLandmark">
                        <Form.Label>Landmark</Form.Label>
                        <Form.Control type="text" placeholder="Landmark" />
                      </Form.Group>

                      <fieldset>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label as="legend" column sm={2}>
                            Gender
                          </Form.Label>
                          <Col sm={10}>
                            <Form.Check
                              label="Male"
                              name="group1"
                              type="radio"
                              id="gender"
                            />
                            <Form.Check
                              label="Female"
                              name="group1"
                              type="radio"
                              id="gender"
                            />
                          </Col>
                        </Form.Group>
                      </fieldset>

                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>

                  </Modal.Body>
                  <Modal.Footer>
                  </Modal.Footer>
                </Modal>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>

  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}


function AddRestroomModal() {
  return (
    <div class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

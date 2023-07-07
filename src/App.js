import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button, Col, Form, Modal, Row, Table } from 'react-bootstrap';



function App() {

  return (
    <>
      <MainSection />
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

  const [formData, setFormData] = useState({
    email: '',
    restroomName: '',
    address: '',
    landmark: '',
    gender: ''
  });

  const [formList, setFormList] = useState([]);



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    console.log('inside handleSubmit method');
    event.preventDefault();

    setFormList([...formList, formData]);

    setFormData({
      email: '',
      restroomName: '',
      address: '',
      landmark: '',
      gender: ''
    });

    handleClose();

    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    console.log(formList); // Log the selected gender value

  };

  const handleDelete = (index) => {
    const newCopyList = [...formList];
    console.log('Delete clicked ' + index);
    newCopyList.splice(index, 1);
    console.log('newCopyList' + newCopyList);
    setFormList(newCopyList);
  }

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
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Your email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
                        <Form.Text className="text-muted">
                          We'll send you a confirmation email when this restroom details are added. we'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="restroomName">
                        <Form.Label>Restroom Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" name="restroomName" value={formData.restroomName} onChange={handleChange} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" name="address" value={formData.address} onChange={handleChange} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="landmark">
                        <Form.Label>Landmark</Form.Label>
                        <Form.Control type="text" placeholder="Landmark" name="landmark" value={formData.landmark} onChange={handleChange} />
                      </Form.Group>

                      <fieldset>
                        <Form.Group as={Row} className="mb-3" controlId="gender">
                          <Form.Label as="legend" column sm={2}>
                            Gender
                          </Form.Label>
                          <Col sm={10}>
                            <Form.Check
                              label="Male"
                              name="gender"
                              value="male"
                              type="radio"
                              id="gender"
                              checked={formData.gender === 'male'}
                              onChange={handleChange}

                            />
                            <Form.Check
                              label="Female"
                              name="gender"
                              type="radio"
                              value="female"
                              id="gender"
                              checked={formData.gender === 'female'}
                              onChange={handleChange}
                            />
                            <Form.Check
                              label="Other"
                              name="gender"
                              type="radio"
                              value="other"
                              id="gender"
                              checked={formData.gender === 'other'}
                              onChange={handleChange}
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

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>index </th>
            <th>email</th>
            <th>Restroom Name</th>
            <th>Address</th>
            <th>Landmark</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {formList.map((item, index) =>
            <tr>
              <td>{index}</td>
              <td>{item.email}</td>
              <td>{item.restroomName}</td>
              <td>{item.address}</td>
              <td>{item.landmark}</td>
              <td>{item.gender}</td>
              <td>
                <Button onClick={() => handleDelete(index)} >Delete</Button>
                <Button  >Edit</Button>

                </td>
                
            </tr>
          )}
        </tbody>
      </Table>
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

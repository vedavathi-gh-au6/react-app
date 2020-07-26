import React, { Component, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";


const Login = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      console.log(formData);
      let res = await axios.post("/api/upload", formData);
      setError(false);
      handleClose();
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  
  return (
    <>
      <button className="btn btn-primary m-2" onClick={handleShow}>
        {" "}
        Login
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              
               <label htmlFor="desc">email </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                value={email}
                className="form-control"
                required
                id="email"
              />
               <label htmlFor="desc">Password </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                className="form-control"
                required
                id="password"
              />
            </div>

            
            <button type="submit" className="btn btn-primary">
              Submit
            </button>

            {error ? (
              <div className="text-danger">
                {" "}
                Some error occured uploading the file{" "}
              </div>
            ) : null}
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
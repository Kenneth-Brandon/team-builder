import React, { useState, useEffect } from "react";
import "../App.css";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  margin: 3rem auto;
  border: 1px solid black;
  background: orange;
  display: flex;
  justify-content: center;
`;

const Label = styled.label`
  margin: 0 auto;
  padding: 1.5rem;
  display: inline-flex;
  font-size: 1.5rem;
`;

const Input = styled.input`
  border: 1px solid black;
  font-size: 1.5rem;
`;

const Select = styled.select`
  border: 1px solid black;
  font-size: 1.5rem;
`;

function Forms({ addMember, memberToEdit, setMemberToEdit, editMember }) {
  const [newMember, setNewMember] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    phoneNumber: "",
    role: "",
    isHappy: false
  });

  const inputHandler = event => {
    let value =
      event.target.name !== "isHappy"
        ? event.target.value
        : event.target.checked;

    setNewMember({
      ...newMember,
      [event.target.name]: value,
      isEditing: true
    });
  };

  useEffect(() => {
    setNewMember(memberToEdit);
  }, [memberToEdit]);

  const submitForm = event => {
    event.preventDefault();
    memberToEdit.isEditing ? editMember(newMember) : addMember(newMember);

    // reset newMember object
    setNewMember({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      email: "",
      phoneNumber: "",
      role: "",
      isHappy: false
    });
    // reset memberToEdit object
    setMemberToEdit({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      email: "",
      phoneNumber: "",
      role: "",
      isHappy: false,
      isEditing: false
    });
  };

  return (
    <div className="member-form">
      <Form onSubmit={submitForm}>
        <section>
          <Label htmlFor="fname">First name: </Label>
          <Input
            onChange={inputHandler}
            type="text"
            value={newMember.firstName}
            name="firstName"
            id="fname"
            placeholder="Enter Your First Name"
            required
          />
        </section>

        <section>
          <Label htmlFor="lname">Last name: </Label>
          <Input
            onChange={inputHandler}
            type="text"
            value={newMember.lastName}
            name="lastName"
            id="lname"
            placeholder="Enter Your Last Name"
            required
          />
        </section>

        <section>
          <Label htmlFor="age">Age: </Label>
          <Input
            onChange={inputHandler}
            type="number"
            value={newMember.age}
            name="age"
            id="age"
            placeholder="Enter Your Age"
            required
          />
        </section>

        <section id="gender-select">
          <Label htmlFor="gender">Gender: </Label>
          <Select
            onChange={inputHandler}
            value={newMember.gender}
            name="gender"
            id="gender"
            required
          >
            <option>Male</option>
            <option>Female</option>
          </Select>
        </section>

        <section>
          <Label htmlFor="email">Email: </Label>
          <Input
            onChange={inputHandler}
            type="email"
            value={newMember.email}
            name="email"
            id="email"
            placeholder="Enter Your Email"
            required
          />
        </section>

        <section>
          <Label htmlFor="phoneNumber">Phone number: </Label>
          <Input
            onChange={inputHandler}
            type="tel"
            value={newMember.phoneNumber}
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Enter Your Phone Number"
            required
          />
        </section>

        <section>
          <Label htmlFor="role">Role: </Label>
          <Input
            onChange={inputHandler}
            type="text"
            value={newMember.role}
            name="role"
            id="role"
            placeholder="Enter Your Role"
            required
          />
        </section>

        <section className="checkbox">
          <Label htmlFor="isHappy">Happy with your job?</Label>
          <Input
            onChange={inputHandler}
            type="checkbox"
            checked={newMember.isHappy}
            name="isHappy"
            id="isHappy"
          />
          <p id="notHappy">{newMember.isHappy ? "Yes" : "No"}</p>
        </section>

        <button type="submit" id="submit-btn">
          Submit
        </button>
      </Form>
    </div>
  );
}

export default Forms;

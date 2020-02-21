import React from "react";
import "../App.css";
import styled from "styled-components";

export default function MemberCard({ member, setMemberToEdit, index }) {
  return (
    <div className="member-card" key={index}>
      <p>
        <span>Full Name: </span>
        {member.firstName} {member.lastName}
      </p>

      <p>
        <span>Age: </span>
        {member.age}
      </p>

      <p>
        <span>Gender: </span>
        {member.gender === "Female" ? "Female" : "Male"}
      </p>

      <p>
        <span>Email: </span>
        {member.email}
      </p>

      <p>
        <span>Phone Number: </span>
        {member.phoneNumber}
      </p>

      <p>
        <span>Role: </span>
        {member.role}
      </p>

      <p>
        <span>{member.gender === "Female" ? "She" : "He"}</span>{" "}
        {member.isHappy ? "is" : "is not"} Happy with the job.
      </p>

      <div onClick={() => setMemberToEdit(member)} className="edit-btn">
        Edit
      </div>
    </div>
  );
}

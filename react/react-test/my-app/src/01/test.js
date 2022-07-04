import React, {Component} from "react";
import {Button, Form} from "react-bootstrap";
 
const BoardRegister: React = () => {
  return (
    <Form>
      <Form.Group controlId="titleInput">
        <Form.Label>제목</Form.Label>
        <Form.Control required type="email" placeholder="" />
      </Form.Group>
      <Form.Group controlId="contentText">
        <Form.Label>내용</Form.Label>
        <Form.Control required as="textarea" rows={20} />
      </Form.Group>
      <Button variant="primary" type="submit">
        저장
      </Button>
    </Form>
  );
};

export default Test;


import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { api } from '../service/api';

export default function FormCar(){

  async function submit(event){
      event.preventDefault();

      let body = {
        "id": Math.floor(Math.random() * 100000).toString(),
        "pilotName": event.target.elements[0].value,
        "numberCar":event.target.elements[1].value,
        "modelCar": event.target.elements[2].value,
        "timeInRace": event.target.elements[3].value
      }

      let response = await api.post("/items", body);
      
      if(response.status == 200){
        alert("Registrado com sucesso")
      }  else {
        alert("Houve algum problema no seu registro,  favor entrar em contato com o suporte")
      }
  }

    return (
    <Container>
      <Form onSubmit={submit}>
        <Form.Group controlId="form.PilotName">
            <Form.Label>Nome Do Piloto</Form.Label>
            <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="form.NumberCar">
            <Form.Label>Numeração do Carro</Form.Label>
            <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="form.ModelCAr">
            <Form.Label>Modelo do Carro</Form.Label>
            <Form.Control type="text"/>
        </Form.Group>
        <Form.Group controlId="form.Time">
            <Form.Label>Tempo na corrida(min:seg)</Form.Label>
            <Form.Control type="text"/>
        </Form.Group>
        <Form.Group>
        <Button type='submit'>Enviar Informações</Button>
        </Form.Group>
      </Form>
    </Container>
    );

}

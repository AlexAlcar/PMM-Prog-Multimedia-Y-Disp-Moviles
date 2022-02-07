import React, { useState } from 'react'
import {Form, Input, Button,} from 'antd-mobile'


export default () => {
  const [nombre, setNombre]=useState("");
  const [correo, setCorreo]=useState("");
  const [pass, setPass]=useState("");
  const onFinish = () => {
    //validamos:
    if(/\d/.test(nombre))alert("El nombre no puede contener números ni estar vacío");
    else if(!correo.includes("@")) alert("Debes introducir un correo válido");
    else alert("ok");
  }
  return (
    <>
      <Form  onFinish={onFinish} footer={<Button block type='submit' color='primary' size='large' >Enviar</Button>} >
        <Form.Header>Formulario</Form.Header>
        <Form.Item name='nombre' label='Nombre: ' rules={[{ required: true, message: 'Debe escribir un nombre' }]} >
          <Input placeholder='Escriba su nombre' onChange={(e)=>setNombre(e)} />
        </Form.Item >

        <Form.Item name='email' label='Correo electrónico'  rules={[{ required: true, message: 'Debe escribir un correo' }]}>
          <Input placeholder='Introduzca su dirección de correo' onChange={(e)=>setCorreo(e)} />
        </Form.Item>

        <Form.Item name='pass' label='Contraseña'  rules={[{ required: true, message: 'Debe escribir una contraseña' }]}>
          <Input placeholder='Introduzca su contraseña' onChange={(e)=>setPass(e)} />
        </Form.Item>
      </Form>
    </>
  )
}
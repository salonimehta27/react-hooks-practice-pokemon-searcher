import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  })

  function handleOnChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const bodyData = {
    name: formData.name,
    hp: formData.hp,
    sprites: {
      front: formData.frontUrl,
      back: formData.backUrl
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/pokemon", {
      method: "Post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(bodyData)
    }).then(resp => resp.json())
      .then(data => onAdd(data))
    setFormData({
      ...formData,
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    })
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleOnChange} />

          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleOnChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleOnChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {
  Container,
  Grid,
  NativeSelect,
  FormControl,
  Input
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TableList from "../src/Components/Table";

function App() {

  const rows = [
    createData(1, 159, 1, 24, 183),
    createData(2, 89, 2, 5, 84),
    createData(3, 800, 4, 10, 8)
  ];

  const [state, setState] = useState({
    number1: 0,
    number2: 0,
    sign: 1,
    output: 0,
    rows: rows
  });

  const handleChange = (event) => {
    console.log(event.target);
    console.log("name- " + event.target.name + " value- " + event.target.value)
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    Calc();
  };

  useEffect(() => {
    console.log('I am called');
    //SetNumbers();
  }, []);

  const SetNumbers = () => {
    axios({
      'method': 'GET',
      'url': "https://cors-anywhere.herokuapp.com/http://www.randomnumberapi.com/api/v1.0/random?min=1&max=1000&count=2",
      'headers': { "Access-Control-Allow-Origin": "http://localhost:3000" },
      'params': {
        'min': 1,
        'max': 1000,
        'count': 2
      }
    })
      .then((response) => {
        console.log("get Random Numbers" + response.data);
        setState({
          ...state,
          number1: response.data[0],
          number2: response.data[1]
        });
      })
      .catch((error) => {
        console.log(error)
      })

    console.log("check1")
    Calc(state.sign);
  }

  const Calc = (value) => {
    console.log(state)
    let output = 0;
    switch (value) {
      case 1:
        output = (state.number1 + state.number2);
        break;
      case 2:
        output = (state.number1 - state.number2);
        break;
      case 3:
        output = (state.number1 * state.number2);
        break;
      case 4:
        output = (state.number1 / state.number2);
        break;
      default:
        break;
    }
    setState({
      ...state,
      output: output
    });
  }

  const updateRow = () => {
    localStorage.setItem('myData', createData(localStorage.length + 1, state.number1,
      state.sign, state.number2, state.output))
  }

  function createData(id, number1, sign, number2, output) {
    let sign1 = switchSign(sign);
    console.log(id + " , " + number1 + " , " + sign1 + " , " + number2 + " , " + output)
    return { id, number1, sign1, number2, output };
  }

  function switchSign(sign) {
    switch (sign) {
      case 1:
        return "+";
      case 2:
        return "-";
      case 3:
        return "x";
      case 4:
        return ":";
      default:
        break;
    }
  }

  return (
    <div style={{ marginTop: 20, padding: 30 }}>

      <Grid container justify="center">

        <form style={{ width: "50%" }}>


          <FormControl>
            <Input id="number1" type="text" value={state.number1} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <NativeSelect
              name="sign"
              onChange={handleChange}
              value={state.sign}
              inputProps={{ 'sign-id': 'sign' }}>
              <option value={0}></option>
              <option value={1}>+</option>
              <option value={2}>-</option>
              <option value={3}>x</option>
              <option value={4}>:</option>
            </NativeSelect>
          </FormControl>

          <FormControl>
            <Input id="number2" type="text" value={state.number2} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <Input id="output" value={state.output} />
          </FormControl>

          <Button variant="contained" color="primary" size="medium" onClick={SetNumbers}>
            Request
          </Button>

          <Button variant="contained" color="primary" size="medium" onClick={updateRow}>
            Send
          </Button>
        </form>

        <br /><br /><br />

        <Container maxWidth="sm">
          <TableList list={rows} />
        </Container>

      </Grid>

    </div>

  )
}

export default App;
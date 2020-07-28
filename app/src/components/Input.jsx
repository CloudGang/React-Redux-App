import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardTitle, CardSubtitle, InputGroup, InputGroupAddon, Input, Button, CardBody  } from 'reactstrap';

const NewCoin = () => {

  const [coin, setCoin] = useState({

    coinText: "",
    rate: null

  })

  const handleChanges = e => {

    console.log("handleChanges: " + e.target.value)
    setCoin({...coin, coinText: e.target.value})

  }

  const clearForm = e => {

    setCoin({...coin, coinText: "", rate: null})

  }

  const fetchPrice = e => {

    e.preventDefault()

    axios

      .get(`https://api.coindesk.com/v1/bpi/currentprice/${coin.coinText}.json`)

      .then(res => {

        console.log("Axios Result: " + JSON.stringify(res.data.bpi.USD.rate))
        setCoin({...coin, rate: res.data.bpi.USD.rate})

      })

      .catch(err => console.log(err))

  }

  return(

    <div>

      <InputGroup>

        <InputGroupAddon addonType="prepend">

          <Button
            className="RESET"
            onClick={clearForm}>
            Reset
          </Button>

        </InputGroupAddon>

        <Input
          type="text"
          value={coin.coinText}
          placeholder="Enter Bitcoin Acronym"
          onChange={handleChanges}
        />

        <InputGroupAddon addonType="append">

          <Button 
            color="success" 
            onChange={handleChanges} 
            onClick={fetchPrice}>
            Get Current Rate
          </Button>

        </InputGroupAddon>
        
      </InputGroup>

    <Card>

      <CardBody>

        <CardTitle>Currency: {coin.coinText}</CardTitle>
        <CardSubtitle>Price: ${coin.rate}</CardSubtitle>

      </CardBody>

  </Card>
  
  </div>

  )

}

export default NewCoin;
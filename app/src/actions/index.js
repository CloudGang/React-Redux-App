import axios from 'axios';

export const FETCHING_PRICE_START = "FETCHING_PRICE_START"
export const FETCHING_PRICE_SUCCESS = "FETCHING_PRICE_SUCCESS"
export const FETCHING_PRICE_FAILURE = "FETCHING_PRICE_FAILURE"

export const getPrice = () => {
  return dispatchEvent => {
    dispatchEvent({ 
      type: FETCHING_PRICE_START 
    });
    axios
      .get(`https://api.coindesk.com/v1/bpi/currentprice/BTC.json`)
      .then(res => {
        console.log(res.data)
        dispatchEvent({ 
          type: FETCHING_PRICE_SUCCESS,
          payload: res.data 
        })
      })
      .catch(err => {
        console.log(err)
        dispatchEvent({ 
          type: FETCHING_PRICE_FAILURE,
          payload: err.response 
        })
      })
  }
}
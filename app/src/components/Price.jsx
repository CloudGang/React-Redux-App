import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { getPrice } from '../actions';
import Loader from 'react-loader-spinner';

const Price = props => {

  return (

    <div>

      <h1>BITCOIN in USD</h1>

      {!props.rate && props.isLoading && (

        <h2>Fetching BTC Data!</h2>

      )}

      {props.isLoading && (

        <Loader
        type="Audio"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
        />

      )}

      <p>   

        <Button color="primary" onClick={props.getPrice}>BTC: Console</Button>

      </p>

      {

        props.rate 
          && 
        !props.loading 
          && 

        <div>

          <h2>{`${props.rate} = $ ${props.rate}`}</h2>

        </div>

      }

    </div>

  )

}

const mapStateToProps = state => {

  console.log(state);

  return{

    isLoading: state.isLoading,
    rate: state.rate,
    error: state.error

  }
}

export default connect(

  mapStateToProps, 
  { getPrice }
  
)(Price);
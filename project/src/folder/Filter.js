import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import StarRatingComponent from "react-star-rating-component";
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar';



const Filter = (props) => {
  return (
    <Navbar sticky="bottom" bg="light" variant="light">
    <FormControl type="text" placeholder="Search" style={{width:"20vw"}} onChange={e => props.onUpdateTitle(e.target.value)} className="mr-sm-1" />
    <StarRatingComponent name="movieRatingFilter" onStarClick={(value)=>props.onUpdateRating(value)}/>
 </Navbar>

);
  
};
export default Filter;

import React from 'react'
import cricket from '../assets/cricket.jpg';
import hockey from '../assets/hockey.jpg';
import swimming from '../assets/swimming.jpg';
import tennisball from '../assets/tennis.jpg';
import football from '../assets/football.jpg';
import baseball from '../assets/baseball.jpg';
import basketball from '../assets/basketball.jpg';
 const Sport  = (props) =>{

    let image = "";
    switch(props.name){
        case "Cricket":
            image = cricket;
            break;
            case "Hockey":
            image = hockey;
            break;
            case "Swimming":
            image = swimming;
            break;
            case "Tennis Ball":
            image = tennisball;
            break;
            case "Foot Ball":
            image = football;
            break;
            case "BaseBall":
            image = baseball;
            break;
            case "Basket Ball":
                image = basketball;
                break;
            default:
                image = "";
    }
    let cover = {
        backgroundImage:'url(' + image + ')'
    }
    console.log("the value of image is ", image);
     return(
<div className="sport-container">
          <div className="sport-image" style={cover}></div>
     <p className="sport-title">{props.name}</p>
          <p className="sport-year">{props.year}</p>
        </div>
     );
 }
 export default Sport;
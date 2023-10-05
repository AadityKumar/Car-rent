import React, { useEffect, useState } from 'react';
import jsonData from './data.json'
import { useParams, BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import { GoPeople } from 'react-icons/go'
import { BiGasPump } from 'react-icons/bi'
import { IoMdSpeedometer, IoIosPricetags } from 'react-icons/io'
import { GiSteeringWheel, GiCalendarHalfYear } from 'react-icons/gi'
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md'
// import { IoIosPricetags } from 'react-icons/im'
import './detail.scss'
import Form from './Form'

const Detail = () => {
     const {id} = useParams(); // Get ID from URL parameter
    const [specificItem, setSpecificItem] = useState([]);

  useEffect(() => {
    // Find the object with the given ID from the imported JSON data
    const itemm = jsonData.carData.find(item => item.id === parseInt(id));

            // Set the specificItem state with the found object
            if (itemm) {
                setSpecificItem(itemm);
    } else {
                // Handle not found scenario
                setSpecificItem(null);
                return <h3>User not found</h3>
    }
  }, [id]);

  const history = useHistory();
  const submit = () => {
    // Navigate to CarDetail component with car id as a route parameter
    history.push('/form');
    <Form />
  };
            return (
            <div className='details'>
                <div className='top'>
                  <h1>Car Details</h1>
                  <img src={specificItem.image}/>
                </div>
                   

                   <div className='car-details'>
                    <ul>
                            <i> <li><MdOutlineDriveFileRenameOutline style={{ color: "#8EACCD" }} />{specificItem.name}</li> </i>
                            <i> <li><GiCalendarHalfYear style={{ color: "#8EACCD" }} /> {specificItem.year}</li> </i>
                            <i> <li><GoPeople style={{ color: "#8EACCD" }} /> {specificItem.people}</li> </i>
                            <i>  <li><BiGasPump style={{ color: "#8EACCD" }} /> {specificItem.mode}</li> </i>
                            <i> <li><GiSteeringWheel style={{ color: "#8EACCD" }} /> {specificItem.driving}</li> </i>
                            <i> <li><IoMdSpeedometer style={{ color: "#8EACCD" }} /> {specificItem.milage}</li> </i>
                            <i> <li> {specificItem.des}</li> </i>
                            <i> <li><IoIosPricetags style={{ color: "#8EACCD" }} /> {specificItem.price}</li> </i>
                    </ul>
                    <Link to="/form">
                      <button onClick={submit}>Click</button>
                    </Link>
                </div> 

            {/* <div className='tac'>
                <p>
                    Welcome to Car Dekho, your trusted destination for hassle-free car rentals! 
                    These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to comply with these terms and conditions.
                     Please read them carefully. Our car rental services are available to individuals who possess a valid driver's license and are at least 25 years old. 
                    By engaging in a rental transaction with us, you confirm that the information provided during the booking process is accurate and complete
                </p>
            </div> */}
        </div>
    );
}

export default Detail;
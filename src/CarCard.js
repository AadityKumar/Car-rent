import React from 'react';
import './CarCard.scss';
import { useHistory } from 'react-router-dom';
import { GoPeople } from 'react-icons/go'
import { BiGasPump } from 'react-icons/bi'
import { IoMdSpeedometer } from 'react-icons/io'
import { GiSteeringWheel } from 'react-icons/gi'
import { BiLike } from 'react-icons/bi'
import Detail from './Detail';

const CarCard = ({ car }) => {

    const history = useHistory();
    const showDetail = () => {
        // Navigate to CarDetail component with car id as a route parameter
        history.push(`/car/${car.id}`);
        <Detail />
    };

    return (
        <div className="car-card">
            <img src={car.image} />
            <div className='name-year'>
                <h2>{car.name}</h2>
                <p>{car.year}</p>
            </div>

            <div className='icon'>
                <div className='icon-item'>
                    <GoPeople style={{ color: "blue" }} />
                    <p>{car.people} people</p>
                </div>
                <div className='icon-item'>
                    <BiGasPump style={{ color: "blue" }} />
                    <p>{car.mode} </p>
                </div>
            </div>

            <div className='icon'>
                <div className='icon-item'>
                    <IoMdSpeedometer style={{ color: "blue" }} />
                    <p>{car.milage} </p>
                </div>
                <div className='icon-item'>
                    <GiSteeringWheel style={{ color: "blue" }} />
                    <p>{car.driving} </p>
                </div>
            </div>

            <hr></hr>

            <div className='price-rent'>
                <i><p><b>{car.price}</b>/month</p></i>
                <button className='bot'>
                    <BiLike style={{ marginRight: "1px" }} />
                </button>

                <button onClick={showDetail}>Rent now</button>
                {/* <button><a href='/page/10'>Rent now</a></button> */}
            </div>






        </div>
    );
};

export default CarCard;
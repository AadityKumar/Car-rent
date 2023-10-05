import React,{useState,useEffect} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { CiSearch } from 'react-icons/ci'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { CDropdown, CDropdownItem, CDropdownToggle,CDropdownMenu } from '@coreui/react';

import './Header.scss'

const Header = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    useEffect(() => {
        })
    const options = [{ name: 'Honda', url: "/page/2" }, { name: 'Toyota', url: "/page/3" }, { name: 'Ford', url: "/page/4" },
        { name: 'Audi', url: "/page/5" }, { name: 'BMW', url: "/page/6" }, { name: 'Mercedes', url: "/page/7" }, { name: 'Lamborgini', url: "/page/8" }, { name: 'Ferrari', url: "/page/9" }, { name: 'McLaren', url: "/page/10" }];
   
    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };
    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };
    return (
        <div className="Header">
            <div className="search">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="dropdown">
                <button onClick={toggleDropdown1} className="dropdown-button">
                    <b>Relevance <RiArrowDropDownLine /></b>
                </button>
                {isOpen1 && (
                    <ul className="dropdown-menu">
                        {options.map((option, index) => (
                            <li key={index}>
                                <a href={option.url}>{option.name}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="dropdown">
                <button onClick={toggleDropdown2} className="dropdown-button">
                    
                    <b>All Brands <RiArrowDropDownLine /></b>
                </button>
                {isOpen2 && (
                    <ul className="dropdown-menu">
                        {options.map((option, index) => (
                            <li key={index}>
                                <a href={option.url}>{option.name}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Header;
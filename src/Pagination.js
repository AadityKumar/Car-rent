import Reac,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Pagination.css';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi'

const Pagination = ({ currentPage, totalPages }) => {
    // const [num,setNum]=useState('');
    const [res, setRes] = useState('');
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
    const carItems= 6 * parseFloat(currentPage);
    useEffect(()=>{
        setRes(carItems)
    })
    // setRes(carItems);

    return (
        <div className="pagination">
            <div className='item'>
            <b>{res} from 60</b>
            </div>
            <div>
                {currentPage > 0 && <button ><Link to={`/page/${currentPage - 1}`}><HiArrowSmLeft/></Link></button>}
            {pages.map((page) => (
                <Link key={page} to={`/page/${page}`} className={page === currentPage ? 'active' : ''}>
                    <button><b>{page}</b></button>
                </Link>
            ))}
                {currentPage < totalPages && <button><Link to={`/page/${currentPage + 1}`}><HiArrowSmRight/></Link></button>}
            </div>
        </div>
    );
};

export default Pagination; 
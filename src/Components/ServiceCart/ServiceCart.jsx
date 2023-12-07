
import { Link } from 'react-router-dom';
import './ServiceCart.css'
import Button from '../Button/Button';

const ServiceCart = ({item}) => {
    const {tilte , discription} = item
    return (
        <div className='container'>
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <img src="https://image.flaticon.com/icons/svg/681/681611.svg" alt="" />
                        <h3 className='text-white text-lg'>{tilte}</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>{discription}</p>

                        <Button title={'Read More'} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;
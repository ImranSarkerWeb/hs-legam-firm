import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = ({img,name,fb,lin,number,email}) => {
    return (
        <div className="card__collection clear-fix">
            {/* <div className="cards cards--two">
                <img src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80" className="img-responsive" alt="Cards Image" />
                <span className="cards--two__rect"></span>
                <span className="cards--two__tri"></span>
                <p>Lucy Grace</p>
                <ul className="cards__list">
                    <li><i className="fab fa-facebook-f"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-instagram"></i></li>
                    <li><i className="fab fa-linkedin-in"></i></li>
                </ul>
            </div> */}
            <div className="cards cards--three">
                <img src={img} className="img-responsive" alt="" />
                <span className="cards--three__rect-1">
                    <span className="shadow-1"></span>
                    <p>{name}</p>
                </span>
                <span className="cards--three__rect-2">
                    <span className="shadow-2"></span>
                </span>
                <span className="cards--three__circle"></span>
                <ul className="cards--three__list">
                    <li><Link to={fb}><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link to={`https://wa.me/${number}`} target='_blank'><i className="fab fa-whatsapp"></i></Link></li>
                    {/* <li><Link to={lin} ><i className="fab fa-linkedin-in"></i></Link></li> */}
                    <li><Link to={`mailto:${email}`}  target='_blank'><i className="fa-solid fa-envelope"></i></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Cart;
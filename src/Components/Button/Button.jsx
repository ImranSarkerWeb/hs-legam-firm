import { Link } from 'react-router-dom';
import './Button.css'
const Button = ({ href, title }) => {
  return (
    <nav>
      <ul>
        <li className='mx-auto'>
          <Link to={href}>{title}</Link>
          {/* {title} */}
          <span></span><span></span><span></span><span></span>
        </li>
      </ul>
    </nav>
  );
};

export default Button;
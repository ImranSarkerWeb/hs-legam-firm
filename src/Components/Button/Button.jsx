import { Link } from 'react-router-dom';
import './Button.css'
const Button = ({ href, title }) => {
  return (
    <div className="button-container-1">
      <span className="mas">{title}</span>
      <button id='work' type="button" name="Hover">
        <Link to={href}>{title}</Link>
      </button>
    </div>
  );
};

export default Button;
import './Header.css';
import iconSun from '../../../assets/iconSun.svg';

export const Header = () => {
  return (
    <div className="header">
      <h1>T O D O</h1>
      <div className="toggle_mode">
        <button>
          <img src={iconSun} alt="lightmode" />
        </button>
      </div>
    </div>
  );
};

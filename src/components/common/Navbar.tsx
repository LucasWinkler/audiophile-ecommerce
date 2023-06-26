import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/headphones'>Headphones</Link>
        </li>
        <li>
          <Link to='/speakers'>Speakers</Link>
        </li>
        <li>
          <Link to='/earphones'>Earphones</Link>
        </li>
      </ul>
    </nav>
  );
}

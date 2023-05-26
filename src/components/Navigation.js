import { NavLink } from 'react-router-dom';
import '../index.css';
// import { Fa500Px } from 'react-icons/fa';

const Navigation = () => {
  const myLinks = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Categories', path: '/categories' },
  ];

  return (
    <header>
      <nav className="nav">
        <h1 className="title">Bookstore CMS</h1>
        <ul className="ul">
          {myLinks.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
        <div className="person">{/* <Fa500Px /> */}</div>
      </nav>
    </header>
  );
};

export default Navigation;

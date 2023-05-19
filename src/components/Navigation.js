import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const myLinks = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Categories', path: '/categories' },
  ];

  return (
    <header>
      <nav>
        <ul>
          {myLinks.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

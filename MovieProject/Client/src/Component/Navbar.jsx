import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      style={{
        width: '90%',
        margin: '20px auto',
        backgroundColor: '#1E293B', // dark navy blue (Tailwind's slate-800)
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: '26px',
            fontWeight: '700',
            letterSpacing: '1px',
            color: '#2dd4bf', // teal-400
          }}
        >
          <h2>Movies</h2>
        </div>

        {/* Navigation Links */}
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '70%',
            fontSize: '17px',
            fontWeight: '500',
            color: '#ffffff',
            listStyle: 'none',
          }}
        >
          <li>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.color = '#2dd4bf')}
              onMouseOut={(e) => (e.target.style.color = 'white')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/add-movie"
              style={{
                color: 'white',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.color = '#2dd4bf')}
              onMouseOut={(e) => (e.target.style.color = 'white')}
            >
              Add Movie
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              style={{
                color: 'white',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.color = '#2dd4bf')}
              onMouseOut={(e) => (e.target.style.color = 'white')}
            >
              All Movie
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              style={{
                color: 'white',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.color = '#2dd4bf')}
              onMouseOut={(e) => (e.target.style.color = 'white')}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              style={{
                color: 'white',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.color = '#2dd4bf')}
              onMouseOut={(e) => (e.target.style.color = 'white')}
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

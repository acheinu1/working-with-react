import React from 'react';

function Header() {
  return (
    <div>
      <div className='myheader'>
        <h1>this is my header</h1>
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>book</li>
          <li>footer</li>
        </ul>
      </div>
      <div className='about'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          voluptatem?
        </p>
      </div>
      <div className='formone'>
        <form>
          <label htmlFor='name'>Name:</label> <input type='text' />
          <label htmlFor='name'>Name:</label> <input type='text' />
          <label htmlFor='name'>Name:</label> <input type='text' />
          <button>submit</button>
        </form>
      </div>
      <div className='footer'>
        <p>this is a footer</p>
      </div>
    </div>
  );
}

export default Header;

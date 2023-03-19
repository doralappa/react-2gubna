import React, { useState } from 'react';

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, sePass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name"> Full Name </label>
        <input value={name} name="name" id="name" placeholder="Full Name" />
        <label htmlFor="email">email</label>
        <input
          value={email}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password"> password </label>
        <input
          value={pass}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
        {' '}
        Already have an account? Login here!{' '}
      </button>
    </div>
  );
};

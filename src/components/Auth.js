import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/AuthReducer';
import { useState } from 'react';

const Auth = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = (event) => {
    event.preventDefault();

    // Simulate an API call to get a token and user ID
    const token = 'dummy-token-123'; // You would get this from an API
    const userId = 'user-12345'; // You would get this from an API

    dispatch(authActions.login({ token, userId }));
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App({ signOut, user }) {
  const [joke, setjoke] = useState('Loading');
  const httpGetJoke = async () => {
    axios
      .get(`https://api.chucknorris.io/jokes/random`)
      .then((response) => setjoke(response.data.value));
  };

  useEffect(() => {
    console.log('on mount');
    httpGetJoke();
  }, []);

  if (!user) {
    return (
      <div className="error">
        <h1>You should be log in dear sir or madam</h1>
      </div>
    );
  }
  if (user) {
    return (
      <div className="chuck-area">
        <h1>This is where chuck goes</h1>
        <p>{joke}</p>
        <button onClick={httpGetJoke}>new joke</button>
        <button onClick={signOut}> sign out</button>
      </div>
    );
  }
}

export default withAuthenticator(App);

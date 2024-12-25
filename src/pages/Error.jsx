import React from 'react';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/not-found.svg';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  if (error.status == 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>ohh!</h3>
          <p>we cant seem to find page you are looking for</p>
          <Link to="/">back Home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>Something went wrong!</h3>
      </div>
    </Wrapper>
  );
};

export default Error;

import { useEffect, useContext } from 'react';
import GithubContext from '../context/github/GithubContex';
import { useParams } from 'react-router-dom';

const User = () => {
   const { getUser, user } = useContext(GithubContext);
   const params = useParams();
   useEffect(() => {
      getUser(params.login);
   }, []);
   return <div>{user.login}</div>;
};

export default User;

import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';
const Home = props => {
   return (
      <div>
         <h1 className='text-6xl mb-4'>Welcome</h1>
         <UserSearch />
         <UserResults />
      </div>
   );
};

export default Home;

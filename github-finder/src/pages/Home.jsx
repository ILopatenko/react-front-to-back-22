import UserResults from '../components/users/UserResults';
const Home = props => {
   return (
      <div>
         <h1 className='text-6xl mb-4'>Welcome</h1>
         {/* TODO: SEARCH COMPONENT */}
         <UserResults />
      </div>
   );
};

export default Home;

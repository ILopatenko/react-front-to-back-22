import { useEffect, useContext } from 'react';
import GithubContext from '../context/github/GithubContex';
import { useParams } from 'react-router-dom';
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Spinner from '../components/layout/Spinner';
const User = () => {
   const { getUser, user, loading } = useContext(GithubContext);
   const params = useParams();
   const {
      login,
      avatar_url,
      html_url,
      type,
      name,
      blog,
      location,
      hireable,
      bio,
      twitter_username,
      public_repos,
      public_gists,
      followers,
      following,
   } = user;

   useEffect(() => {
      getUser(params.login);
   }, []);
   if (loading) return <Spinner />;
   return (
      <>
         <div className='w-full mx-auto lg:w-10/12'>
            <div className='mb-4'>
               <Link to='/' className='btn btn-ghost'>
                  Back to Search
               </Link>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-3 lg:grig-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
               <div className='custom-card-image mb-6 md:mb-0'>
                  <div className='rounded-lg shadow-xl card image-full'>
                     <figure>
                        <img src={avatar_url} alt='' />
                     </figure>
                     <div className='card-body justify-end'>
                        <h2 className='card-title mb-0'>{login}</h2>
                     </div>
                  </div>
               </div>
               <div className='col-span-2'>
                  <div className='mb-6'>
                     <h1 className='text-3xl card-title'>
                        {name}
                        <div className='ml-2 mr-1 badge badge-success'>{type}</div>
                        {hireable && <div className='mx-1 badge badge-info'>Hireable</div>}
                     </h1>
                     <p>{bio}</p>
                     <div className='mt-4 card-actions'>
                        <a
                           href={html_url}
                           target='_blank'
                           rel='noreffer'
                           className='btn btn-otline'
                        >
                           Visit GitHub Profile
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default User;

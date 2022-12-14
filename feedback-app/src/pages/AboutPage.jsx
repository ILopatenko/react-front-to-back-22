import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';
const AboutPage = () => {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>
          This is a ReactJS app to leave feedback for products or
          servers
        </p>
        <p>Version 1.0.0</p>
        <p>
          <Link to='/'>Back to Home page</Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;

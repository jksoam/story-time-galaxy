
import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirect to the feed page as our main landing page
  return <Navigate to="/" replace />;
};

export default Index;

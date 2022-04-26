
import { useEffect, useState } from 'react';
import { Sugar } from 'react-preloaders2';
import Body from './Body';


function App() {
  const [loading, setLoading] = useState(true);
  const handleLoading = () => {
    setLoading(false);
  }
  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, [])
  return (
    <>
      <Body />
      <Sugar customLoading={loading} color={'#54B689'} />
    </>

  );
}

export default App;

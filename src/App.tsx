
import { useEffect, useState } from 'react';
import { Sugar } from 'react-preloaders2';
import Body from './Body';


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, [])
  return (
    <>
      <Body />
      <Sugar customLoading={loading} color={'#54B689'} />
    </>

  );
}

export default App;

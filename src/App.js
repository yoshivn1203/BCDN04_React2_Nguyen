import { useState } from 'react';
import Header from './components/Header';
import Model from './components/Model';
import GlassesList from './components/GlassesList';

function App() {
  const [selectedGlasses, setSelectedGlasses] = useState({});

  return (
    <>
      <Header />
      <Model selectedGlasses={selectedGlasses} />
      <GlassesList onChangeGlasses={(glasses) => setSelectedGlasses(glasses)} />
    </>
  );
}

export default App;

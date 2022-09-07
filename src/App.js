import { useState } from 'react';
import Header from './components/Header';
import Model from './components/Model';
import GlassesList from './components/GlassesList';

function App() {
  const [selectedGlasses, setSelectedGlasses] = useState({});
  const ChangeGlassesHandler = (glasses) => {
    setSelectedGlasses(glasses);
  };

  return (
    <>
      <Header />
      <Model selectedGlasses={selectedGlasses} />
      <GlassesList onChangeGlasses={ChangeGlassesHandler} />
    </>
  );
}

export default App;

import { useState } from 'react';
import Header from './components/Header';
import Model from './components/Model';
import GlassesList from './components/GlassesList';

function App() {
  const [selectedGlassesId, setSelectedGlassesId] = useState();
  const ChangeGlassesHandler = (id) => {
    setSelectedGlassesId(id);
  };

  return (
    <>
      <Header />
      <Model selectedGlassesId={selectedGlassesId} />
      <GlassesList onChangeGlasses={ChangeGlassesHandler} />
    </>
  );
}

export default App;

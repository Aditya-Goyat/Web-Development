import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import ParticlesBg from 'particles-bg';

function App ( ) {

  return (
    < div className="App" >
      <ParticlesBg type="cobweb" color='ffffff' bg={true} />
      < Navigation />
      < Logo />
      <Rank />
      < ImageLinkForm />
      {/*
  < FaceRecognition />*/}
    </ div >
  );

}

export default App;

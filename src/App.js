import logo from './logo.svg';
import './App.css';
import Button from './Components/Button'
import ButtonComponent from './Components/ButtonComponent';
import Image from './Components/Image'
import ImageComponent from './Components/ImageComponent';


function App() {
  return (
    <div className="App">
      <div>
        <Button name="Clikkami" />
      </div>
      <div>
        <Image />
      </div>
      <div>
        <ImageComponent />
      </div>
      <div>
        <ButtonComponent name="Clikkami ancora" />
      </div>
    </div>
  );
}

export default App;

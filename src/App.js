import './App.css';
import FeatureModal from './feature/Modal';
import FeatureButton from './feature/Button';
import FeatureInput from './feature/Input';
import FeatureSelect from './feature/Select';

function App() {

  return (
    <div>
      <FeatureButton />
      <FeatureInput />
      <FeatureModal />
      <FeatureSelect />
    </div>
  );
}

export default App;
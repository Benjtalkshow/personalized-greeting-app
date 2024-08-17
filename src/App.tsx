import React, { useState, useEffect } from 'react';
import ImageSelector from './components/ImageSelector';
import PersonalizationForm from './components/PersonalizationForm';
import ThankYouCard from './components/ThankYouCard';
import ProgressBar from './components/ProgressBar';
import WelcomePopup from './components/WelcomePopup';
import { fetchImages } from './api/api';

const App: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>('');
  const [step, setStep] = useState<number>(1);
  const [showPopup, setShowPopup] = useState<boolean>(false);


  const getImages = async () => {
    const response = await fetchImages();
    setImages(response.data.map((img: any) => img.urls.regular));
  }
  useEffect(() => {
    getImages();
    const isFirstVisit = !localStorage.getItem('hasVisited');
    if (isFirstVisit) {
      setShowPopup(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="app-container">
      {showPopup && <WelcomePopup onClose={handleClosePopup} />}
      <ProgressBar step={step} />
      {step === 1 && (
        <ImageSelector images={images} onSelectImage={(image) => { setSelectedImage(image); setStep(2); }} />
      )}
      {step === 2 && (
        <PersonalizationForm userName={userName} setUserName={setUserName} onNext={() => setStep(3)} />
      )}
      {step === 3 && selectedImage && (
        <ThankYouCard setStep={setStep} image={selectedImage} userName={userName} />
      )}
    </div>
  );
};

export default App;

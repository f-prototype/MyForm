import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/homepage/Homepage';
import { Provider } from 'react-redux';
import store from './slices';
import { Step1 } from './pages/step1/Step1';
import MainLayout from './layouts/mainLayout/MainLayout';
import { StepLayout } from './layouts/stepLayout/StepLayout';
import { Step2 } from './pages/step2/Step2';
import { Step3 } from './pages/step3/Step3';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Homepage />} />
              <Route element={<StepLayout />}>
                <Route path="Step" element={<Step1 />} />
                <Route path="Step2" element={<Step2 />} />
                <Route path="Step3" element={<Step3 />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;

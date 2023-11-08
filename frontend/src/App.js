import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './components/Home';
import SubmitContent from './components/SubmitContent';
import EditorDashboard from './components/EditorDashboard';
import LoginPage from './components/LoginPage'; // Import the LoginPage component
import SignupPage from './components/SignupPage';

function App() {
  const [submittedContent, setSubmittedContent] = useState(null);

  const handleContentSubmit = (content) => {
    setSubmittedContent(content);
  };

  return (
    <Router>
      <div className="bg-gray-100">
        <header className="bg-gray-800 text-white p-4">
          <h1>Citizen Journalism Platform</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/submit" className="text-white">
                  Submit Content
                </Link>
              </li>
              <li>
                <Link to="/editor" className="text-white">
                  Editor Dashboard
                </Link>
              </li>
              {/* Add a link to the login page */}
              <li>
                <Link to="/login" className="text-white">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/submit"
            element={
              <SubmitContent onContentSubmit={handleContentSubmit} />
            }
          />
          <Route
            path="/editor"
            element={
              <EditorDashboard submittedContent={submittedContent} />
            }
          />
          <Route path="/signup" element={<SignupPage />} />
          {/* Add a route for the login page */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

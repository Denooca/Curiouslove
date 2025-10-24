import React, { useState, useEffect, useCallback } from 'react';
import { CURIOSITY_THEMES } from './constants';
import { fetchCuriosity } from './services/geminiService';

/**
 * A loading spinner component displayed during initial load and data fetching.
 */
const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
  </div>
);

/**
 * Icon component for the "Back" button.
 */
const BackIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

/**
 * The main application component.
 * It orchestrates the entire user experience, from loading to displaying curiosities.
 */
function App() {
  // State to manage the initial loading screen visibility.
  const [isAppLoading, setIsAppLoading] = useState(true);
  // State to control the fade-in animation of the main content.
  const [isContentVisible, setIsContentVisible] = useState(false);
  // State to store the theme selected by the user.
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  // State to indicate when a curiosity is being fetched from the API.
  const [isFetching, setIsFetching] = useState(false);
  // State to store the curiosity text received from the API.
  const [curiosity, setCuriosity] = useState<string | null>(null);
  // State to store any error messages from the API call.
  const [error, setError] = useState<string | null>(null);

  /**
   * Effect hook to manage the initial loading animation sequence.
   * It shows a loading screen briefly, then fades in the main content.
   */
  useEffect(() => {
    const loadingTimer = setTimeout(() => setIsAppLoading(false), 1500);
    const contentTimer = setTimeout(() => setIsContentVisible(true), 1700);
    
    // Cleanup function to clear timers if the component unmounts.
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(contentTimer);
    };
  }, []); // Empty dependency array ensures this runs only once on mount.

  /**
   * Handles the user selecting a curiosity theme.
   * It sets the application state to fetching and calls the Gemini API.
   * Memoized with useCallback to prevent unnecessary re-creations.
   * @param {string} theme - The theme selected by the user.
   */
  const handleSelectTheme = useCallback(async (theme: string) => {
    setSelectedTheme(theme);
    setIsFetching(true);
    setCuriosity(null);
    setError(null);
    try {
      const result = await fetchCuriosity(theme);
      setCuriosity(result);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsFetching(false);
    }
  }, []);

  /**
   * Handles returning to the theme selection screen from the curiosity display.
   * It resets the relevant state variables.
   * Memoized with useCallback.
   */
  const handleGoBack = useCallback(() => {
    setSelectedTheme(null);
    // A small delay allows for the fade-out animation to complete before clearing the content.
    setTimeout(() => {
      setCuriosity(null);
      setError(null);
      setIsFetching(false);
    }, 500);
  }, []);

  // Renders the initial full-screen loading animation.
  if (isAppLoading) {
    return (
      <div className="bg-black w-full h-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  // Renders the main application UI.
  return (
    <main className="bg-gradient-to-br from-black via-slate-900 to-indigo-900 min-h-screen text-white font-sans flex flex-col items-center p-4 sm:p-8 overflow-x-hidden">
      <div className={`w-full max-w-7xl transition-opacity duration-1000 ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
        <header className="w-full text-left mb-12">
          <h1 className="text-2xl font-bold">CuriousLove</h1>
        </header>

        {/* View for theme selection */}
        <div
          className={`transition-all duration-500 ease-in-out w-full ${
            selectedTheme ? 'opacity-0 transform -translate-x-full absolute' : 'opacity-100 transform translate-x-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
              Uma nova curiosidade te espera!
            </h2>
            <p className="text-lg md:text-xl text-indigo-200 mb-12">
              O que deseja aprender hoje?
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {CURIOSITY_THEMES.map((theme) => {
              const Icon = theme.icon; // Component names must be capitalized
              return (
                <button
                  key={theme.name}
                  onClick={() => handleSelectTheme(theme.name)}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center font-semibold text-base sm:text-lg border border-slate-700 hover:bg-indigo-600 hover:scale-105 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 flex flex-col items-center justify-center gap-2"
                >
                  <Icon className="w-8 h-8 text-indigo-300" />
                  <span>{theme.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* View for displaying the curiosity */}
        <div
          className={`transition-all duration-500 ease-in-out w-full max-w-3xl mx-auto ${
            selectedTheme ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-full absolute'
          }`}
          style={{ pointerEvents: selectedTheme ? 'auto' : 'none' }}
        >
          {selectedTheme && (
            <>
              <button
                onClick={handleGoBack}
                className="flex items-center mb-8 bg-slate-800/50 backdrop-blur-sm rounded-full py-2 px-4 text-indigo-200 hover:bg-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <BackIcon />
                Voltar
              </button>
              <div className="bg-slate-800/30 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-slate-700 min-h-[20rem] flex flex-col justify-center">
                <h3 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-indigo-300">
                  {selectedTheme}
                </h3>
                {isFetching && <LoadingSpinner />}
                {error && <p className="text-center text-red-400">{error}</p>}
                {curiosity && (
                  <p className="text-lg sm:text-xl text-slate-200 leading-relaxed text-center animate-[fadeIn_1s_ease-in-out]">
                    {curiosity}
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { generateRoomCode } from './utils/roomUtils';
import {
  getCurrentUser,
  saveCurrentUser,
  clearCurrentUser,
  createRoomInStorage,
  getRoom
} from './utils/backendStorageUtils';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [presetRoomCode, setPresetRoomCode] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 1. Initial Load: theme + session + hash URL
  useEffect(() => {
    const savedTheme = localStorage.getItem('cartshare_theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    const handleHashAndSession = () => {
      const hash = window.location.hash;
      const hashMatch = hash.match(/^#\/room\/([A-Z0-9]{6})$/i);
      const hashRoomCode = hashMatch ? hashMatch[1].toUpperCase() : '';
      const session = getCurrentUser();

      if (hashRoomCode) {
        setPresetRoomCode(hashRoomCode);
        if (session && session.roomCode.toUpperCase() === hashRoomCode) {
          setCurrentUser(session);
        } else {
          clearCurrentUser();
          setCurrentUser(null);
        }
      } else if (session) {
        setCurrentUser(session);
        window.location.hash = `#/room/${session.roomCode}`;
      } else {
        setCurrentUser(null);
        setPresetRoomCode('');
      }
    };

    handleHashAndSession();
    window.addEventListener('hashchange', handleHashAndSession);
    return () => window.removeEventListener('hashchange', handleHashAndSession);
  }, []);

  // 2. Dark mode toggle
  const toggleDarkMode = () => {
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('cartshare_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('cartshare_theme', 'light');
    }
  };

  // 3. Create a Room
  // FIX: createRoomInStorage (API call) runs first; if it throws the error
  // propagates to Home.jsx which shows the error message. Only on success
  // do we write the session and navigate to the dashboard.
  const handleCreateRoom = async (username) => {
    const code = generateRoomCode();
    // This throws if the server is unreachable — Home.jsx catches it and shows the error
    await createRoomInStorage(code);
    // Only reached on success:
    const session = { name: username, roomCode: code };
    saveCurrentUser(session);
    setCurrentUser(session);
    window.location.hash = `#/room/${code}`;
  };

  // 4. Join an Existing Room
  // Validates the room exists before creating a session.
  const handleJoinRoom = async (username, roomCode) => {
    // getRoom throws a 404 if the room doesn't exist — Home.jsx catches it
    await getRoom(roomCode.toUpperCase());
    const session = { name: username, roomCode: roomCode.toUpperCase() };
    saveCurrentUser(session);
    setCurrentUser(session);
    window.location.hash = `#/room/${roomCode.toUpperCase()}`;
  };

  // 5. Leave Room
  const handleLeaveRoom = () => {
    clearCurrentUser();
    setCurrentUser(null);
    setPresetRoomCode('');
    window.location.hash = '#/';
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100 font-sans">
      {currentUser ? (
        <Dashboard
          username={currentUser.name}
          roomCode={currentUser.roomCode}
          onLeaveRoom={handleLeaveRoom}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      ) : (
        <Home
          onCreateRoom={handleCreateRoom}
          onJoinRoom={handleJoinRoom}
          presetRoomCode={presetRoomCode}
        />
      )}
    </div>
  );
}

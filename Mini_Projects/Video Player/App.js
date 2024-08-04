import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Video from './Video';
import Menu from './Menu';

const VIDEOS = {
  fast: 'https://www.youtube.com/embed/d-axc2LDIaw',
  slow: 'https://www.youtube.com/embed/o-Cmlq9ZiAI',
  cute: 'https://www.youtube.com/embed/JxS5E-kZc2s',
  eek: 'https://www.youtube.com/embed/fxkuf0ABloQ'
};

function App() {
  const [src, setSrc] = useState(VIDEOS.fast);

  const onSelectVideoHandler = (newVideo) => {
    setSrc(VIDEOS[newVideo]);
  };

  return (
    <div>
      <h1>Video Player</h1>
      <Menu onSelectVideo={onSelectVideoHandler} />
      <Video src={src} />
    </div>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

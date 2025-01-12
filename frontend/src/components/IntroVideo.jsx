import React, { useEffect, useRef } from 'react';
import './IntroVideo.css'; // Ensure the fade-out effect is defined here
import introVideo from './intro.mp4'; // Importing the video file directly

const IntroVideo = ({ onVideoEnd }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
      // Increase playback speed
      video.playbackRate = 3.5; // 2x speed. Adjust this value as needed.

    const handleVideoEnd = () => {
      video.classList.add('fade-out'); // Add fade-out effect
      setTimeout(() => {
        onVideoEnd(); // Notify parent after fade-out
      }, 1000); // Match fade-out duration in CSS
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, [onVideoEnd]);

  return (
    <div className="intro-video-container">
      <video
        ref={videoRef}
        className="intro-video"
        src={introVideo} // Using the imported video variable
        autoPlay
        muted
      />
    </div>
  );
};

export default IntroVideo;

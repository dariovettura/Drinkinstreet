import React from "react";

const Video = (props) => {
  const videoRef = React.useRef(null);

  const [playing, setPlaying] = React.useState(false);

  React.useEffect(() => {

    let options = {
        rootMargin: "0px",
        threshold: [0.9]
      };

    let handlePlay = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
          } else {
            videoRef?.current?.pause();
          }
        });
      };
  
      let observer = new IntersectionObserver(handlePlay, options);
  
      observer.observe(videoRef.current);

    //   window.addEventListener('scroll',handleScroll)

    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
  }, []);

  const startVideo = () => {
    videoRef.current?.pause();
    setPlaying(false);
  };

  const pauseVideo = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

//   const handleScroll = (e) => {
//     if (playing) {
//       pauseVideo();
//     }
//   };

  const handleVideoPress = () => {
    if (playing) {
      startVideo();
    } else {
      pauseVideo();
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        ref={videoRef}
        className="video_player"
        src={props.src}
        playsInline
        autoPlay
        loop
      ></video>
    </div>
  );
};

export default Video;

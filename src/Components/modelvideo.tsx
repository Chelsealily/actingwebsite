import "./youtube.scss";

const ModelVideo = () => {
  const videos = [
    { src: "https://www.youtube.com/embed/jGTMujWIoWc?si=0-HqJO99oFdy4rUh", title: "Showreel 1" },

    // Add more videos if needed
  ];

  return (
    <div className="youtube-container">

        {videos.map((video, index) => (
          <div key={index} className="youtube-item">
            <div className="video-wrapper">
              <iframe
                src={video.src}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>

  );
};

export default ModelVideo;

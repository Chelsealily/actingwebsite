import "./youtube.scss";

const Youtube = () => {
  const videos = [
    { src: "https://youtube.com/embed/u0KgxC2Ma9w?si=PiG1cQQnmfUzVty0", title: "Showreel 1" },

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

export default Youtube;

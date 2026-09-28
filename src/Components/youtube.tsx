import "./youtube.scss";

const Youtube = () => {
  const videos = [
    { src: "https://www.youtube.com/embed/hrZuQ52vO48?si=Ae46pEksgf9qnij6", title: "Showreel 1" },

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

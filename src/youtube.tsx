import "./youtube.scss";

const Youtube = () => {
  const videos = [
    { src: "https://www.youtube.com/embed/3vvMYJvvRBg?si=HP2Ne3cDrTC25ENU", title: "Showreel 1" },
    { src: "https://www.youtube.com/embed/jGTMujWIoWc?si=oRbo1OJbbBE1aNwB", title: "Showreel 2" },
    { src: "https://www.youtube.com/embed/EYoqhfPNzVo?si=HSaWthGL_-Lw41gl", title: "Showreel 3" },
    // Add more videos if needed
  ];

  return (
    <div className="youtube-container">
      <h1>Showreels</h1>
      <div className="youtube-grid">
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
    </div>
  );
};

export default Youtube;

import "./youtube.scss";

const Youtube = () => {
  return (
    <div className="youtube-container">
      <h1>Showreels</h1>
      <br />

      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/gDp0W4p0MCo?si=Rk2qKMrxI4QKanGj"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      <br />

      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/jGTMujWIoWc?si=oRbo1OJbbBE1aNwB"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      <br />

      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/EYoqhfPNzVo?si=HSaWthGL_-Lw41gl"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Youtube;

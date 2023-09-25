import BackGroundVideo from "./hotel_-_1303 (Original).mp4";

function FrontPage() {
  return (
    <section className="overflow-x-hidden">
      <video
        className="videoTag w-full h-full object-cover border-none"
        autoPlay
        loop
        muted
      >
        <source src={BackGroundVideo} type="video/mp4" />
      </video>
      {/* <div className="absolute top-0 right-10 w-full h-full flex justify-center items-center">
        <FrontPageText />
      </div> */}
    </section>
  );
}

export default FrontPage;

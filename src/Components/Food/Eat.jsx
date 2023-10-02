import IMAGES from "../../assets/Images/Images";
import ImageWithHoverOverlay from "../ImageWithHoverOverlay";
import Nav from "../NavBar/Nav";

export default function Eat() {
  return (
    <>
      <Nav />
      <div className="h-screen bg-gray-800 flex flex-col justify-center items-center">
        <div className="flex-1 text-center">
          <div className="border-t-2 border-b-2 border-gray-500 mt-5 pt-5 font-">
            <h1 className="text-6xl text-white mb-4">EAT</h1>
          </div>
        </div>
        <div className="text-xl mr-40 ml-40 mt-20 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          molestiae sed enim nobis odit excepturi non. Explicabo minus impedit
          possimus enim at quibusdam, totam, vero porro quos quod iusto hic.
          Recusandae hic culpa nisi earum veritatis consequatur illo rerum, et
          voluptatibus blanditiis iusto sint veniam consectetur facere magni
          ipsa explicabo quaerat aliquam architecto amet delectus! Officiis
          aliquam veniam beatae corporis.
        </div>
        <div className="flex h-screen justify-center items-center">
          <div>
            <ImageWithHoverOverlay
              image={IMAGES.Breakfast}
              overlayContent={"Breakfast"}
            />
          </div>
          <ImageWithHoverOverlay
            image={IMAGES.SeaFood}
            overlayContent={"SeaFood"}
          />
          <ImageWithHoverOverlay
            image={IMAGES.Asian}
            overlayContent={"Asian"}
          />
        </div>
      </div>
    </>
  );
}

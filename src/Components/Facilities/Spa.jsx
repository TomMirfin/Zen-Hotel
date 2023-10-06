export default function Eat() {
  return (
    <>
      <div className="h-screen bg-gray-600 flex flex-col items-center">
        {/* <div className="flex-1 text-center"> */}
        <div className="border-t-2 border-b-2 border-gray-500 mt-5 pt-5 font-">
          <h1 className="text-6xl text-white mb-4">SPA</h1>
        </div>
        {/* </div> */}
        <div className="text-xl mr-40 ml-40 flex items-center justify-center text-white pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          molestiae sed enim nobis odit excepturi non. Explicabo minus impedit
          possimus enim at quibusdam, totam, vero porro quos quod iusto hic.
          Recusandae hic culpa nisi earum veritatis consequatur illo rerum, et
          voluptatibus blanditiis iusto sint veniam consectetur facere magni
          ipsa explicabo quaerat aliquam architecto amet delectus! Officiis
          aliquam veniam beatae corporis.
        </div>
        <form className="w-1/2 h-2/3 bg-slate-700 flex flex-col mt-5 shadow-3xl">
          <div className="flex flex-col w-1/3 p-5">
            <tag className="text-white">Name</tag>
            <input className="text-white" type="text" />
            <tag className="text-white pt-5">Email</tag>
            <input className="text-black" type="email" />
            <tag className="text-white pt-5">Guests:</tag>
            <select className="bg-slate-600 w-[40] text-white">
              <option className="text-center">1</option>
              <option className="text-center">2</option>
              <option className="text-center">3</option>
              <option className="text-center">4</option>
            </select>
            <tag className="text-white pt-5">Date</tag>
            <input className="bg-slate-600 text-white" type="date" />
            <tag className="text-white pt-5">Time</tag>
            <input className="bg-slate-600 text-white" type="time" />
            <tag className="text-white pt-5">Message</tag>
            <textarea
              name="text-area"
              className="bg-slate-600 text-white h-auto resize-none"
            />
          </div>
          <div className="flex justify-center pt-20">
            <button className="rounded-xl p-2 w-1/3 bg-slate-600 text-white hover:bg-slate-400 hover:shadow-xl">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

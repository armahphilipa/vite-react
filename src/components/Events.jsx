import eventBg from '../assets/event.png';

export default function Events() {
  return (
    <section id="events"  
    className=" "
    >
      <div className="inset-0 h-[70vh] bg-cover bg-center bg-opacity-60 flex flex-col  justify-center items-center text-white text-center p-6"
      style={{ backgroundImage: `url(${eventBg})`, 
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundBlendMode: "darken" }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FFC300] ">NEXT EVENT</h2>
        <p className="max-w-2xl text-lg">Keep an eye on our events page or social media. Dance, mingle, and create memories that sparkle long after the masks come off.</p>
      </div>
    </section>
  );
}

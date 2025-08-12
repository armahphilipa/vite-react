export default function Founders() {
  const founders = [
    { name: "Chris Kobby", img: "Founder1.png" },
    { name: "Chris Kobby", img: "Founder3.png" },
    { name: "Chris Kobby", img: "Founder4.png" },
  ];

  return (
    <section id="founders" className="py-12 px-0 sm:px-4 md:px-20 bg-white w-full">
      <div className="container mx-auto px-4">
        <h3 className="text-sm text-yellow-600 mb-6">Our Founders</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {founders.map((f, i) => (
            <div
              key={i}
              className="relative w-full h-full sm:h-[400px] md:h-[470px] overflow-hidden"
            >
              <img
                src={`/assets/${f.img}`}
                alt={f.name}
                className="w-full h-full object-cover object-center scale-105"
              />

              <div className="absolute inset-0 flex items-end justify-center p-6">
                <div className="backdrop-blur-md bg-white/10 px-6 py-4 rounded-lg text-white text-center">
                  <p className="text-xs text-black font-semibold tracking-widest">FOUNDER</p>
                  <h4 className="text-sm font-light">{f.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

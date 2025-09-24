


export default function AboutHero() {
  return (
    <main className="w-full h-[calc(100vh-30vh)] lg:h-[50vh] overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-center h-full  w-full bg-black/70 text-center overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 -z-10">
          <img
            src={'/background.gif'}
            loading="lazy"
            alt="Skyscraper background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        {/* Welcome badge */}
        <span className="mb-6 mt-8 inline-block rounded-md bg-[#F5E3C0] px-6 py-2 text-sm font-semibold text-[#3A2C0F] tracking-widest shadow">
          ALL YOU NEED TO KNOW
        </span>
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 max-w-4xl leading-tight">
          About Us
        </h1>
      </section>
    </main>
  );
}

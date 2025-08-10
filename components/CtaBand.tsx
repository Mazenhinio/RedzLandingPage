export default function CtaBand() {
  return (
    <section className="brand-gradient text-white">
      <div className="mx-auto container-max px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <h3 className="headline text-2xl md:text-3xl font-semibold">Ready to get started?</h3>
        <div className="flex gap-3">
          <a href="#contact" className="rounded-full bg-white text-ink px-5 py-2.5 shadow-md">Get Started</a>
          <a href="#contact" className="rounded-full bg-white/10 text-white px-5 py-2.5 border border-white/30">Contact Us</a>
        </div>
      </div>
    </section>
  );
}


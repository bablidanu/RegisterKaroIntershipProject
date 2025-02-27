const About = () => {
  return (
    <div className="p-8">
      <div className="mt-6">
        <h2 className="text-yellow-500">WELCOME TO REGISTERKARO.IN</h2>
        <section className="font-bold text-3xl flex mt-4 gap-2">
          <p>About</p>
          <p className="text-yellow-600">Register Karo</p>
        </section>
      </div>
      <div className="flex flex-col md:flex-row mt-6 gap-10">
        {" "}
        {/* Change to flex-col on small screens */}
        <div className="flex-1 text-zinc-700 text-xl">
          {" "}
          {/* Text section */}
          We have been using Intelegencia as our DevOps vendor for our field
          service applications over the last couple of years and I am extremely
          pleased with their performance, ability to execute, and willingness to
          adapt in our ever-changing environment. Perry is an outstanding leader
          who is fanatical about customer satisfaction. He has built a solid
          team which has consistently delivered on projects thereby exceeding
          everyone's expectations.
          <p className="mt-3">
            I would strongly recommend their services to any organization that
            is looking for solid, reliable, and predictable outcomes.
          </p>
        </div>
        <div className="flex-1">
          {" "}
          {/* Image section */}
          <img src={`card.jpeg`} alt="card" className="h-auto w-full" />{" "}
        </div>
      </div>
    </div>
  );
};

export default About;

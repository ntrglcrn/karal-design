function Features() {
  return (
    <section className="py-8 px-4 text-[#014d8c] mb-[100px]">
      <div className="flex flex-wrap justify-between">
        {/* Features-left */}
        <div className="flex flex-wrap">
          <div className="mr-8 mb-4">
            <p className="text-2xl font-semibold">Currently</p>
            <p className="text-lg">Freelancing</p>
          </div>
          <div className="mr-8 mb-4">
            <p className="text-2xl font-semibold">Specialized at</p>
            <p className="text-lg">UX/UI Design, Apps & Websites</p>
          </div>
          <div className="mb-4">
            <p className="text-2xl font-semibold">Empowering</p>
            <p className="text-lg">Digital Products & Marketing Campaigns</p>
          </div>
        </div>

        {/* Features-right */}
        <div className="flex flex-wrap">
          <div className="mr-8 mb-4">
            <p className="text-2xl font-semibold">Enthusiastic about</p>
            <p className="text-lg">Language Learning, Art & AI</p>
          </div>
          <div className="mb-4">
            <p className="text-2xl font-semibold">From</p>
            <p className="text-lg">Kazakhstan</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features; 
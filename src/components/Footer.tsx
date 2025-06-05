function Footer() {
  return (
    <footer className="bg-[#014d8c] p-24 px-4 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Left Content (Interested in working, Together we hold, Contact) */}
        <div className="md:col-span-2 mb-8 md:mb-0">
          {/* Frame 70 - Titles and Main Text */}
          <div className="mb-8">
            <p className="text-[#769ab8] text-4xl font-normal">Interested in working with me?</p>
            <p className="text-white text-8xl font-normal leading-tight">Together, we hold the power to design the world that we envision</p>
          </div>

          {/* Contact Info (Send a message, email) */}
          <div>
            <p className="text-[#769ab8] text-lg font-normal">Send a message</p>
            <p className="text-white text-3xl font-normal">hi@nakama.kz</p>
          </div>
        </div>

        {/* Right Content (Location, Social Links) */}
        <div className="md:col-start-3">
          {/* Location */}
          <div className="mb-8">
            <p className="text-[#769ab8] text-sm font-normal">43° 15' 24.12'' N / 76° 55' 42.96'' E</p>
            <p className="text-white text-lg font-normal">Remote from Kazakhstan</p>
          </div>

          {/* Footer Links */}
          <div className="space-y-2">
            {/* Linkedin */}
            <div className="flex items-center">
              {/* Arrow Placeholder */}
              <img src="/img/arrow.svg" alt="Arrow" className="mr-2 w-4 h-4" /> {/* SVG Arrow */}
              <a href="#" className="text-white text-lg font-normal hover:underline">Linkedin</a>
            </div>
            {/* Telegram */}
            <div className="flex items-center">
               {/* Arrow Placeholder */}
               <img src="/img/arrow.svg" alt="Arrow" className="mr-2 w-4 h-4" /> {/* SVG Arrow */}
              <a href="#" className="text-white text-lg font-normal hover:underline">Telegram</a>
            </div>
            {/* Instagram */}
            <div className="flex items-center">
               {/* Arrow Placeholder */}
               <img src="/img/arrow.svg" alt="Arrow" className="mr-2 w-4 h-4" /> {/* SVG Arrow */}
              <a href="#" className="text-white text-lg font-normal hover:underline">Instagram</a>
            </div>
          </div>
        </div>

        {/* Union-light-mode 1 is not visible in Figma, skipping for now */}

      </div>
    </footer>
  );
}

export default Footer; 
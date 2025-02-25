<section className="flex flex-col lg:flex-row items-center justify-between px-8 py-16 bg-white">
      {/* Left Side */}
      <div className="container flex flex-col space-y-6 max-w-lg">
        <h1 className="text-5xl font-bold text-green-700 leading-tight">
          Your path <br /> to financial <br /> freedom
        </h1>
        <button className="flex items-center bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition">
          Book a Call
          <ArrowUpRight className="ml-2" />
        </button>

        {/* Bottom Left - Logo & Stats */}
        <div className="flex items-center space-x-4 mt-10">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Cheapro Logo" className="h-8" />
          </div>
          <div>
            <div className="flex items-center text-red-500">
              {Array(4).fill(0).map((_, idx) => (
                <span key={idx}>★</span>
              ))}
              <span className="text-red-500">☆</span>
            </div>
            <p className="text-sm font-semibold">
              (73.2%) of people have some type of outstanding debt
            </p>
          </div>
        </div>
      </div>

      {/* Center - Hero Image */}
      <div className="my-10 lg:my-0">
        <img
          src={HeroImg}
          alt="Hero Person"
          className="h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Right Side */}
      <div className="flex flex-col space-y-6 max-w-sm">
        <p className="text-gray-700">
          Hi my name is Carl and I will help you get your Early Financial Freedom Plan (EFFP)
        </p>
        <div className="flex items-center space-x-2">
          <Mail className="text-green-700" />
          <span className="font-semibold text-green-700">help@cheqpro.com</span>
        </div>

        {/* Testimonial */}
        <div className="flex items-center space-x-4 mt-10">
          <div className="flex -space-x-2">
            <img src="/user1.jpg" alt="User 1" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="/user2.jpg" alt="User 2" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="/user3.jpg" alt="User 3" className="w-8 h-8 rounded-full border-2 border-white" />
          </div>
          <p className="italic text-sm text-gray-600">
            “Will helped you reach financial freedom”
          </p>
        </div>
      </div>
    </section>
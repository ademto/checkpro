{step === 2 && (
    <>
    <div>
        <h2 className="text-green-800 font-bold text-3xl">How Old Are You?</h2>
        <p className="text-green-700 font-semibold my-10">Select the age bracket you fall under</p>
    </div>
    <div className="w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
            <div key={index} className="bg-white shadow-lg text-center rounded-2xl overflow-hidden">
                <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                </div>
            </div>
            ))}
        </div>
    </div>
  </>
)}
{step === 1 && (
    <>
    <div>
        <h2 className="text-green-800 font-bold text-3xl">How Old Are You?</h2>
        <p className="text-green-700 font-semibold my-10">Select the age bracket you fall under</p>
    </div>
    <div className="w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
            <div key={index} className="bg-white shadow-lg text-center rounded-2xl overflow-hidden">
                <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                </div>
            </div>
            ))}
        </div>
    </div>
  </>
)}
{step === 1 && (
    <>
    <div>
        <h2 className="text-green-800 font-bold text-3xl">How Old Are You?</h2>
        <p className="text-green-700 font-semibold my-10">Select the age bracket you fall under</p>
    </div>
    <div className="w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
            <div key={index} className="bg-white shadow-lg text-center rounded-2xl overflow-hidden">
                <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                </div>
            </div>
            ))}
        </div>
    </div>
  </>
)}
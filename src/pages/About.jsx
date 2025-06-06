import finance from '../assets/finance.jpg';

export default function About() {
  return (
    <div className="bg-gray-100 py-40">
      <div className="grid grid-cols-2 gap-10 container mx-auto px-20">
        <div className='row-span-2 bg-white rounded-lg p-5 flex flex-col justify-between'>
          <div>
            <span className='text-green-700 font-bold text-xl'>About Us</span>
            <h1 className='text-4xl font-medium mt-5'>Empowering You to Master Your Money</h1>
          </div>
          <div className='flex flex-col gap-5'>
            <p className='text-base leading-7'>We believe financial literacy isn’t a luxury it’s a necessity. That’s why we’ve created a platform where anyone, regardless of background or income, can learn the skills to build a more secure, confident, and independent financial life.</p>
            <p className='text-base leading-7'>We’re not here to sell hype or get-rich-quick schemes. We're here to teach you how money really works — and how to make it work for you.</p>
            <p className='text-base leading-7'>Whether you’re trying to pay off debt, start saving, build wealth, or just finally understand how budgeting works, we’re with you every step of the way</p>
          </div>
        </div>
        <div className='rounded-lg'>
          <img className='rounded-lg' src={finance} alt="" />
        </div>
        <div className='bg-white grid grid-cols-2 gap-5 p-5 rounded-lg'>
          <span className='bg-[#ebebeb] p-3 rounded-lg'>Personalized Roadmap</span>
          <span className='bg-[#ebebeb] p-3 rounded-lg'>Interactive budgeting tools</span>
          <span className='bg-[#ebebeb] p-3 rounded-lg'>Expert Advice and Tips</span>
          <span className='bg-[#ebebeb] p-3 rounded-lg'>Secure and Private</span>
        </div>
        <div className='bg-white rounded-lg p-5'>
          <span className='text-green-700 font-bold text-xl'>Our Mission</span>
          <h1 className='text-3xl font-medium mt-5'>Learn. Apply. Grow.</h1>
          <p className='text-base leading-7 mt-4'>To create a world where everyone, regardless of background, has the knowledge and confidence to achieve financial freedom and build lasting wealth.</p> 
        </div>  
        <div className='bg-white rounded-lg p-5'>
          <span className='text-green-700 font-bold text-xl'>Our Vision</span>
          <h1 className='text-3xl font-medium mt-5'>Financial Freedom for Everyone</h1>
          <p className='text-base leading-7 mt-4'>To empower individuals with easy-to-understand financial education, practical tools, and a supportive community — helping them take control of their money and create a secure future.</p>
        </div>
      </div>
    </div>
  )
}
  
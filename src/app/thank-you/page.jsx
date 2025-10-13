import { CheckCircle } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 px-4">
      {/* Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-center animate-fade-in">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 animate-bounce" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
          Thank You!
        </h1>

        {/* Message */}
        <p className="text-gray-600 text-lg mb-8">
          🎉 We’ve received your details successfully.  
          Our team will get in touch with you shortly.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-flex items-center text-sm md:text-base leading-none w-max px-3 md:px-0 h-[40px] md:w-[200px] md:h-[50px] rounded-xl hover:bg-black hover:border hover:border-white hover:[boxShadow:0px_5px_15px_rgba(255,_118,_117,_0.3)] bg-gradient hover:bg-none justify-center gap-2 uppercase transition-all duration-300"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

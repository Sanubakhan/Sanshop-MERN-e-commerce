import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-gray-600 text-lg">
              Thank you for visiting Sanshop! We'd love to hear from you.
            </p>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Sanshop</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sanshop is your personal corner for discovering meaningful novels and carefully 
              curated reads. We believe every book has the power to transform, inspire, and 
              connect us to different worlds and perspectives.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to bring you stories that stay with you long after the last page, 
              from emotional journeys to powerful narratives that make you feel something real.
            </p>
          </div>

          {/* Social Media Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            {/* Instagram Card */}
            <a
              href="https://instagram.com/sanshop"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg p-6 text-white hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <div className="flex items-center mb-3">
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <h3 className="text-xl font-semibold">Instagram</h3>
              </div>
              <p className="text-white/90">Follow us for daily book recommendations and community updates</p>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/sanuba-khan-86a59233a/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 rounded-lg p-6 text-white hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <div className="flex items-center mb-3">
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <h3 className="text-xl font-semibold">LinkedIn</h3>
              </div>
              <p className="text-white/90">Connect with us professionally and stay updated</p>
            </a>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gray-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@sanshop.com</p>
                  <p className="text-gray-600">support@sanshop.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-gray-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Available Online Worldwide</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-gray-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Response Time</h3>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Thank You Note */}
          <div className="mt-8 text-center bg-gray-900 text-white rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-3">Thank You!</h3>
            <p className="text-gray-300">
              We appreciate your interest in Sanshop. Whether you have questions, feedback, 
              or just want to share your love for books, we're here to listen.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
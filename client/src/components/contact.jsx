export default function ContactPage() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-600">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">Get in Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-md border border-white/50 dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea 
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Options */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-md border border-white/50 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Other Ways to Connect</h3>
              
              <div className="space-y-4">
                <a href="mailto:contact@example.com" className="flex items-center gap-4 p-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-100">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">nishantbaiga@gmail.com</p>
                  </div>
                </a>

                <a href="https://wa.me/1234567890" className="flex items-center gap-4 p-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-100">WhatsApp</h4>
                    <p className="text-gray-600 dark:text-gray-400">+917489355967</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-100">Social Media</h4>
                    <div className="flex gap-4 mt-2">
                      <a href="https://www.linkedin.com/in/nishant-baiga-8041142b9/" className="text-gray-600 hover:text-blue-600 dark:hover:text-blue-400">LinkedIn</a>
                      <a href="https://x.com/Nishantbaiga" className="text-gray-600 hover:text-blue-400 dark:hover:text-blue-200">Twitter</a>
                      <a href="#" className="text-gray-600 hover:text-pink-600 dark:hover:text-pink-400">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


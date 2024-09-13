
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Header Section */}
      <header className="bg-blue-600 py-6">
        <div className="container mx-auto flex justify-center items-center">
          <h1 className="text-white text-3xl font-bold text-center">PasswordSecure</h1>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 text-center">
        {/* Hero Section */}
        <section className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Keep Your Passwords Safe with Military-Grade Encryption
          </h2>
          <p className="text-md md:text-lg text-gray-600 mb-8">
            Our password manager stores and encrypts your passwords using a 32-digit encryption key, ensuring maximum security.
          </p>
          <span
            className="bg-blue-600 text-white py-3 px-6 rounded-md font-medium text-lg hover:bg-blue-500 transition"
          >
            Get Started for Free
          </span>
        </section>

        {/* Features Section */}
        <section id="features" className="py-8">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Why Choose PasswordSecure?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold mb-4">32-Digit Encryption</h4>
              <p className="text-gray-600">
                Your passwords are encrypted using a 32-digit key, making it virtually impossible for attackers to crack.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold mb-4">Easy Password Management</h4>
              <p className="text-gray-600">
                Store and manage all your passwords in one secure place, easily accessible from any device.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold mb-4">Autofill & Sync</h4>
              <p className="text-gray-600">
                Autofill passwords for websites and sync them across all your devices securely.
              </p>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section id="security" className="bg-gray-200 py-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Unmatched Security</h3>
          <p className="text-md md:text-lg text-gray-700 max-w-3xl mx-auto">
            At PasswordSecure, we understand the importance of password security. That's why we use cutting-edge encryption algorithms and secure cloud storage to protect your sensitive data. With our 32-digit key encryption, your passwords are safer than ever.
          </p>
        </section>

        {/* Signup Section */}
        <section id="signup" className="py-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Start Protecting Your Passwords Today</h3>
          <span
            className="bg-green-600 text-white py-3 px-6 rounded-md font-medium text-lg hover:bg-green-500 transition"
          >
            Sign Up Now
          </span>
        </section>
      </main>

      <footer className="bg-blue-600 py-6">
        <div className="container mx-auto text-center">
          <p className="text-white">&copy; 2024 PasswordSecure. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

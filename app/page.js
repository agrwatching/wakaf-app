export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">WakafApp</h1>
          <nav className="space-x-4">
            <a href="#about" className="text-gray-700 hover:text-blue-600">Tentang</a>
            <a href="#donasi" className="text-gray-700 hover:text-blue-600">Donasi</a>
            <a href="/admin/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Login Admin
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center text-center px-6 py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-700">
            Selamat Datang di WakafApp
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Platform donasi dan wakaf modern yang aman, transparan, dan terpercaya.
          </p>
          <a href="#donasi" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
            Donasi Sekarang
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-4 text-gray-800">Tentang WakafApp</h3>
        <p className="text-gray-600 leading-relaxed">
          WakafApp adalah platform digital untuk mempermudah pengelolaan donasi dan wakaf.
          Kami menyediakan laporan transparan, sistem aman, dan teknologi modern untuk
          mendukung kebaikan Anda.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center p-4 border-t text-gray-500">
        © 2025 WakafApp
      </footer>
    </div>
  );
}

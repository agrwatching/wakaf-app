export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <a href="/" className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">Logout</a>
      </header>

      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Selamat Datang, Admin</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Total Donasi</h3>
            <p className="text-2xl text-blue-600">Rp 50.000.000</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Jumlah Donatur</h3>
            <p className="text-2xl text-blue-600">120</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Kampanye Aktif</h3>
            <p className="text-2xl text-blue-600">5</p>
          </div>
        </div>
      </main>
    </div>
  );
}

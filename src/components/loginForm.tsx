"use client";

export default function LoginForm() {
  return (
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Email</label>
        <input
          type="email"
          className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
          placeholder="example@mail.com"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Password</label>
        <input
          type="password"
          className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
          placeholder="••••••••"
        />
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
        Login
      </button>
    </form>
  );
}

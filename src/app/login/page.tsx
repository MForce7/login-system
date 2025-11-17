import LoginForm from "@/components/loginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-700">
          Login
        </h2>

        <LoginForm />

        <p className="text-center text-sm mt-4">
          Belum punya akun?
          <a href="/signup" className="text-blue-600">
            Daftar
          </a>
        </p>
      </div>
    </div>
  );
}

import RegistForm from "@/components/registForm";

export default function Signup() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-blue-600 text-2xl font-semibold text-center mb-6">
            Sign Up
          </h2>
          <RegistForm />
          <p className="text-center text-sm mt-4">
            Sudah punya akun?
            <a href="/login" className="text-blue-600">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

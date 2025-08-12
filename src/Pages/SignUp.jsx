import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
      navigate("/checkout"); // Changed from "/" to "/checklist"
    } catch (error) {
      alert(error.message);
    }
  };

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignup = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => navigate("/checklist")) // Changed from "/" to "/checklist"
      .catch((error) => alert(error.message));
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center items-center px-10">
        <div className="max-w-sm w-full">
          <h1 className="text-3xl font-bold text-center mb-2">Sign Up</h1>
          <p className="text-center text-gray-400 mb-6">Create your account to get started</p>

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label>Email</label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded px-3 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full border border-gray-200 rounded px-3 py-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div>
              <label>Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border border-gray-200 rounded px-3 py-2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded">
              Sign Up
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-1 text-gray-400" />
            <span className="px-2 text-sm text-gray-400 font-medium">Or Continue With</span>
            <hr className="flex-1 text-gray-400" />
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleGoogleSignup}
              className="flex-1 border border-gray-300 rounded py-2 flex items-center justify-center gap-2 font-semibold"
            >
              <FaGoogle /> Google
            </button>
          </div>

          <p className="text-center mt-4">
            Already have an account? <Link to="/login" className="text-yellow-500 font-semibold">Log in</Link>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2">
        <img src="/assets/productimg1.jpeg" alt="Signup" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
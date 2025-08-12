import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePhoneLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Configure recaptcha
      const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': () => {
          // This will be called when reCAPTCHA is solved
        }
      });

      // Send SMS with verification code
      const confirmationResult = await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
      
      // Prompt user to enter the SMS code
      const code = window.prompt("Enter the verification code sent to your phone");
      if (code) {
        await confirmationResult.confirm(code);
        navigate("/dashboard"); // Navigate to dashboard after successful login
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await signInWithEmailAndPassword(auth, phone + "@example.com", password);
      navigate("/dashboard"); // Navigate to dashboard after successful login
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ 
        backgroundImage: "url('/assets/productimg1.jpeg')",
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundBlendMode: "darken"
      }}
    >
      <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-8 w-full max-w-md mx-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        
        {/* Email/Password Login Form */}
        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number (as username)</label>
            <input
              type="text"
              placeholder="Your phone number"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition-colors disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login with Password"}
          </button>
        </form>

        {/* reCAPTCHA container (invisible) */}
        <div id="recaptcha-container"></div>

        <p className="mt-4 text-center text-sm">
          Click{" "}
          <Link to="/adminlogin" className="text-yellow-500 font-semibold hover:underline">
            here 
          </Link>
          {" "}
           to login if you are an admin
        </p>
      </div>
    </div>
  );
}
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AuthImage from "../../assets/hospitalsimg.svg";
import { signUp, login } from "../../services/apiServices";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function AuthenticationPage() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return false;
    }
    if (formData.password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      return false;
    }
    if (!isLogin && formData.phone.trim() === "") {
      setMessage("Phone number is required for sign-up.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validateForm()) return;

    try {
      setIsLoading(true);
      if (isLogin) {
        const response = await login({
          email: formData.email,
          password: formData.password,
        });
        if (response.status === 200) { // Adjust based on your API response structure
          const { token, message } = response.data;
          setMessage(message);
          localStorage.setItem("token", token);
          localStorage.setItem("userEmail", formData.email);
          navigate("/"); // Navigate only if login is successful
        } else {
          setMessage("Incorrect email or password.");
        }
      } else {
        const response = await signUp({
          phoneNumber: formData.phone,
          email: formData.email,
          password: formData.password,
        });
        const { message } = response.data;
        setMessage(message);
      }
    } catch (error) {
      setMessage("Unable to connect to the server.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <section className="flex min-h-screen">
      {/* Left Side - Image */}
      <div className="w-1/2 hidden lg:flex items-start justify-start">
        <img src={AuthImage} alt="Authentication Visual" className="h-3/4" />
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-start">
        <h3 className="font-bold mb-4">Welcome to RxVitals</h3>

        {/* Toggle Buttons */}
        <div className="my-6 flex bg-secondary p-2 rounded-full shadow-md">
          <button
            className={`px-6 py-2 rounded-full font-bold ${
              isLogin ? "bg-primary text-white" : "text-primary"
            }`}
            onClick={() => {
              setIsLogin(true);
              setMessage("");
            }}
          >
            Login
          </button>
          <button
            className={`px-6 py-2 rounded-full font-bold ${
              !isLogin ? "bg-primary text-white" : "text-primary"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {/* Error message */}
        <div className="text-red-500 font-bold h-10">
          {message && <p>{message}</p>}
        </div>

        {/* Form Transition */}
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.form
              key="login"
              className="w-full max-w-sm p-6 space-y-4"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                required
              />
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </button>
              </div>
              {isLoading ? (
                <div className="w-full text-center p-3">
                  <ClipLoader size={20} />
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full text-center bg-primary p-3 rounded-lg text-white hover:text-primary font-bold hover:bg-secondary transition"
                >
                  Login
                </button>
              )}
            </motion.form>
          ) : (
            <motion.form
              key="signup"
              className="w-full max-w-sm p-6 space-y-4"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                required
              />
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </button>
              </div>
              <div>
                <ul className="text-red-600 font-semibold list-disc list-inside">
                  <li>Password must be at least 6 characters long.</li>
                  <li>Password must have one capital letter.</li>
                  <li>Password should not contain space.</li>
                </ul>
              </div>
              {isLoading ? (
                <div className="w-full text-center p-3">
                  <ClipLoader size={20} />
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full text-center bg-primary p-3 rounded-lg text-white hover:text-primary font-bold hover:bg-secondary transition"
                >
                  Sign Up
                </button>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default AuthenticationPage;

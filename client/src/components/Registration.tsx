import { useState, type JSX } from "react";

const Registration = (): JSX.Element => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(firstName, lastName, email, password);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      {/* Light gray card */}
      <div className="bg-gray-50 rounded-lg shadow-sm p-8 w-full max-w-md">
        <h2 className="text-primary font-bold text-xl mb-6">REGISTRATION</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* First Name and Last Name side by side */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                className="w-full border-b-2 border-gray-300 py-2 px-1 focus:outline-none focus:border-primary transition-colors bg-transparent"
                value={firstName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                className="w-full border-b-2 border-gray-300 py-2 px-1 focus:outline-none focus:border-primary transition-colors bg-transparent"
                value={lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full border-b-2 border-gray-300 py-2 px-1 focus:outline-none focus:border-primary transition-colors bg-transparent"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
          </div>

          {/* Password  */}
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full border-b-2 border-gray-300 py-2 px-1 focus:outline-none focus:border-primary transition-colors bg-transparent"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
          </div>

          {/* Sign In Link with blue dot */}
          <div className="flex items-center text-sm text-gray-700">
            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
            Already have an account?{" "}
            <a
              href="#"
              className="text-primary underline hover:font-bold transition-all duration-300 ml-2"
            >
              Sign In
            </a>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-900 transition-colors duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;

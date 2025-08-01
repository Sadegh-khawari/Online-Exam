import { useState } from "react";

type User = "Teacher" | "Student";

const UserType = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleUserType = (userType: User) => {
    setUser(userType);
    console.log(userType);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-white">Are you a Student or Teacher?</h1>
      <div className="flex gap-16">
        <button
          onClick={() => {
            handleUserType("Teacher");
          }}
          className="bg-white px-8 py-3 rounded-full font-semibold hover:cursor-pointer"
        >
          Teacher
        </button>
        <button
          onClick={() => {
            handleUserType("Student");
          }}
          className="bg-white px-8 py-3 rounded-full font-semibold hover:cursor-pointer"
        >
          Student
        </button>
      </div>
    </div>
  );
};

export default UserType;

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { FaGoogle, FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Eye, EyeOff } from "lucide-react";
import logo from '@/assets/logo.png'
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration Form Data:", formData);
  };

  return (
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
            <img className="mx-auto w-20" src={logo} alt="logo" />
            <h2 className="text-2xl font-semibold mt-2">Register for ReferralHub</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Id</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="robert.fox@myemail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Create Password</Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                onClick={() => setShowPassword(prev => !prev)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                onClick={() => setShowConfirmPassword(prev => !prev)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Link to={'/dashboard'}>
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-indigo-300 text-white">
              Register
            </Button>
          </Link>
        </form>

        <div className="flex items-center my-6">
          <Separator className="flex-1" />
          <span className="px-2 text-sm text-muted-foreground">or</span>
          <Separator className="flex-1" />
        </div>

        <div className="flex justify-center gap-4 mb-4">
          <FaGoogle size={22} className="cursor-pointer text-muted-foreground hover:text-black" />
          <FaFacebook size={22} className="cursor-pointer text-muted-foreground hover:text-black" />
          <FaXTwitter size={22} className="cursor-pointer text-muted-foreground hover:text-black" />
          <FaLinkedin size={22} className="cursor-pointer text-muted-foreground hover:text-black" />
        </div>

        <p className="text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
  );
};

export default Register;

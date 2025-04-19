import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { FaGoogle, FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import logo from '@/assets/logo.png'
import { Link } from 'react-router-dom';

type FormData = {
  magicEmail: string;
  email: string;
  password: string;
  rememberMe: boolean;
};

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    magicEmail: '',
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen py-10 flex items-center justify-center bg-gray-100 px-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-6 space-y-6">
          <div className="text-center">
            <img className="mx-auto w-20" src={logo} alt="logo" />
            <h2 className="text-2xl font-semibold mt-2">Login to ReferralHub</h2>
          </div>

          <Link to={'/dashboard'}>
          <Button variant="outline" className="w-full bg-gradient-to-r from-blue-500 to-indigo-300 text-white">
            Continue with Google/Microsoft
          </Button>
          </Link>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className='space-y-2'>
              <Label htmlFor="magicEmail">Magic Link Login</Label>
              <Input
                id="magicEmail"
                name="magicEmail"
                type="email"
                placeholder="Enter your email"
                value={formData.magicEmail}
                onChange={handleChange}
              />
              <Button type="button" className="w-full mt-2 bg-gradient-to-r from-blue-500 to-indigo-300 text-white">Send Magic Link</Button>
            </div>

            <div className="flex items-center justify-center gap-2 mb-5">
              <div className='bg-gray-200 w-1/2 h-[1px]'></div>
              <span className="text-gray-500">or</span>
              <div className='w-1/2 bg-gray-200 h-[1px]'></div>
            </div>

            <div className='space-y-2'>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="robert.fox@myemail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
              <div className="text-right text-sm text-blue-600 mt-1 cursor-pointer">
              <Link to='/login/forgotpassword'>
                Forgot password?
              </Link>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onCheckedChange={(checked: boolean) =>
                  setFormData({ ...formData, rememberMe: checked })
                }
              />
              <Label htmlFor="rememberMe">Remember Me</Label>
            </div>

            <Link to={'/dashboard'}>
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-indigo-300 text-white">
              Login
            </Button>
            </Link>
          </form>

          <div className="flex items-center justify-center space-x-6 text-lg">
            <FaGoogle className="cursor-pointer" />
            <FaFacebookF className="cursor-pointer" />
            <FaXTwitter className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
          </div>

          <p className="text-center text-sm">
            Don’t have an account? 
            <Link to='/register'>
              <span className="text-blue-600"> Register now</span>
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

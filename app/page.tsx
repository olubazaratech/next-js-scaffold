"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { useCounterStore } from "@/store/counter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Minus, Mail, User } from "lucide-react";

// Form validation schema using Zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof formSchema>;

export default function Home() {
  const { count, increment, decrement, reset } = useCounterStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call with axios (example endpoint)
      // const response = await axios.post('/api/submit', data);
      
      // For demo purposes, just show success toast
      toast.success(`Form submitted! Welcome, ${data.name}!`);
      resetForm();
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Next.js Scaffold
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A modern scaffold featuring Next.js 15, Shadcn UI, Tailwind, React Hook Form, Zod, Zustand, and more!
          </p>
        </div>

        {/* Zustand Counter Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Zustand State Management Demo</CardTitle>
            <CardDescription>
              Global state management with Zustand
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">
                {count}
              </div>
              <div className="flex gap-2 justify-center">
                <Button onClick={increment} size="lg">
                  <Plus className="mr-2 h-4 w-4" />
                  Increment
                </Button>
                <Button onClick={decrement} variant="outline" size="lg">
                  <Minus className="mr-2 h-4 w-4" />
                  Decrement
                </Button>
                <Button onClick={reset} variant="destructive" size="lg">
                  Reset
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* React Hook Form + Zod Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Form Validation Demo</CardTitle>
            <CardDescription>
              React Hook Form with Zod validation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  {...register("name")}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Form"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Tech Stack Info */}
        <Card>
          <CardHeader>
            <CardTitle>Included Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Next.js 15 (App Router)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>TypeScript</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Tailwind CSS</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Shadcn UI</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>React Hook Form</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Zod Validation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Zustand (State)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Lucide Icons</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>React Toastify</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Axios</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>pnpm Package Manager</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>ESLint</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

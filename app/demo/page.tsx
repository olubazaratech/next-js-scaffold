"use client";

import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import {
  CustomFormInput,
  CustomFormSelect,
  CustomFormTextarea,
} from "@/components/custom";
import { Button } from "@/components/ui/button";

interface FormValues {
  username: string;
  email: string;
  password: string;
  country: string;
  bio: string;
}

const countryOptions = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
];

export default function DemoPage() {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      country: "",
      bio: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <main className="container mx-auto max-w-md py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Custom Form Components Demo</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <CustomFormInput
            control={form.control}
            name="username"
            label="Username"
            placeholder="Enter your username"
            description="This is your public display name."
          />

          <CustomFormInput
            control={form.control}
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            description="We'll never share your email."
          />

          <CustomFormInput
            control={form.control}
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            description="Click the eye icon to show/hide password."
          />

          <CustomFormSelect
            control={form.control}
            name="country"
            label="Country"
            placeholder="Select a country"
            options={countryOptions}
            description="Select your country of residence."
          />

          <CustomFormTextarea
            control={form.control}
            name="bio"
            label="Bio"
            placeholder="Tell us about yourself..."
            description="Brief description for your profile."
            rows={4}
          />

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
}

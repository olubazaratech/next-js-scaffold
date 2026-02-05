"use client";

import * as React from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export interface CustomFormInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<React.ComponentProps<"input">, "name"> {
  control: Control<TFieldValues>;
  name: TName;
  label?: string;
  description?: string;
  inputClassName?: string;
}

function CustomFormInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  description,
  type,
  className,
  inputClassName,
  ...props
}: CustomFormInputProps<TFieldValues, TName>) {
  const [showPassword, setShowPassword] = React.useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <div className="relative">
              <Input
                type={inputType}
                className={cn(isPassword && "pr-10", inputClassName)}
                {...field}
                {...props}
              />
              {isPassword && (
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              )}
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export { CustomFormInput };

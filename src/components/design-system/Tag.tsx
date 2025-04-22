
import React from "react";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

export type TagVariant = 
  | "default" 
  | "primary" 
  | "secondary" 
  | "tertiary" 
  | "success" 
  | "warning" 
  | "error" 
  | "info";

export type TagSize = "sm" | "md" | "lg";

export interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
  size?: TagSize;
  onRemove?: () => void;
  removable?: boolean;
  className?: string;
}

export function Tag({
  children,
  variant = "default",
  size = "md",
  onRemove,
  removable = false,
  className,
  ...props
}: TagProps) {
  const variantClasses = {
    default: "bg-neutral-100 text-neutral-800 dark:bg-neutral-200 dark:text-neutral-900",
    primary: "bg-primary-light/10 text-primary-dark",
    secondary: "bg-secondary-light/10 text-secondary-dark",
    tertiary: "bg-tertiary-light/10 text-tertiary-dark",
    success: "bg-success-light/10 text-success-dark",
    warning: "bg-warning-light/10 text-warning-dark",
    error: "bg-error-light/10 text-error-dark",
    info: "bg-info-light/10 text-info-dark",
  };

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 rounded",
    md: "text-sm px-2.5 py-0.5 rounded-md",
    lg: "text-base px-3 py-1 rounded-md",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium",
        variantClasses[variant],
        sizeClasses[size],
        removable && "pr-1",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {removable && onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className={cn(
            "ml-1 rounded-full focus-ring p-0.5 hover:bg-black/10",
            {
              "h-4 w-4": size === "sm",
              "h-5 w-5": size === "md",
              "h-6 w-6": size === "lg",
            }
          )}
          aria-label="Remove tag"
        >
          <X
            className={cn({
              "h-2 w-2": size === "sm",
              "h-3 w-3": size === "md",
              "h-4 w-4": size === "lg",
            })}
          />
        </button>
      )}
    </span>
  );
}

// Alias Badge = Tag for semantic naming flexibility
export const Badge = Tag;

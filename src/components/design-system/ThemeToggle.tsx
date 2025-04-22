
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "../../lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background p-2.5 text-sm font-medium transition-standard focus-ring",
        className
      )}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      <Sun
        className={cn(
          "h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
          theme === "dark" && "-rotate-90 scale-0"
        )}
      />
      <Moon
        className={cn(
          "absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
          theme === "dark" && "rotate-0 scale-100"
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

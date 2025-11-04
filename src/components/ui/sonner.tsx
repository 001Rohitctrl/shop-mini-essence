import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      position="top-center"
      expand={true}
      richColors
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-2xl group-[.toaster]:backdrop-blur-sm group-[.toaster]:animate-fade-in group-[.toaster]:scale-in",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground group-[.toast]:hover:scale-105 group-[.toast]:transition-transform",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          success: "group-[.toaster]:border-green-500 group-[.toaster]:border-2",
          error: "group-[.toaster]:border-red-500 group-[.toaster]:border-2",
          warning: "group-[.toaster]:border-yellow-500 group-[.toaster]:border-2",
          info: "group-[.toaster]:border-blue-500 group-[.toaster]:border-2",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };

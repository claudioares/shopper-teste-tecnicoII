interface ContainerProps {
  children: React.ReactNode; 
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="min-h-full mx-auto px-4 sm:px-6 lg:px-8 overflow-y-auto">
      {children}
    </div>
  );
}

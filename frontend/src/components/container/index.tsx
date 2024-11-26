interface ContainerProps {
  children: React.ReactNode; // Permite envolver qualquer conteúdo
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

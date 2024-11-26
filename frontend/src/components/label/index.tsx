interface ILabelProps {
    htmlFor: string;
    children: React.ReactNode; // Permite passar conteúdo entre as tags Label
}

export function Label({ htmlFor, children }: ILabelProps) {
    return (
        <label htmlFor={htmlFor} className="text-sm font-medium mb-1 text-white">
            {children}
        </label>
    );
}

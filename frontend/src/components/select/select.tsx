interface SelectProps {
  options: string[];
  onChange: (selectedValue: string) => void;
  placeholder?: string;
}

export function Select({ options, onChange, placeholder = "Selecione uma opção" }:SelectProps) {
  return (
    <div className="w-full max-w-xs">
      <select
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-900"
        onChange={(e) => onChange(e.target.value)}
        defaultValue=""
      >
        <option value="">
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

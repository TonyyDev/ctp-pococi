interface SelectFieldProps {
  label: string;
}

export default function SelectField({ label }: SelectFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <select
        className="
        w-full rounded-xl border border-gray-300
        bg-gray-50 px-4 py-3
        outline-none transition
        focus:border-blue-500
        focus:bg-white
        focus:ring-4
        focus:ring-blue-100
        "
      >
        <option>Seleccione...</option>
      </select>
    </div>
  );
}

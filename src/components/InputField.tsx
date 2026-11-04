type InputFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  supportingText?: string;
  type?: "text" | "email";
};

export function InputField({
  label,
  name,
  placeholder,
  value,
  onChange,
  supportingText,
  type = "text",
}: InputFieldProps) {
  return (
    <label className="field" htmlFor={name}>
      <span className="field-label">{label}</span>
      <input
        className="field-input"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {supportingText ? <span className="field-support">{supportingText}</span> : null}
    </label>
  );
}

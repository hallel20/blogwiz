interface Props {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
}

const Button = ({ className, children, type, disabled = false }: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`bg-blue-600 disabled:bg-slate-400 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

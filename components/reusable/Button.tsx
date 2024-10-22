interface Props {
  className?: string;
  children: React.ReactNode;
  type: "submit" | "reset" | "button" | undefined;
}

const Button = ({ className, children, type }: Props) => {
  return (
    <button
      type={type}
      className={`bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

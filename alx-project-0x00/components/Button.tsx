// components/Button.tsx

interface ButtonProps {
  title: string;
  styles?: string; // optional Tailwind CSS classes
}

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`px-4 py-2 bg-blue-600 text-white font-semibold ${styles}`}>
      {title}
    </button>
  );
};

export default Button;

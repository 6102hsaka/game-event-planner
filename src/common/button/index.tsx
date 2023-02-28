import "./index.scss";

interface Props {
    text: string;
    onClick?: () => void;
}

const Button = ({ text, onClick }: Props) => (
    <button onClick={onClick} className="btn">
        {text}
    </button>
);

export default Button;

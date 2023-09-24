const Button = ({ variant, text, onClick, disabled }) => {
    return (
        <button
            className={`btn btn-sm ${variant} hover:brightness-75`}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default Button;

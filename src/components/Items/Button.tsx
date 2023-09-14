const Button = ({ variant, text }) => {
    return (
        <button className={`btn btn-sm ${variant} hover:brightness-75`}>
            {text}
        </button>
    );
};

export default Button;

const InputBox = ({ id }) => {
    return (
        <div className="flex gap-5 items-center">
            <input
                type="text"
                placeholder="Ketik disini.."
                className="input input-bordered input-sm input-info w-[300px]"
                id={id}
            />
        </div>
    );
};

export default InputBox;

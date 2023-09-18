const InputBox = ({ id, addCLass }) => {
    return (
        <div className={`flex gap-5 items-center ${addCLass}`}>
            <input
                type="text"
                placeholder="Ketik disini.."
                className="input input-bordered input-sm input-info min-w-[300px]"
                id={id}
            />
        </div>
    );
};

export default InputBox;

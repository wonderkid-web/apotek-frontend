const SearchInput = ({ placeholder, filtered }) => {
    return (
        <div className="form-control w-1/2">
            <div className="input-group">
                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={(e) => filtered(e.currentTarget.value)}
                    className="input input-sm input-bordered w-full"
                />
                <button className="btn btn-square btn-sm">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SearchInput;

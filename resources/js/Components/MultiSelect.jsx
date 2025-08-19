export default function MultiSelect({
    options,
    selectedValues,
    onChange,
    placeholder = "Select options",
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleOptionClick = (value) => {
        if (selectedValues.includes(value)) {
            onChange(selectedValues.filter((v) => v !== value));
        } else {
            onChange([...selectedValues, value]);
        }
    };

    const removeOption = (value) => {
        onChange(selectedValues.filter((v) => v !== value));
    };

    const getOptionLabel = (value) => {
        const option = options.find((opt) => opt.value === value);
        return option ? option.label : value;
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Selected tags */}
            {selectedValues.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                    {selectedValues.map((value) => (
                        <div
                            key={value}
                            className="badge badge-primary gap-2 py-3 px-3"
                        >
                            <span className="text-sm font-medium">
                                {getOptionLabel(value)}
                            </span>
                            <button
                                type="button"
                                onClick={() => removeOption(value)}
                                className="btn btn-ghost btn-circle btn-xs ml-1 hover:bg-primary-focus hover:text-primary-content transition-colors"
                                aria-label={`Remove ${getOptionLabel(value)}`}
                            >
                                <svg
                                    className="w-3 h-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Dropdown trigger */}
            <div
                className={`select select-bordered w-full cursor-pointer flex items-center justify-between transition-all duration-200 hover:border-primary focus-within:border-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-opacity-20 ${
                    isOpen
                        ? "border-primary ring-2 ring-primary ring-opacity-20"
                        : ""
                }`}
                onClick={() => setIsOpen(!isOpen)}
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setIsOpen(!isOpen);
                    }
                }}
            >
                <span
                    className={`text-sm ${
                        selectedValues.length === 0
                            ? "text-base-content/50"
                            : "text-base-content font-medium"
                    }`}
                >
                    {selectedValues.length === 0
                        ? placeholder
                        : `${selectedValues.length} role${
                              selectedValues.length !== 1 ? "s" : ""
                          } selected`}
                </span>
                <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>

            {/* Dropdown options */}
            {isOpen && (
                <div className="absolute z-50 w-full mt-2 bg-base-100 border border-base-300 rounded-box shadow-lg max-h-60 overflow-y-auto">
                    <div className="py-1">
                        {options.map((option) => (
                            <div
                                key={option.value}
                                className={`px-4 py-3 cursor-pointer transition-colors duration-150 flex items-center justify-between hover:bg-base-200 ${
                                    selectedValues.includes(option.value)
                                        ? "bg-primary/10 text-primary border-l-4 border-primary"
                                        : "text-base-content"
                                }`}
                                onClick={() => handleOptionClick(option.value)}
                            >
                                <span className="text-sm font-medium">
                                    {option.label}
                                </span>
                                {selectedValues.includes(option.value) && (
                                    <div className="badge badge-primary badge-sm">
                                        <svg
                                            className="w-3 h-3"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

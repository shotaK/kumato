const ModalCloseButton = () => {
  return (
    <button
      className="absolute -top-3 right-2 border-gray-300 p-1 bg-gray-200 hover:text-gray-700 focus:outline-none focus:text-gray-700 shadow rounded-full"
      aria-label="Close"
    >
      <svg
        className="h-4 w-4"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default ModalCloseButton;

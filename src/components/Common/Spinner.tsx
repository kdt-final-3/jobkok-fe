const Spinner = () => {
  return (
    <div className="grid h-screen place-items-center overflow-hidden">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-200 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
};
export default Spinner;

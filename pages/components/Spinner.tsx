function Spinner() {
  return (
    <div className="fixed flex inset-0 z-50	justify-center items-center bg-bl bg-[#000000d2]">
      <div className="lds-ripple">
        <div></div>
        <div></div>
        <h1 className="">
        <h1 className="mt-[8rem] sm:mt-[8rem] text-xl font-bold ">Loading...</h1>
        <h3 className="mt-5">It may take a minute or two ...</h3>
        </h1>
        </div>

     {" "}
    </div>
  );
}

export default Spinner;

const Book = ({ id, title, leftIcon, containerClass, rightIcon, link }) => {
    return (
      <button
        id={id}
        className={
          `group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-zinc-900 px-7 py-3 text-white
          ${containerClass}`}
      >
        {leftIcon}
  
        <span className="relative inline-flex overflow-hidden font-neue text-base">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
            {title}
          </div>
          <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
            {title}
          </div>
        </span>
  
        {rightIcon}
      </button>
    );
  }
  
  export default Book
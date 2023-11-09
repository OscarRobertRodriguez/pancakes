const Header = () => {
  return (
    <nav className="md:container grid items-center justify-items-center w-full p-2 md:p-3  bg-slate-700" >
      <ul className="flex flex-col justify-self-center dir justify-around w-full uppercase text-bold font-bold gap-3  ">
        <li>
          Grand Total: <span>0</span>
        </li>
        <li>
          Cyber: <span>0</span>
        </li>
        <li>
          Model Y: <span>0</span>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

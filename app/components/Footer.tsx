import { Link } from "@remix-run/react";

const Footer = () => {
  return (
    <footer className="grid place-items-center" >
        <p className='uppercase p-1 text-center text-xs font-semibold'>made with <Link className="pl-1" prefetch="viewport" to='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>&#10084;&#65039;</Link></p>
    </footer>
  );
};
export default Footer;

import {Link} from "react-router";

const Menu = () => {
    return (
        <ul className="flex justify-center gap-6">
            <li className="
            group
            inline-block
            rounded
            bg-gradient-to-r
            from-pink-500
            via-red-500
            to-yellow-500
            p-[2px]
            hover:text-white
            focus:outline-none
            focus:ring
            active:text-opacity-75">
                <Link className={'block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent'}
                      to={''}>Home</Link></li>

            <li className="
            group
            inline-block
            rounded
            bg-gradient-to-r
            from-pink-500
            via-red-500
            to-yellow-500
            p-[2px]
            hover:text-white
            focus:outline-none
            focus:ring
            active:text-opacity-75">
                <Link className={'block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent'}
                      to={'users'}>Users</Link></li>
        </ul>
    );
};

export default Menu;
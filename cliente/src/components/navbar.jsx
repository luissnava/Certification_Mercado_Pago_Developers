import React from "react";
import {Navbar, Collapse, Typography, IconButton} from "@material-tailwind/react";
import { Link } from "react-router-dom";
function NavList() {
    return (
        <ul className="flex items-center">
           <li>
           <Typography as="li" color="blue-gray" className="p-1 font-medium">
                <Link to={"/"}>Home</Link>
            </Typography>
           </li>

        </ul>
    );
}

export function NavbarSimple() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return() => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="">
            <div className="flex items-center justify-center text-blue-gray-900">
                <NavList/>
            </div>

        </Navbar>
    );
}

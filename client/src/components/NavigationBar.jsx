import { Link } from "react-router-dom";
import UserDropdown from "./UerDropdown";

const NavigationBar = () => {
    return (
        <nav className="bg-sky-500/50 shadow-md">
            <div className="flex items-center justify-between px-6 py-3">
                {/* Logo / Brand */}
                <Link to="/" className="text-lg font-bold tracking-wide">
                    AMV Logo
                </Link>

                {/* Navigation Links */}
                <ul className="flex gap-6 text-lg font-semibold">
                    <li>
                        <Link
                            to="/patients"
                            className="hover:text-sky-800 transition-colors"
                        >
                            Pacientes
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctors" className="hover:text-sky-800 transition-colors">
                            Médicos
                        </Link>
                    </li>
                    <li>
                        <Link to="/appointments" className="hover:text-sky-800 transition-colors">
                            Citas
                        </Link>
                    </li>
                </ul>

                {/* User Section */}
                <UserDropdown />
            </div>
        </nav>
    );
};

export default NavigationBar;

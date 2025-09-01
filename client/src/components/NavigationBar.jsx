import { Link } from "react-router-dom";

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
                <div className="flex items-center gap-2">
                    <img
                        src="/src/assets/user-avatar.svg"
                        alt="Usuario"
                        className="w-8 h-8 rounded-full border border-gray-300"
                    />
                    <span className="text-sm font-medium">medico@amv.com</span>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;

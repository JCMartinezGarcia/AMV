const NavigationBar = () => {
    return (
        <div>
            <nav>
                <div className="flex justify-between p-4 bg-sky-500/50">
                    <span className="text-lg font-bold">AMV Logo</span>
                    <span className="text-xl font-extrabold tracking-widest">Asistente Médico Virtual</span>
                    <div className="flex">
                        <span>
                            <img
                                src="src/assets/user-avatar.svg"
                                height={30}
                                width={35}
                            />
                        </span>
                        <span className="pt-2">medico@amv.com</span>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavigationBar;
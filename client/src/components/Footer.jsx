const Footer = () => {
    return (
        <footer className="bg-sky-600 text-white py-8 px-6 lg:px-12 mt-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Left: copyright */}
                <p className="text-sm opacity-80 mb-2 md:mb-0">
                    © 2024 AMV. All rights reserved.
                </p>

                {/* Right: links */}
                <div className="flex gap-4 text-sm">
                    <a href="/privacy" className="hover:underline">
                        Privacy Policy
                    </a>
                    <a href="/terms" className="hover:underline">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

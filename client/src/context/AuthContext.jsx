import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // <-- new
    const navigate = useNavigate();

    // Check if user is logged in on mount
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = localStorage.getItem("token");
                if (token) {
                    const response = await axios.get("auth/me", {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    setUser(response.data.user);
                }
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    const login = async (email, password) => {
        const response = await axios.post("auth/login", { email, password });
        const { token, user } = response.data;
        localStorage.setItem("token", token);
        setUser(user);
        navigate("/");
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
    };

    const register = async (email, password) => {
        await axios.post("auth/register", { email, password });
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

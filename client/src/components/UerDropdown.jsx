import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { useAuth } from "../context/AuthContext";

const UserDropdown = () => {
    const { user, logout } = useAuth();

    return (
        <div className="flex items-center gap-2">
            <img
                src="/src/assets/user-avatar.svg"
                alt="Usuario"
                className="w-8 h-8 rounded-full border border-gray-300"
            />
            <Dropdown>
                <DropdownTrigger>
                    <span className="text-sm font-medium">medico@amv.com</span>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="delete" className="text-danger" color="danger" onPress={logout}>
                        Cerrar sesión
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}

export default UserDropdown;
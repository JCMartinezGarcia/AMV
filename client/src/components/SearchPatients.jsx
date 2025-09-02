import { useState, useEffect } from "react";
import { Input } from "@heroui/react";
import axios from "axios";

const SearchPatients = ({ foundPatients, reloadTable }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleError = (message, error) => {
        console.error(`${message}:`, error);
    };

    // Debounce the search to avoid too many requests
    useEffect(() => {
        if (!searchTerm) {
            reloadTable();
            return;
        }

        const delayDebounce = setTimeout(() => {
            searchPatients(searchTerm);
        }, 500); // 500ms delay

        return () => clearTimeout(delayDebounce);
    }, [searchTerm]);

    const searchPatients = async (param) => {
        try {
            const response = await axios.post("patients/search", { searchParameter: param });
            if (response.data) {
                foundPatients(response.data);
            }
        } catch (error) {
            handleError("Server Error", error);
        }
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <Input
                label="Buscar pacientes"
                type="text"
                size="sm"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Ingresa nombre del paciente"
            />
        </div>
    );
};

export default SearchPatients;

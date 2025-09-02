import { Input } from "@heroui/react";
import axios from "axios";

const SearchPatients = ({ foundPatients }) => {


    const handleError = (message, error) => {
        console.error(`${message}:`, error);
    }

    const searchPatients = async (searchParameter) => {
        try {
            const response = await axios.post('patients/search', { searchParameter });
            const { data } = response;
            if (data.length) {
                foundPatients(data);
            }
        } catch (error) {
            handleError('Server Error:', error);
        }
    }

    const handleSearchPatients = (event) => {
        const value = event.target.value;
        searchPatients(value);
    }

    return (
        <div>
            <Input
                label="Buscar pacientes"
                type="text"
                size="sm"
                onChange={handleSearchPatients} />
        </div>
    );
}

export default SearchPatients;
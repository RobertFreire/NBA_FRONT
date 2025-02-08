import { StyledSelect } from "./styles";

interface SelectProps {
    options: string[];
    onChange: (value: string) => void;
}

const Select = ({ options, onChange }: SelectProps) => {

    return (
        <StyledSelect onChange={(e) => onChange(e.target.value)}>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </StyledSelect>
    );
};

export default Select;
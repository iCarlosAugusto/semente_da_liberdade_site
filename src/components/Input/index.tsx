import { Input as InputChakra } from '@chakra-ui/react'

interface InputComponentProps {
    placeholder?: string,
    margin?: number,
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    padding?: number,
    variant?: 'outline' | 'flushed'
};

function InputComponent({ ...props }: InputComponentProps) {
    return (
        <InputChakra {...props} />
    );
}

export { InputComponent }
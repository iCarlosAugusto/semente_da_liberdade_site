import { Button as ButtonChakra } from '@chakra-ui/react'

interface ButtonComponentProps {
    value: string,
    margin?: number,
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    padding?: number,
    variant?: "solid" | "outline" | "link"
    onClick?: () => void,
};

function ButtonComponent({ value, ...props }: ButtonComponentProps) {
    return (
        <ButtonChakra {...props} colorScheme='green'>
            {value}
        </ButtonChakra>
    );
}

export { ButtonComponent }
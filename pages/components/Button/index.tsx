import { Button as ButtonChakra } from '@chakra-ui/react'

interface ButtonComponentProps {
    value: string,
    margin?: number,
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    padding?: number,
};

function ButtonComponent({ value, ...props }: ButtonComponentProps) {
    return (
        <ButtonChakra {...props}>
            {value}
        </ButtonChakra>
    );
}

export { ButtonComponent }
import { Text as TextChakra } from '@chakra-ui/react'

interface TextComponentProps {
    text: string,
    fontWeight?: 'bold',
    color?: string,
    fontSize?: '6xl'| '5xl' | '3xl' | 'xl' | number,
    margin?: number,
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    padding?: number,
    borderBottomWidth?: number,
    borderBottomColor?: string,
};

function TextComponent({ text, ...props }: TextComponentProps) {
    return (
        <TextChakra {...props}>
            {text}
        </TextChakra>
    );
}

export { TextComponent }
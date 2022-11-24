import { Text as TextChakra } from '@chakra-ui/react'

interface TextComponentProps {
    text: string,
    bold?: boolean,
    fontSize?: '5xl' | '3xl' | 'xl',
    margin?: number,
    padding?: number,
};

function TextComponent({ text, ...props }: TextComponentProps) {
    return (
        <TextChakra {...props}>
            {text}
        </TextChakra>
    );
}

export { TextComponent }
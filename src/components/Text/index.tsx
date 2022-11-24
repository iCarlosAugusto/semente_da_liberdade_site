import { Text as TextChakra } from '@chakra-ui/react'

interface TextComponentProps {
    text: string,
    bold?: boolean,
    color?: string,
    fontSize?: '5xl' | '3xl' | 'xl',
    margin?: number,
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
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
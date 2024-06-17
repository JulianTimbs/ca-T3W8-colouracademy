import { useCurrentThemeData } from "../contexts/currentThemeContext"
import SyntaxHighlighter from "react-syntax-highlighter";

export function CssCodeExport(){

    let currentTheme = useCurrentThemeData();

    const buildVariableString = () => {
        // Iterate over all colour objects in currentTheme
        // and build a CSS snippet as a string
        let codeAsString = "";
        codeAsString += `:root {\n`;

        currentTheme.colours.forEach(colourObj => {
            codeAsString += `\t--${colourObj.themeName}-${colourObj.strength}: ${colourObj.hex};\n`
        })

        codeAsString += `}`;
        return codeAsString;
    }

    return (
        <div>
            <h1>Your CSS code is here...</h1>

            <SyntaxHighlighter>
                {buildVariableString()}
            </SyntaxHighlighter>

            <button onClick={() => navigator.clipboard.writeText(buildVariableString())}>
                Copy code to clipboard
            </button>

        </div>
    )
}
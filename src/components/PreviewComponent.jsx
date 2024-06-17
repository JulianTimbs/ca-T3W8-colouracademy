import "../styles/PreviewCard.css"

export function PreviewCard({colourEntry, textColour}){
    return <div className="previewCard" style={{backgroundColor: colourEntry.hex, color: textColour}}>
        <h1>Preview Content Card</h1>
        <h5>Subtitle of Card</h5>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quas ut hic placeat pariatur beatae nulla, ipsa quo deserunt doloremque facilis temporibus enim corporis repudiandae voluptates provident nisi ad repellat!</p>

        <button>Example Button</button>
    </div>
}
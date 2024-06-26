import { useEffect, useState } from "react";
import { useBaseColourGlobalData, useBaseColourGlobalDispatch } from "../contexts/baseColourContext";
import { Sketch } from "@uiw/react-color";
import { useCurrentThemeData } from "../contexts/currentThemeContext";
import { ColourBlock } from "../components/ColourBlock";
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import { CssCodeExport } from "../components/CssCodeExport";
import { PreviewCard } from "../components/PreviewComponent";
import "../styles/GeneratorPage.css"




export default function GeneratorPage(){
    const [modal, setModal] = useState(false);

    let baseColourGlobal = useBaseColourGlobalData();

    let setBaseColourGlobal = useBaseColourGlobalDispatch();

    let currentTheme = useCurrentThemeData();

    let [formBaseColour, setFormBaseColour] = useState(baseColourGlobal);

    useEffect(() => {
        setFormBaseColour(baseColourGlobal)
    }, [baseColourGlobal]);

    useEffect(() => {
        setBaseColourGlobal(formBaseColour);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formBaseColour])

    return(
        <div>
            <PureModal
                header={currentTheme.displayName}
                footer={
                    <div>
                    <h6>Generated colours</h6>
                    </div>
                }
                isOpen={modal}
                closeButton="X"
                closeButtonPosition="bottom"
                onClose={() => {
                    setModal(false);
                    return true;
                }}
                >
                <CssCodeExport />
            </PureModal>
            
            <div className="row">
                <h1>{formBaseColour}</h1>
                <Sketch color={formBaseColour} onChange={(colour) => setFormBaseColour(colour.hex)} />
                <button onClick={() => setModal(!modal)}>
                    Toggle Modal
                </button>
            </div>

            <div className="row">
                {currentTheme.colours?.map((colourEntry, index) => {
                    return <PreviewCard key={currentTheme.name + index} textColour="black" colourEntry={colourEntry} />
                })}
            </div>

            <div className="row">
                {currentTheme.colours?.map((colourEntry, index) => {
                    return <PreviewCard key={currentTheme.name + index} textColour="white" colourEntry={colourEntry} />
                })}
            </div>

            <div className="row">
                {currentTheme.colours?.map((colourEntry, index) => {
                    return <ColourBlock key={currentTheme.name + index} colourEntry={colourEntry} />
                })}
            </div>

            
        
        </div>
    )
}
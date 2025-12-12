import useWindowStore from "#store/window.js";
import {Maximize2, Minus, X} from "lucide-react";

const WindowControls = ({target}) => {
    const {closeWindow} = useWindowStore();
    return (
        <div id="window-controls">
            <div className="close" onClick={() => closeWindow(target)}>
                <X className="text-red-900" size={10} strokeWidth={5}/>
            </div>
            <div className="minimize">
                <Minus className="text-yellow-900" size={10} strokeWidth={5}/>
            </div>
            <div className="maximize">
                <Maximize2 className="text-green-900 rotate-90" size={9} strokeWidth={4}/>
            </div>
        </div>
    );
};
export default WindowControls;

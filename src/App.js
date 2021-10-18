import Navbar from "./components/Navbar";
import {IoMdFlame} from "react-icons/io"
import {MdOutlineComputer, MdBiotech} from "react-icons/md"
import {HiPlus} from "react-icons/hi"

function App() {
    return (
        <div className="flex flex-col justify-center">
            <Navbar/>
            <div
                className={"body"}>
                <p className={"head"}>Womit haben Sie ein Problem?</p>
                <div className={"buttongrid"}>
                    <div
                        className={"button"}>
                        <p className={"text-center"}><MdOutlineComputer className={"inline h-16 w-16"}/></p>
                        <p className={"text-xl font-semibold"}>Computer</p>
                    </div>
                    <div
                        className={"button"}>
                        <p className={"text-center"}><IoMdFlame className={"inline h-16 w-16"}/></p>
                        <p className={"text-xl font-semibold"}>Heizung</p>
                    </div>
                    <div
                        className={"button"}>
                        <p className={"text-center"}><MdBiotech className={"inline h-16 w-16"}/></p>
                        <p className={"text-xl font-semibold"}>Medizintechnik</p>
                    </div>
                    <div
                        className={"button"}>
                        <p className={"text-center"}><HiPlus className={"inline h-16 w-16"}/></p>
                        <p className={"text-xl font-semibold"}>Sonstiges</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

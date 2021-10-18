import Navbar from "./components/Navbar";
import {IoMdFlame} from "react-icons/io"
import {MdOutlineComputer, MdBiotech} from "react-icons/md"
import {HiPlus} from "react-icons/hi"
import Button from "./components/Button";

function App() {
    return (
        <div className="flex flex-col justify-center">
            <Navbar/>
            <div
                className={"body"}>
                <p className={"head"}>Womit haben Sie ein Problem?</p>
                <div className={"buttongrid"}>
                    <Button icon={<MdOutlineComputer className={"inline h-16 w-16"}/>} text={"Computer"}/>
                    <Button icon={<IoMdFlame className={"inline h-16 w-16"}/>} text={"Heizung"}/>
                    <Button icon={<MdBiotech className={"inline h-16 w-16"}/>} text={"Medizintechnik"}/>
                    <Button icon={<HiPlus className={"inline h-16 w-16"}/>} text={"Sonstiges"}/>
                </div>
            </div>
        </div>
    );
}

export default App;

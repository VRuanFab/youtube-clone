import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { BsPersonSquare } from "react-icons/bs";
import { LuHistory } from "react-icons/lu";
import { CgPlayButtonR } from "react-icons/cg";
import { GoClock } from "react-icons/go";
import { HiMiniScissors } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa6";

function SideBar({isOpen}) {

    const iconsAlign = ["grid justify-center hover:bg-white/15 p-2 hover:cursor-pointer rounded-md py-4 w-16", 'text-[21px] place-self-center', "text-[12px] mt-[5px]"]

    const iconsmain = ["flex p-2 hover:bg-neutral-800 rounded-xl", 'text-[20px] place-self-center mr-5']

    if(isOpen){
    return (
        <div className="sticky top-0 left-0 ml-2  min-w-52">
            <div className="">
                <div className="grid border-b-[1px] border-white/15 pb-2">
                    <div className="flex p-2 hover:bg-neutral-800 rounded-xl"> <MdHomeFilled className={iconsmain[1]}/> inicio</div>
                    <div className="flex p-2 hover:bg-neutral-800 rounded-xl"> <SiYoutubeshorts className={iconsmain[1]}/> shorts</div>
                    <div className="flex p-2 hover:bg-neutral-800 rounded-xl"> <BsCollectionPlay className={iconsmain[1]}/> Inscrições</div>
                </div>
                <div className="grid border-b-[1px] border-white/15 pt-2 pb-2">
                    <div className={iconsmain[0]}> <BsPersonSquare className={iconsmain[1]}/> Seu Canal</div>
                    <div className={iconsmain[0]}> <LuHistory className={iconsmain[1]}/> Histórico</div>
                    <div className={iconsmain[0]}> <CgPlayButtonR className={iconsmain[1]}/> Seus Vídeos</div>
                    <div className={iconsmain[0]}> <GoClock className={iconsmain[1]}/> Assistir mais tarde</div>
                    <div className={iconsmain[0]}> <HiMiniScissors className={iconsmain[1]}/> Seus clipes</div>
                    <div className={iconsmain[0]}> <FaChevronDown className={iconsmain[1]}/> Mostrar mais</div>
                </div>
                <div className="grid border-b-[1px] border-white/15 pt-2 pb-2">
                    <div className={iconsmain[0]}>channel</div>
                    <div className={iconsmain[0]}>channel</div>
                    <div className={iconsmain[0]}>channel</div>
                    <div className={iconsmain[0]}>channel</div>
                    <div className={iconsmain[0]}>channel</div>
                    <div className={iconsmain[0]}>channel</div>
                </div>
            </div>
        </div>
    )}
    else {
        return(
            <div className="border-1 grid xl:w-[2rem] 2xl:w-[4.5rem] ml-[6px]">
                <div className="space-y-1">

                    <div className={iconsAlign[0]}>
                        <MdHomeFilled className={iconsAlign[1]}/>
                        <span className={iconsAlign[2]}>Inicio</span> 
                    </div>

                    <div className="grid justify-center hover:bg-white/15 p-2 hover:cursor-pointer rounded-md py-4 w-16">
                        <SiYoutubeshorts className={iconsAlign[1]}/>
                        <span className={iconsAlign[2]}> Shorts </span>
                    </div>

                    <div className={iconsAlign[0]}>
                        <BsCollectionPlay className={iconsAlign[1]}/>
                        <span className={iconsAlign[2]}> Inscrições </span>
                    </div>
                    
                    <div className={iconsAlign[0]}>
                        <MdOutlineVideoLibrary className={iconsAlign[1]}/>
                        <span className={iconsAlign[2]}> Você </span>
                    </div>

                </div>
            </div>
        )
    };
}

export default SideBar;
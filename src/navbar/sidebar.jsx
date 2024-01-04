import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";

function SideBar() {

    const iconsAlign = ["grid justify-center hover:bg-white/15 p-3 hover:cursor-pointer rounded-md", 'text-2xl place-self-center', "text-[12px] mt-[5px]"]

    return (
        <div className="border-1 grid h-screen w-[4.5rem]">
            <div className="mt-3 justify-self-center space-y-3">

                <div className={iconsAlign[0]}>
                    <MdHomeFilled className={iconsAlign[1]}/>
                    <span className={iconsAlign[2]}>Inicio</span> 
                </div>

                <div className={iconsAlign[0]}>
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
    );
}

export default SideBar;
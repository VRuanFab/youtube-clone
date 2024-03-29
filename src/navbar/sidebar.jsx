import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";

function SideBar() {

    const iconsAlign = ["grid justify-center hover:bg-white/15 p-3 hover:cursor-pointer rounded-md", 'text-2xl place-self-center', "text-[12px] mt-[5px]"]

    return (
        <div>
            <div className="grid border-b-2">
                <div className="flex"> <MdHomeFilled className={iconsAlign[1]}/> inicio</div>
                <div className="flex"> <SiYoutubeshorts className={iconsAlign[1]}/> shorts</div>
                <div className="flex"> <BsCollectionPlay className={iconsAlign[1]}/> Inscrições</div>
            </div>
            <div className="grid border-b-2">
                <div className="flex">Seu Canal</div>
                <div className="flex">Histórico</div>
                <div className="flex">Seus Vídeos</div>
                <div className="flex">Assistir mais tarde</div>
                <div className="flex">Seus clipes</div>
                <div className="flex">Mostrar mais</div>
            </div>
            <div className="grid border-b-2">
                <div className="flex">channel</div>
                <div className="flex">channel</div>
                <div className="flex">channel</div>
                <div className="flex">channel</div>
                <div className="flex">channel</div>
                <div className="flex">channel</div>
            </div>


        {/* <div className="border-1 grid h-screen xl:w-[2rem] 2xl:w-[4.5rem] mr-2">
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
        </div> */}

        </div>
        
        
    );
}

export default SideBar;
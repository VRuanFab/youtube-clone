//icons
import { RxHamburgerMenu } from "react-icons/rx";
import { ImYoutube2 } from "react-icons/im";
import { FaMicrophone } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

//react
import ProfileModal from "../components/modal_profile/profile";
import { useState } from "react";

function NavBar() {

    const username = 'Nome de Usuário'

    const [profile, openProfile] = useState(false)

    return (
        <div className="flex">
            <div className="flex w-screen">

                <div className="flex">
                    <RxHamburgerMenu className="ml-[1.1rem] place-self-center rounded-full w-10 h-10 p-2
                    hover:bg-white/15 hover:cursor-pointer"/>
                    <ImYoutube2 className="ml-[2rem] text-7xl place-self-center transition-colors hover:transition-colors 
                    hover:text-red-500 hover:cursor-pointer"/>
                </div>

                <div className="flex ml-[27%]">
                    <input type="text" id="pesquisa" placeholder="não funciona" className=" place-self-center
                    bg-black border-[0.8px] border-white/15 rounded-l-full indent-[0.8rem] pl-[4px] text-pretty w-[26rem] h-[2.5rem]
                    ring-0 outline-0 focus:border-white/35"/>
                    <IoIosSearch className="w-10 h-[2.56rem] p-[0.3rem] pr-[0.6rem] bg-white/15 place-self-center rounded-r-full 
                    hover:cursor-pointer hover:bg-white/15"/>
                    <FaMicrophone className="place-self-center rounded-full w-10 h-10 p-[0.6rem] hover:cursor-pointer bg-white/15 ml-3
                    hover:bg-white/25"/>
                </div>

                <div className="flex self-center ml-[27%] space-x-2">
                    <AiOutlineVideoCameraAdd className="w-10 h-10 p-2 rounded-full hover:cursor-pointer hover:bg-white/15"/>
                    <FaRegBell className="w-10 h-10 p-2 rounded-full hover:cursor-pointer hover:bg-white/15"/>
                    <div className="w-fit h-fit rounded-full hover:bg-white/15 hover:cursor-pointer">
                        <FaRegUser className="w-10 h-10 p-2" onClick={() => {openProfile(true)}}/>
                    </div>
                </div>

                <ProfileModal isOpen={profile}>
                        <div className="flex h-24 border-b-[1px] p-3">
                            <div className="">
                                <FaRegUser className="rounded-full w-10 h-10 mr-3 mt-4"/>
                            </div>

                            <div className="mt-3 grid">
                                {username}
                                <label>Acessar meu canal</label>
                            </div>
                        </div>

                        <div className="p-3 border-b-[1px] pb-5">
                            <div className="grid space-y-4">
                                <label className="flex"><FaGoogle className="text-[22px] mr-7"/>Conta do Google</label>
                                <label className="flex"><FaGoogle className="text-[22px] mr-7"/>Alternar Conta</label>
                                <label className="flex"><FaGoogle className="text-[22px] mr-7"/>Sair</label>
                            </div>
                        </div>

                        <div className="p-3">
                            <div className="grid space-y-4">
                                <label className="flex"><FaGoogle className="text-[22px] mr-7"/>YouTube Studio</label>
                                <label className="flex"><FaGoogle className="text-[22px] mr-7"/>Compras e Assinaturas</label>
                            </div>
                        </div>
                    
                </ProfileModal>
            </div>
        </div>
    );
}

export default NavBar;
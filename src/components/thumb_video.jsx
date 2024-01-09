
function Thumb(thumb, icon, title, user, visu, time) {
    return (
    <div className="font-semibold text-[18px] relative">
        <div className="grid">
            <img src={thumb} className="w-[21rem] rounded-md hover:cursor-pointer"/>
            <div className="w-[21rem] max-h-20 mt-2 flex">
                <img src={icon} className="w-[2.3rem] h-[2.3rem] rounded-full mr-3 hover:cursor-pointer"/>
                    <div>
                        <div className="w-[17rem] text-wrap hover:cursor-pointer">{title}</div>
                        <div className="text-[12px] text-white/65 hover:cursor-pointer">{user}</div>
                        <div className="text-[12px] text-white/65 hover:cursor-pointer">{visu} visualizações • há {time}</div>
                    </div>
            </div>
        </div>
    </div>
    );
}

export default Thumb;
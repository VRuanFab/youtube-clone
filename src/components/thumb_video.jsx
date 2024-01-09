
function Thumb(thumb, icon, title, user, visu, time) {
    return (
    <div className="font-semibold text-[18px] relative">
        <div className="grid">
            <img src={thumb} className="w-[21rem] rounded-md"/>
            <div className="w-[21rem] max-h-20 mt-2 flex">
                <img src={icon} className="w-[2.3rem] h-[2.3rem] rounded-full mr-3"/>
                    <div>
                        <div className="w-[17rem] text-wrap">{title}</div>
                        <div className="text-[12px] text-white/65">{user}</div>
                        <div className="text-[12px] text-white/65">{visu} visualizações • há {time}</div>
                    </div>
            </div>
        </div>
    </div>
    );
}

export default Thumb;
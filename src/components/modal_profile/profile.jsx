
function ProfileModal({isOpen, children}) {

    if(isOpen){
    return (
        <div className="fixed top-16 right-6 z-10 bg-white/15 w-80 space-y-2 rounded-md">
            {children}
        </div>
    )}
}

export default ProfileModal;
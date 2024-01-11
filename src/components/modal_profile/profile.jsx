
function ProfileModal({isOpen, children}) {

    if(isOpen){
    return (
        <div className="fixed top-16 right-6 z-10 bg-white/15 w-72 space-y-1 rounded-md">
            {children}
        </div>
    )}
}

export default ProfileModal;
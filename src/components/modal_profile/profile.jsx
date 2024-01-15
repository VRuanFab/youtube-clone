
function ProfileModal({isOpen, children}) {

    if(isOpen){
    return (
        <div className="fixed top-16 right-6 w-72 space-y-1 rounded-md bg-neutral-800">
            {children}
        </div>
    )}
}

export default ProfileModal;
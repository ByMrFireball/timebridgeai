export default function Modal({open, onClose, children}){
    return(
        //Fondo
        <div onClick={onClose} className={`fixed inset-0 flex items-center justify-center
        transition-colors first-letter ${open ? "visible bg-black/20" : "invisible"}`}>

            {/* Modal */}
            <div className={`
            bg-gray-700 rounded-xl shadow p-6 transition-all 
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0 "}
            `}>
                

                
            {children}
            </div>

        </div>

    )
}
const Modal = ({isActive, onClose, src}) => {
    if (!isActive) return null
    return ( 
    <div className="w-screen h-screen fixed top-0 left-0 z-10 bg-[rgba(0,0,0,.5)] text-white flex justify-center items-center" >
        <p onClick={onClose} className="font-bold absolute top-1 right-1 bg-[#ff4343] px-3 py-4 rounded hover:opacity-80 cursor-pointer">Close</p>
        <iframe className="w-11/12 aspect-video max-w-screen-2xl xl:w-3/4" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowFullScreen></iframe>
    </div> );
}
 
export default Modal;
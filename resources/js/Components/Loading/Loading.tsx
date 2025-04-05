import './Loading.css';
const Loading = () => {
    return (
        <div className="flex items-center justify-center h-48">
            <div className="relative flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-3 h-3 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-3 h-3 rounded-full bg-primary animate-bounce"></div>
            </div>
        </div>
    )
}
export default Loading;
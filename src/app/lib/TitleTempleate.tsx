import TitleProps from "../Interfaces/Title";

export default function TitleTempleate({ title }: TitleProps) {
    return (
        <div className="flex items-center ml-24 lg:ml-72 mb-4">
            <div className="bg-gray-900 lg:w-96 w-24 h-1"></div>
            <h1 className="text-3xl mx-2">{title}</h1>
            <div className="bg-gray-900 lg:w-96 w-24 h-1"></div>
        </div>
    )
}
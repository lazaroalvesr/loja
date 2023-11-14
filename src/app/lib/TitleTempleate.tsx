import TitleProps from "../Interfaces/Title";

export default function TitleTempleate({ title }: TitleProps) {
    return (
        <div className="flex items-center lg:ml-14 ml-28 m-auto justify-center mt-4 mb-8">
            <div className="bg-gray-900 lg:w-96 w-24 h-1"></div>
            <h1 className="text-3xl mx-2">{title}</h1>
            <div className="bg-gray-900 lg:w-96 w-24 h-1"></div>
        </div>
    )
}
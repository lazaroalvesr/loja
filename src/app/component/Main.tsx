import Image from "next/image";

export default function Main() {
    return (
        <div className="w-full">
            <Image
                src={'/img/banner.png'}
                alt="banner"
                width={990}
                height={120}
                className="w-full"
            />
        </div>
    )
}
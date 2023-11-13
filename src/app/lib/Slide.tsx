import Image from "next/image";
import SlideProps from "../Interfaces/Slide";

export default function Slide({ img }: SlideProps) {
    return (
        <div>
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
import Slide from "../lib/Slide";
import TempleateProduto from "./TempleateProdutos";

export default function Main() {
    return (
        <div>
            <div className="w-full">
                <Slide
                    img="/img/banner.png"
                    alt="Banner"
                />
            </div>
            <TempleateProduto />
        </div>
    )
}
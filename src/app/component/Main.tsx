import TempleateSlide from '../lib/TempleateSlide';
import TempleateProduto from "./TempleateProdutos";

export default function Main() {
    return (
        <div>
            <div>
                <TempleateSlide />
            </div>
            <div className='-ml-28'>
                <TempleateProduto />
            </div>
        </div >
    )
}
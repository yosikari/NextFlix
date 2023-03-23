import { GiCheckMark, GiCancel } from "react-icons/gi";
import { Product } from "@stripe/firestore-stripe-payments";

interface Props {
    products: Product[];
    // selectedPlan: Product[] | null[];
    //TODO err Property 'id' does not exist on type 'Product[]' 
    selectedPlan: any
}

function Table({ products, selectedPlan }: Props) {
    return <table>
        <tbody className="divide-y divide-[gray]">
            <tr className="tableRow">
                <td className="tableDataTitle">Monthly price</td>
                {products.map((product) => (
                    <td key={product.id}
                        className={`tableDataFeature ${selectedPlan?.id === product.id ? "text-[#e50914]" : "text-[gray]"}`}>
                        ILS {product.prices[0].unit_amount! / 100}
                    </td>
                ))}
            </tr>

            <tr className="tableRow">
                <td className="tableDataTitle">Video quality</td>
                {products.map((product) => (
                    <td key={product.id}
                        className={`tableDataFeature ${selectedPlan?.id === product.id ? "text-[#e50914]" : "text-[gray]"}`}>
                        {product.metadata.videoQuality}
                    </td>
                ))}
            </tr>

            <tr className="tableRow">
                <td className="tableDataTitle">Resolution</td>
                {products.map((product) => (
                    <td
                        className={`tableDataFeature ${selectedPlan?.id === product.id ? 'text-[#E50914]' : 'text-[gray]'}`}
                        key={product.id}
                    >
                        {product.metadata.resolution}
                    </td>
                ))}
            </tr>
            <tr className="tableRow">
                <td className="tableDataTitle">
                    Watch on your TV, computer, mobile phone and tablet
                </td>
                {products.map((product) => (
                    <td
                        className={`tableDataFeature ${selectedPlan?.id === product.id ? 'text-[#E50914]' : 'text-[gray]'}`}
                        key={product.id}
                    >
                        {product.metadata.portability === "true" ?
                            <GiCheckMark className="inline-block h-6 w-6" /> :
                            <GiCancel className="inline-block h-6 w-6" />
                        }
                    </td>
                ))}
            </tr>
        </tbody>

    </table>
}

export default Table
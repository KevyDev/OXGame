import { useState } from "react"
import "./style/table.scss"

function Table({ data, current, update, winner }) {
    let [hoverI, setHover] = useState("")

    winner && hoverI !== "" && setHover("")

    return (
        <section className="table-container">
            <ul>
                {data.map((c, i) =>
                    <li
                        key={"c-" + i}
                        onClick={() => c === "" && update(i)}
                        onMouseEnter={() => c === "" && setHover(i)}
                        onMouseLeave={() => c === "" && setHover("")}
                    >
                        <span className={c}>{c === "" && hoverI === i ? current : c}</span>
                    </li>
                )}
            </ul>
        </section>
    )
}

export default Table
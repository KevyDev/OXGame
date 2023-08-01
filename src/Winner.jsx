import "./style/winner.scss"

function Winner({ winner, restart }) {
    return (
        <section className="winner-container" onClick={restart}>
            {winner !== "N" ?
                <h1><span className={winner}>{winner}</span> wins!</h1> :
                <h1>Nobody wins :(</h1>
            }
        </section>
    )
}

export default Winner
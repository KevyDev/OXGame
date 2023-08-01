import { Component } from "react"
import { BrowserRouter } from "react-router-dom"
import "./style/app.scss"
import Winner from "./Winner"
import Table from "./Table"

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loaded: false,
			tableData: [],
			current: "X",
			winner: false
		}
	}

	componentDidMount() {
		this.init()
	}

	init = () => this.setState({
		loaded: true,
		tableData: [
			"", "", "",
			"", "", "",
			"", "", ""
		],
		current: "X",
		winner: false
	})

	updateTable = i => {
		if (!this.state.winner) {
			let newTable = this.state.tableData,
				winner = false

			newTable[i] = this.state.current

			winner = this.checkTable(newTable)

			this.setState({
				tableData: newTable,
				current: this.state.current === "X" ? "O" : "X",
				winner: winner
			})
		}
	}

	checkTable = table => {
		let combinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		],
			winner = false

		combinations.some(combi => ["X", "O"].some(possWinner => {
			if (combi.every(e => table[e] === possWinner)) {
				winner = possWinner
				return true
			}
		}))

		if (!winner && table.every(e => e !== "")) {
			return "N"
		}

		return winner
	}

	render() {
		return (
			<BrowserRouter>
				{this.state.winner && <Winner winner={this.state.winner} restart={this.init} />}
				{this.state.loaded && <Table
					data={this.state.tableData}
					current={this.state.current}
					update={this.updateTable}
					winner={this.state.winner}
				/>}
			</BrowserRouter>
		)
	}
}

export default App
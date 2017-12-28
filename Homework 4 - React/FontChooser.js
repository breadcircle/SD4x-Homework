class FontChooser extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			initialSize: this.props.size,
			size: this.props.size,
			bold: this.props.bold,
			isHidden: true,
			color: "black",
			style: {
				fontSize: this.state.size,
				fontWeight: this.state.bold ? "bold" : "normal",
				color: this.state.color
			}
		}
	}

	revealSettings = () => {
		this.setState({ isHidden: !this.state.isHidden })
	}

	makeBold = () => {
		this.setState({ bold: !this.state.bold })
	}

	makeFontSmaller = () => {
		if (this.state.size != this.props.min) {
			this.setState({ size: this.state.size - 1, color: "black" })
		} else {
			this.setState({color: "red"})
		}
	}

	makeFontBigger = () => {
		if (this.state.size != this.props.max) {
			this.setState({ size: this.state.size + 1, color: "black" })
		} else {
			this.setState({color: "red"})
		}
	}

	resetFont = () => {
		this.setState({size: this.state.initialSize });
	}

	render() {

		return (
			<div>
				<input type="checkbox" id="boldCheckbox" hidden={this.state.isHidden} onclick={this.makeBold} />
				<button id="decreaseButton" hidden={this.state.isHidden} onclick={this.makeFontSmaller}>-</button>
				<span id="fontSizeSpan" hidden={this.state.isHidden}>{this.state.size}</span>
				<button id="increaseButton" hidden={this.state.isHidden} onclick={this.makeFontBigger}>+</button>
				<span id="textSpan" ondblclick={this.resetFont} onclick={this.revealSettings} style={this.state.style}>{this.props.text}</span>
			</div>
		);
	}
}


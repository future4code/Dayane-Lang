import React, {Component} from 'react'
import './SecaoComentario.css'

//Implementação Exercício 4

export class SecaoComentario extends Component {
	state = {
		valorInputComentario: ""
	}
	onChangeComentario = (event)  => {
		this.setState({valorInputComentario: event.target.value})
		console.log(event.target.value)
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.valorInputComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}

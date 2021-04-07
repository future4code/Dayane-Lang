import React, { useState } from 'react';
import styled from "styled-components";

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	const [inputValue, setInputValue] = useState("") 		//Exerc.19

	const onChangeComentario = (event) => {
		setInputValue(event.target.value)					//Exerc.19

	};

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={inputValue} 						// Exerc.19
				onChange={onChangeComentario}
			/>
			<button onClick={() => 
				{ props.enviarComentario(inputValue) }} >Enviar
			</button> 												{/* // Exerc.19 */}
			                					
		</CommentContainer>
	);
}

export default SecaoComentario;
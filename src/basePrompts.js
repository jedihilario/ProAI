exports.advicePrompt = props => {
    let prompt = `Que recomendacion pedagogica podes darme para mejorar el rendimiento de ${ props.name ?? 'un alumno' } con las siguientes notas:\n`;

    return prompt;
}
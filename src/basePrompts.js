function isTen (n, next) {
    return Number(n) == 1 && Number(next) == 0;
}

exports.advicePrompt = props => {
    let prompt = `Que recomendacion pedagogica podes darme para mejorar el rendimiento de ${ props.name ?? 'un alumno' } con las siguientes notas:\n`;

    for (let key in props) {
        if (key == 'name') continue;
        prompt += `${key}: `;
        for (let i = 0; i < props[key].length; i++) {
            if (i == props[key].length - 1) {
                prompt += `${props[key][i]}\n`;
                break;
            }
            if (isTen(props[key][i], props[key][i + 1])) {
                prompt += '10, ';
                i++;
                continue;
            }
            prompt += `${props[key][i]}, `;
        }
        prompt += '\n';
    }

    return prompt;
}

exports.vocGuidancePrompt = props => {
    let prompt = `¿Podrias darme una recomendacion vocacional para ${ props.name ?? 'un alumno' } con la siguiente trayectoria escolar:\n`;

    for (let key in props) {
        if (key == 'name') continue;
        prompt += `${key}: `;
        for (let i = 0; i < props[key].length; i++) {
            if (i == props[key].length - 1) {
                prompt += `${props[key][i]}\n`;
                break;
            }
            if (isTen(props[key][i], props[key][i + 1])) {
                prompt += '10, ';
                i++;
                continue;
            }
            prompt += `${props[key][i]}, `;
        }
        prompt += '\n';
    }

    return prompt;
}
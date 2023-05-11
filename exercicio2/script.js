const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// a) remove o excesso de espaços no final da string
const minhaStringSemEspacos = minhaString.trim();

// b) imprime a quantidade de caracteres antes e depois da remoção dos espaços
console.log(`Quantidade de caracteres (antes): ${minhaString.length}`);
console.log(`Quantidade de caracteres (depois): ${minhaStringSemEspacos.length}`);

// c) substitui os traços por "sticioso"
const minhaNovaString = minhaStringSemEspacos.replace(/_{8}/, "sticioso");

// imprime a nova string no console
console.log(minhaNovaString);
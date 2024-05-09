const alunos = [
    { nome: 'Isadora', nota: 9.5 },
    { nome: 'Julia', nota: 10.0 },
    { nome: 'Luana', nota: 5.0 },
    { nome: 'Gabrielle', nota: 4.0 }
];

const alunosComNotaAlta = alunos.filter(aluno => aluno.nota >= 6);

console.log(alunosComNotaAlta);
enum Prioridade {
  BAIXA = 'B',
  MEDIA = 'M',
  ALTA = 'A'
}

type Tarefa = {
  titulo: string,
  descricao: string,
  concluida: boolean,
  prioridade: Prioridade
}

function criarTarefa(parametroTitulo: string, parametroDescricao: string, paramatroPrioridade: Prioridade): Tarefa {
  return {
    titulo: parametroTitulo,
    descricao: parametroDescricao,
    prioridade: paramatroPrioridade,
    concluida: false
  }
}

function exibirTarefa(parametroTarefa: Tarefa) {
  console.log(`A tarefa ${parametroTarefa.titulo} 
    tem como descrição ${parametroTarefa.descricao}, 
    a prioridde é ${parametroTarefa.prioridade} e concluida é ${parametroTarefa.concluida}`);
}

function concluirTarefa(parametroTarefa: Tarefa) {
  parametroTarefa.concluida = true;
}

const exercicio2 = criarTarefa("Fazer exercício 2", "Aprendendo a lidar com tipos", Prioridade.MEDIA);

exibirTarefa(exercicio2);

concluirTarefa(exercicio2);

exibirTarefa(exercicio2);
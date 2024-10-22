# Exercício 2: Usando Enums, Funções e Objetos

## Objetivo
Demonstrar o uso de `enums` para categorizar valores, `functions` para manipulação de objetos e o uso de `type` para definir a estrutura dos objetos em TypeScript.

## Instruções

1. Crie um projeto typescript e um arquivo index.ts.

2. Crie um `enum` chamado `Prioridade` com os seguintes valores:
   - `Baixa`
   - `Media`
   - `Alta`

3. Crie um `type` chamado `Tarefa`, que representa um objeto com as seguintes propriedades:
   - `titulo: string`
   - `descricao: string`
   - `concluida: boolean`
   - `prioridade: Prioridade`

4. Crie uma função chamada `criarTarefa` que aceita um título, uma descrição e uma prioridade como parâmetros e retorna um objeto do tipo `Tarefa` com o campo `concluida` inicializado como `false`. Ex:

  ```typescript
  function criarTarefa(titulo: string, descricao: string, prioridade: Prioridade): Tarefa {
     //retorna objeto com os dados da tarefa
  }
  ``` 

5. Crie uma função chamada `exibirTarefa` que aceita um objeto do tipo `Tarefa` e imprime uma string formatada com o título, a prioridade e o status (`concluida` ou não).

6. Crie uma função chamada `concluirTarefa` que aceita um objeto do tipo `Tarefa` e altera o valor de `concluida` para `true`.

7. No arquivo `index.ts`, faça o seguinte:
   - Crie uma tarefa usando a função `criarTarefa`.
   - Exiba a tarefa criada usando a função `exibirTarefa`.
   - Marque a tarefa como concluída usando a função `concluirTarefa`.
   - Exiba novamente a tarefa atualizada.

EXTRA: separe `Prioridade` e `Tarefa` em diferentes arquivos utilizando `export` e `import`
# Career IA

Simulador de entrevistas de emprego feito com HTML, CSS e JavaScript puro.

## Como executar

Abra o arquivo `index.html` diretamente no navegador. Não há dependências ou etapa de compilação.

## Integração futura com Ollama

A função `generateFeedback`, em `app.js`, concentra a geração do feedback. Para usar o Ollama, substitua o conteúdo dessa função por uma chamada a `http://localhost:11434/api/generate` e preserve o formato de retorno:

```js
{
  intro: "...",
  strengths: ["..."],
  improvements: ["..."],
  suggestion: "..."
}
```

O comentário acima da função no código indica o ponto exato de integração.

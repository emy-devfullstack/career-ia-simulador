const icons = {
  technology: '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M8 9l-2 2 2 2M16 9l2 2-2 2M13.5 8l-3 6"/></svg>',
  administration: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V8l7-4 7 4v13M9 12h1M14 12h1M9 16h1M14 16h1"/></svg>',
  hr: '<svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a5 5 0 0 1 10 0v2M16 11a3 3 0 1 0 0-6M15 15a5 5 0 0 1 6 4v1"/></svg>',
  marketing: '<svg viewBox="0 0 24 24" fill="none"><path d="m4 13 2 7 3-1-1-5M5 13l12-6v10L5 13Z"/><path d="M17 10a3 3 0 0 0 0 4"/></svg>',
  sales: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 20h18M5 16l4-5 4 3 6-9"/><path d="M15 5h4v4"/></svg>',
  logistics: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 6h11v12H3zM14 10h4l3 4v4h-7z"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>',
  finance: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9"/><path d="M15 8.5c-.7-.5-1.6-.8-2.7-.8-1.5 0-2.8.7-2.8 2s1 1.7 2.7 2.1c1.7.4 2.8.8 2.8 2.2s-1.3 2.2-2.9 2.2c-1.2 0-2.3-.4-3.1-1M12 5.5v13"/></svg>',
  service: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 13h2a2 2 0 0 1 2 2v3H6a2 2 0 0 1-2-2v-3ZM20 13h-2a2 2 0 0 0-2 2v3h2a2 2 0 0 0 2-2v-3ZM16 19c-1 1-2.2 1.5-4 1.5"/></svg>',
  design: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3a9 9 0 1 0 0 18h1.5a1.5 1.5 0 0 0 0-3H12a2 2 0 0 1 0-4h4a5 5 0 0 0 5-5c0-3.3-4-6-9-6Z"/><circle cx="7.5" cy="10" r="1"/><circle cx="10" cy="6.5" r="1"/><circle cx="15" cy="7" r="1"/></svg>',
  law: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3v18M6 21h12M5 6h14M5 6l-3 7h6L5 6ZM19 6l-3 7h6l-3-7Z"/><path d="M2 13c0 2 6 2 6 0M16 13c0 2 6 2 6 0"/></svg>'
};

const areas = [
  { id: 'technology', name: 'Tecnologia', description: 'Desenvolvimento, dados e infraestrutura', icon: icons.technology, questions: [
    'Como você garante a qualidade e a segurança de uma solução tecnológica antes de colocá-la em produção?',
    'Conte sobre o projeto de tecnologia mais relevante da sua trajetória. Qual foi a sua contribuição?',
    'Fale sobre uma situação em que precisou colaborar com alguém que tinha uma visão técnica diferente da sua.',
    'Imagine que um sistema crítico ficou indisponível. Como você investigaria e conduziria a solução?',
    'Que competências técnicas você pretende desenvolver nos próximos dois anos e por quê?'
  ]},
  { id: 'administration', name: 'Administração', description: 'Gestão, processos e estratégia', icon: icons.administration, questions: [
    'Quais indicadores você considera essenciais para avaliar a eficiência de um processo administrativo?',
    'Conte sobre uma experiência em que você melhorou a organização ou a produtividade de uma equipe.',
    'Descreva uma situação em que precisou conciliar prioridades de diferentes gestores.',
    'Como você agiria ao identificar atrasos recorrentes em um processo importante da empresa?',
    'Que tipo de responsabilidade de gestão você gostaria de assumir nos próximos anos?'
  ]},
  { id: 'hr', name: 'Recursos Humanos', description: 'Pessoas, cultura e desenvolvimento', icon: icons.hr, questions: [
    'Como você mede a efetividade de uma ação de recrutamento, clima ou desenvolvimento de pessoas?',
    'Qual experiência em RH mais contribuiu para o seu entendimento sobre pessoas e negócios?',
    'Conte sobre uma conversa difícil que você precisou conduzir com empatia e imparcialidade.',
    'Como abordaria um aumento inesperado de rotatividade em uma área da empresa?',
    'Que impacto você deseja gerar na cultura e na experiência dos colaboradores?'
  ]},
  { id: 'marketing', name: 'Marketing', description: 'Marca, conteúdo e performance', icon: icons.marketing, questions: [
    'Como você define os canais, as métricas e o público de uma nova campanha de marketing?',
    'Conte sobre uma campanha ou projeto de marketing do qual se orgulha e os resultados alcançados.',
    'Fale sobre um momento em que recebeu uma crítica à sua ideia criativa. Como reagiu?',
    'Uma campanha tem bom alcance, mas baixa conversão. Como você investigaria e ajustaria a estratégia?',
    'Em qual competência de marketing você deseja se especializar e como pretende fazer isso?'
  ]},
  { id: 'sales', name: 'Vendas', description: 'Negociação, relacionamento e resultados', icon: icons.sales, questions: [
    'Como você qualifica uma oportunidade e organiza o seu funil de vendas?',
    'Conte sobre uma negociação desafiadora que você conduziu e qual foi o resultado.',
    'Descreva como você lida com metas agressivas e períodos de alta pressão.',
    'Um cliente importante sinaliza que não irá renovar. Como você conduziria a situação?',
    'Quais resultados e responsabilidades comerciais você deseja alcançar nos próximos anos?'
  ]},
  { id: 'logistics', name: 'Logística', description: 'Operações, estoque e distribuição', icon: icons.logistics, questions: [
    'Quais indicadores utiliza para acompanhar a eficiência de estoque, transporte e nível de serviço?',
    'Conte sobre uma melhoria logística que você ajudou a implementar.',
    'Fale sobre uma ocasião em que precisou manter a calma diante de uma operação sob pressão.',
    'Uma entrega crítica está atrasada e pode parar a operação do cliente. O que você faria?',
    'Em qual etapa da cadeia logística você pretende aprofundar sua carreira?'
  ]},
  { id: 'finance', name: 'Financeiro', description: 'Análise, planejamento e controle', icon: icons.finance, questions: [
    'Como você analisa a saúde financeira de uma empresa e quais indicadores prioriza?',
    'Conte sobre uma análise financeira sua que apoiou uma decisão importante.',
    'Descreva uma situação em que precisou comunicar um resultado financeiro desfavorável.',
    'Ao encontrar uma divergência relevante no fechamento mensal, como você investigaria o problema?',
    'Que posição ou especialização na área financeira você deseja alcançar?'
  ]},
  { id: 'service', name: 'Atendimento ao Cliente', description: 'Experiência, suporte e relacionamento', icon: icons.service, questions: [
    'Quais métricas indicam um atendimento de qualidade e como você as acompanha?',
    'Conte sobre um atendimento que transformou uma experiência negativa em positiva.',
    'Como você mantém a empatia ao lidar com clientes frustrados durante um dia difícil?',
    'Um cliente relata um problema urgente, mas a solução depende de outra equipe. Como você age?',
    'Como você deseja evoluir profissionalmente dentro da experiência do cliente?'
  ]},
  { id: 'design', name: 'Design e UX', description: 'Pesquisa, produto e experiência', icon: icons.design, questions: [
    'Como você transforma dados de pesquisa em decisões de design e valida uma solução?',
    'Apresente um projeto do seu portfólio e explique seu processo, decisões e impacto.',
    'Conte sobre uma situação em que precisou defender uma decisão de design sem ignorar o feedback.',
    'Usuários abandonam uma etapa importante do produto. Como você investigaria e proporia melhorias?',
    'Que tipo de problema ou produto você espera projetar nos próximos anos?'
  ]},
  { id: 'law', name: 'Direito', description: 'Consultivo, contencioso e compliance', icon: icons.law, questions: [
    'Como você estrutura uma análise jurídica para equilibrar risco, legislação e objetivo do cliente?',
    'Conte sobre um caso ou projeto jurídico complexo em que sua atuação foi relevante.',
    'Descreva uma situação em que precisou sustentar sua posição com ética diante de pressão.',
    'Ao identificar um risco jurídico urgente com informações incompletas, como você conduziria a questão?',
    'Em qual área do Direito você pretende consolidar sua atuação e qual impacto deseja gerar?'
  ]}
];

const questionTypes = ['Pergunta técnica', 'Experiência profissional', 'Comportamental', 'Resolução de problemas', 'Objetivos profissionais'];
const placeholders = [
  'Explique seu raciocínio, métodos e ferramentas que utilizaria...',
  'Descreva o contexto, sua responsabilidade e os resultados...',
  'Conte como você agiu e o que aprendeu com a situação...',
  'Organize sua resposta em etapas e explique suas prioridades...',
  'Compartilhe suas metas e como pretende alcançá-las...'
];

const state = { selectedArea: null, answers: [] };
const $ = (selector) => document.querySelector(selector);
const screens = document.querySelectorAll('.screen');

function applyTheme(theme) {
  const isLight = theme === 'light';
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('career-ia-theme', theme);
  $('#themeColor').setAttribute('content', isLight ? '#f5f7fb' : '#07111f');
  $('#themeToggle').setAttribute('aria-label', isLight ? 'Ativar modo escuro' : 'Ativar modo claro');
  $('#themeToggle').setAttribute('title', isLight ? 'Ativar modo escuro' : 'Ativar modo claro');
}

function toggleTheme() {
  applyTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light');
}

function showScreen(id) {
  screens.forEach((screen) => screen.classList.toggle('screen--active', screen.id === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderAreas() {
  $('#areaGrid').innerHTML = areas.map((area) => `
    <button class="area-card" type="button" data-area="${area.id}">
      <span class="area-icon" aria-hidden="true">${area.icon}</span>
      <h3>${area.name}</h3>
      <p>${area.description}</p>
    </button>
  `).join('');
}

function chooseArea(areaId) {
  state.selectedArea = areas.find((area) => area.id === areaId);
  state.answers = Array(5).fill('');
  $('#interviewTitle').textContent = state.selectedArea.name;
  $('#selectedAreaIcon').innerHTML = state.selectedArea.icon;
  renderQuestions();
  updateProgress();
  showScreen('interviewScreen');
}

function renderQuestions() {
  $('#interviewForm').innerHTML = state.selectedArea.questions.map((question, index) => `
    <article class="question-card" data-question="${index}">
      <div class="question-card__head">
        <span class="question-number">${String(index + 1).padStart(2, '0')}</span>
        <div>
          <span class="question-type">${questionTypes[index]}</span>
          <h3>${question}</h3>
        </div>
        <span class="required">OBRIGATÓRIA</span>
      </div>
      <label class="sr-only" for="answer-${index}">Resposta para a pergunta ${index + 1}</label>
      <textarea id="answer-${index}" data-index="${index}" maxlength="1200" placeholder="${placeholders[index]}"></textarea>
      <div class="textarea-meta">
        <span class="error-copy">Escreva uma resposta antes de continuar.</span>
        <span><b class="char-count">0</b>/1200</span>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('textarea').forEach((textarea) => {
    textarea.addEventListener('input', handleAnswer);
  });
}

function handleAnswer(event) {
  const index = Number(event.target.dataset.index);
  state.answers[index] = event.target.value.trim();
  event.target.closest('.question-card').classList.remove('has-error');
  event.target.parentElement.querySelector('.char-count').textContent = event.target.value.length;
  updateProgress();
}

function updateProgress() {
  const answered = state.answers.filter((answer) => answer.length > 0).length;
  $('#progressCount').textContent = answered;
  $('#progressBar').style.width = `${(answered / 5) * 100}%`;
}

function validateAnswers() {
  let firstInvalid = null;
  state.answers.forEach((answer, index) => {
    const card = document.querySelector(`[data-question="${index}"]`);
    const invalid = answer.length < 10;
    card.classList.toggle('has-error', invalid);
    if (invalid && !firstInvalid) firstInvalid = card;
  });
  if (firstInvalid) {
    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    showToast('Responda as 5 perguntas com um pouco mais de detalhe.');
    return false;
  }
  return true;
}

function containsAny(text, words) {
  const normalized = text.toLowerCase();
  return words.some((word) => normalized.includes(word));
}

// Serviço de feedback local. Para integrar ao Ollama, substitua o corpo desta
// função por um fetch para http://localhost:11434/api/generate e mantenha o
// mesmo formato de retorno: { intro, strengths, improvements, suggestion }.
async function generateFeedback(area, answers) {
  const allText = answers.join(' ').toLowerCase();
  const detailedAnswers = answers.filter((answer) => answer.length >= 180).length;
  const usesMetrics = /\d+|%|resultado|indicador|meta|prazo/.test(allText);
  const usesStructure = containsAny(allText, ['situação', 'contexto', 'tarefa', 'ação', 'resultado', 'primeiro', 'depois', 'por fim']);
  const showsLearning = containsAny(allText, ['aprendi', 'melhorei', 'desenvolvi', 'feedback', 'evolu']);

  const strengths = [];
  const improvements = [];

  if (detailedAnswers >= 3) strengths.push('Boa capacidade de contextualizar experiências e explicar seu raciocínio.');
  else improvements.push('Aprofunde o contexto das situações e deixe mais clara a sua participação em cada exemplo.');

  if (usesMetrics) strengths.push('Uso de resultados e indicadores, o que torna suas conquistas mais concretas e confiáveis.');
  else improvements.push('Inclua números, prazos ou indicadores para demonstrar com mais precisão o impacto do seu trabalho.');

  if (usesStructure) strengths.push('Respostas organizadas, com uma linha de raciocínio que facilita o entendimento do entrevistador.');
  else improvements.push('Estruture exemplos pelo método STAR: situação, tarefa, ação e resultado.');

  if (showsLearning) strengths.push('Demonstra abertura ao aprendizado e consciência sobre o próprio desenvolvimento.');
  else improvements.push('Mostre também o que aprendeu com cada experiência e como aplicou esse aprendizado depois.');

  strengths.push(`Suas respostas demonstram interesse genuíno e boa conexão com desafios da área de ${area.name}.`);
  improvements.push('Ao falar de objetivos, conecte seus próximos passos ao valor que pretende gerar para a empresa.');

  await new Promise((resolve) => setTimeout(resolve, 650));

  return {
    intro: `Analisamos suas cinco respostas para a área de ${area.name}. Você apresentou uma base promissora; agora, pequenos ajustes podem tornar sua comunicação ainda mais convincente.`,
    strengths: strengths.slice(0, 3),
    improvements: improvements.slice(0, 3),
    suggestion: `Antes da entrevista, escolha três histórias profissionais versáteis e ensaie cada uma em até dois minutos. Destaque o contexto, a sua ação individual e um resultado verificável. Essa preparação ajuda você a responder com naturalidade, sem parecer decorado.`
  };
}

async function submitInterview(event) {
  event.preventDefault();
  if (!validateAnswers()) return;

  const button = $('#submitButton');
  const original = button.innerHTML;
  button.disabled = true;
  button.textContent = 'Analisando respostas...';

  try {
    const feedback = await generateFeedback(state.selectedArea, state.answers);
    $('#feedbackIntro').textContent = feedback.intro;
    $('#strengthsList').innerHTML = feedback.strengths.map((item) => `<li>${item}</li>`).join('');
    $('#improvementsList').innerHTML = feedback.improvements.map((item) => `<li>${item}</li>`).join('');
    $('#finalSuggestion').textContent = feedback.suggestion;
    showScreen('feedbackScreen');
  } finally {
    button.disabled = false;
    button.innerHTML = original;
  }
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('toast--visible');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove('toast--visible'), 3000);
}

function restart() {
  state.selectedArea = null;
  state.answers = [];
  showScreen('areaScreen');
}

renderAreas();
applyTheme(document.documentElement.dataset.theme || 'dark');

$('#startButton').addEventListener('click', () => showScreen('areaScreen'));
$('#themeToggle').addEventListener('click', toggleTheme);
$('#brandButton').addEventListener('click', () => showScreen('homeScreen'));
$('#areaGrid').addEventListener('click', (event) => {
  const card = event.target.closest('[data-area]');
  if (card) chooseArea(card.dataset.area);
});
document.querySelectorAll('[data-go]').forEach((button) => button.addEventListener('click', () => showScreen(button.dataset.go)));
$('#backToAreas').addEventListener('click', () => showScreen('areaScreen'));
$('#interviewForm').addEventListener('submit', submitInterview);
$('#restartButton').addEventListener('click', restart);
$('#printButton').addEventListener('click', () => window.print());

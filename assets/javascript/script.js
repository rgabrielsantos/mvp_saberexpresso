/* ==================== DADOS ==================== */
const COURSES=[
  {id:'info',name:'Técnico em Informática',ico:'code',subjects:['Lógica de Programação','Banco de Dados','Desenvolvimento Web','Redes de Computadores']},
  {id:'mecatronica',name:'Técnico em Mecatrônica',ico:'cpu',subjects:['Eletricidade Básica','Automação Industrial','Sistemas Mecânicos','Desenho Técnico']},
  {id:'eletrotecnica',name:'Técnico em Eletrotécnica',ico:'zap',subjects:['Instalações Elétricas','Comandos Elétricos','Máquinas Elétricas']},
  {id:'quimica',name:'Técnico em Química',ico:'flask',subjects:['Química Geral','Química Analítica','Processos Industriais']}
];
const SUBJECTS=[];
COURSES.forEach(c=>c.subjects.forEach((n,i)=>SUBJECTS.push({id:`s-${c.id}-${i}`,name:n,courseId:c.id})));

const USERS=[
  {id:'u-ana',name:'Ana Beatriz Souza',nick:'Ana',email:'ana.souza@aluno.senai.br',courseId:'info',beans:48,since:'2025.2'},
  {id:'u-marcos',name:'Marcos Vieira',nick:'Marcos',email:'marcos.vieira@aluno.senai.br',courseId:'info',beans:71,since:'2025.1'},
  {id:'u-jess',name:'Jéssica Lima',nick:'Jéssica',email:'jessica.lima@aluno.senai.br',courseId:'mecatronica',beans:55,since:'2025.1'},
  {id:'u-rafa',name:'Rafael Torres',nick:'Rafael',email:'rafael.torres@aluno.senai.br',courseId:'info',beans:39,since:'2025.2'},
  {id:'u-cami',name:'Camila dos Anjos',nick:'Camila',email:'camila.anjos@aluno.senai.br',courseId:'eletrotecnica',beans:44,since:'2025.1'},
  {id:'u-luis',name:'Luís Eduardo Santana',nick:'Luís',email:'luis.santana@aluno.senai.br',courseId:'quimica',beans:27,since:'2025.2'},
  {id:'u-thiago',name:'Thiago Oliveira',nick:'Thiago',email:'thiago.oliveira@aluno.senai.br',courseId:'quimica',beans:33,since:'2025.1'},
  {id:'u-helena',name:'Prof.ª Helena Castro',nick:'Helena',email:'helena.castro@docente.senai.br',courseId:'info',beans:214,since:'2023.1',docente:true}
];

const R=(id,authorId,body,mins,likes,sol)=>({id,authorId,body,ts:Date.now()-mins*6e4,likes,likedByMe:false,isSolution:!!sol});
const T=(id,subjectId,authorId,title,body,mins,likes,liked,replies)=>({
  id,subjectId,authorId,title,body,ts:Date.now()-mins*6e4,likes,likedByMe:!!liked,replies:replies||[]
});

const TOPICS=[
  T('t1','s-info-0','u-ana','Como pensar em recursão sem travar a cabeça?',
    'Entendi o exemplo do fatorial, mas na hora de criar uma função recursiva própria eu travo.\n\nComo vocês organizam o raciocínio antes de escrever o código? Exemplo concreto: imprimir os elementos de um vetor de trás pra frente.',
    40,6,false,[
      R('t1r1','u-marcos','Eu faço duas perguntas antes de escrever qualquer linha: qual é o caso mais simples (onde eu PARO?) e como o problema menor me ajuda no maior.\n\nNo seu exemplo: caso base é índice 0; o passo é chamar com i-1 antes de imprimir. Se você responder essas duas perguntas, o resto é sintaxe.',28,9),
      R('t1r2','u-helena','Dica da casa: desenhe a pilha de chamadas no papel uma única vez, com calma. Depois disso você nunca mais precisa desenhar — o cérebro generaliza sozinho.\n\nE lembre: todo ponto de saída da recursão deve ser pensado ANTES do resto.',25,12)
    ]),
  T('t2','s-info-0','u-rafa','While ou do-while: quando um ou outro faz diferença real?',
    'Nos exercícios os dois resolvem quase tudo igual.\n\nExiste alguma situação em que escolher errado dá um bug que a gente não percebe fácil?',130,3,false,[
      R('t2r1','u-jess','Sim! Validação de entrada. Se você usa while, precisa ler o valor ANTES do loop; com do-while você lê dentro dele.\n\nJá perdi nota numa prova por causa exatamente disso.',90,4)
    ]),
  T('t3','s-mecatronica-0','u-jess','Por que a tomada tem três pinos se a corrente usa só dois?',
    'Fase, neutro e terra. Se a corrente vai e volta por fase e neutro, o terra fica só olhando?\n\nEle realmente faz alguma coisa no dia a dia ou é só padronização?',300,8,true,[
      R('t3r1','u-cami','O terra quase não faz nada… até o dia em que faz TUDO.\n\nEle só conduz corrente quando há falha (carcaça energizada, por exemplo) — e aí dá um caminho de baixíssima resistência que faz a proteção desarmar na hora. É o silencioso que salva a sua vida.',240,14,true)
    ]),
  T('t4','s-info-1','u-marcos','JOIN ou subconsulta: como decidir sem chutar?',
    'A professora aceitou os dois na atividade, mas falou que "um deles escala melhor".\n\nComo vocês decidem isso na prática? Tem algum sinal no enunciado que ajuda?',90,5,false,[
      R('t4r1','u-ana','Regra que me ajudou: se a subconsulta retorna uma coluna que eu só uso pra filtrar, JOIN costuma ser mais direto. Se ela retorna um valor calculado (média, máximo), subconsulta fica mais legível.\n\nE quando der, roda um EXPLAIN pra comparar — o plano de execução conta a história.',60,7,true)
    ]),
  T('t5','s-eletrotecnica-0','u-cami','Dimensionamento de cabo: onde encaixam os fatores de correção?',
    'Tabela de corrente, fator de temperatura, agrupamento… eu entendo cada um isolado, mas na hora de montar a conta eu me perco na ordem.\n\nE mais: eu corrijo a corrente do cabo ou a do disjuntor?',55,4,false,[]),
  T('t6','s-quimica-0','u-luis','Exotérmica ou endotérmica: dá pra "sentir" sem calcular?',
    'Em titulação a gente mede variação de temperatura, mas num exercício escrito, sem dado térmico, existe pista no enunciado?\n\nCombustão é óbvia, mas neutralização e dissolução me pegam sempre.',1500,6,false,[
      R('t6r1','u-thiago','Foge do cálculo e vai pra energia de ligação: quebrar ligações consome energia, formar libera.\n\nSe formar libera mais do que você gastou quebrando, sobra calor → exotérmica. Neutralização forte com forte quase sempre libera bastante.',1000,5)
    ]),
  T('t7','s-info-2','u-ana','Margin collapse: por que os margins "somem" em vez de somar?',
    'Esperava que dois margins de 16px dessem 32px de espaço, mas o navegador aplicou só 16.\n\nIsso é o famoso margin collapse? Ele ainda acontece ou fui eu que montei o CSS errado?',2600,3,false,[
      R('t7r1','u-marcos','É collapse mesmo, e continua vivo e bem. Margens verticais entre elementos no mesmo fluxo se fundem no maior deles.\n\nTruque rápido: display: flow-root no container pai resolve o colapso interno sem gambiarra.',2000,6)
    ]),
  T('t8','s-mecatronica-1','u-jess','Encoder incremental ou absoluto na esteira do laboratório?',
    'Na aula de CLP o professor citou os dois e pediu pra pesquisarmos qual faz mais sentido pra parar a esteira sempre na mesma posição.\n\nAssisti vídeo aula e saí com mais dúvida do que entrei. Alguém explica com um exemplo prático?',4200,7,true,[
      R('t8r1','u-rafa','Pergunta-chave: se a esteira DESLIGAR no meio do processo, você precisa saber onde ela parou?\n\nSe sim → absoluto (ele "lembra" a posição mesmo sem energia). Se depois de religar você pode zerar e ir pro ponto zero → incremental resolve e custa menos.',3800,11,true)
    ]),
  T('t9','s-quimica-1','u-luis','Como escolher o indicador numa titulação sem virar decoreba?',
    'Sempre misturo qual indicador combina com qual salto da curva. Existe um raciocínio simples ou é tabela na cabeça mesmo?',7000,2,false,[]),
  T('t10','s-info-3','u-rafa','IP privado + NAT: como o roteador sabe pra quem volta a resposta?',
    'Vários celulares saem pra internet com o mesmo IP público. Quando a resposta chega, como o roteador acerta qual aparelho pediu aquilo?\n\nIsso tem a ver com a "tabela NAT" que o professor citou de passagem?',260,9,false,[
      R('t10r1','u-marcos','É exatamente a tabela NAT: o roteador anota porta de origem + IP interno de cada conexão que passa por ele.\n\nA resposta volta pra essa mesma porta, ele consulta a tabela e entrega pro dono. Porta que não bate com a tabela = pacote descartado.',200,8)
    ]),
  T('t11','s-eletrotecnica-1','u-cami','A partir de que ponto a partida estrela-triângulo deixa de ser opção e vira necessidade?',
    'No laboratório o motor de 1 CV parte direto tranquilo.\n\nNa indústria, o que define a linha: é a potência do motor ou o efeito da corrente de partida na rede?',5200,3,false,[
      R('t11r1','u-jess','Pensa pela corrente de partida: direta puxa algo como 6x a nominal. Se isso derruba a tensão da instalação (luz piscando) ou passa da capacidade do disjuntor, você precisa reduzir a corrente de partida — aí entra a estrela-triângulo (~1/3 da corrente).\n\nNão é o tamanho do motor em si: é o efeito dele na rede.',5000,6)
    ]),
  T('t12','s-info-0','u-ana','Vetor imprimindo "lixo" depois do último elemento',
    'Declarei int v[5], preenchi com 5 valores, mas quando imprimo em loop até v[5] aparece um número maluco.\n\nO professor falou "estouro de índice" e mudou de assunto. Alguém descomplica?',1000,5,false,[
      R('t12r1','u-rafa','Você imprimiu v[5], mas o vetor vai de v[0] a v[4]. O v[5] é memória de outra coisa que por acaso estava ali — por isso o "lixo".\n\nNão é aleatório de verdade: é o que sobrou na memória. Loop até i < 5 e pronto.',900,7)
    ])
];

const BADGES=[
  {id:'first-question',name:'Primeira Pergunta',ico:'chat',desc:'Abriu o primeiro tópico'},
  {id:'first-answer',name:'Primeira Resposta',ico:'send',desc:'Ajudou alguém pela primeira vez'},
  {id:'helpful',name:'Resposta Útil',ico:'heart',desc:'Recebeu 5+ curtidas numa resposta'},
  {id:'solver',name:'Solucionador',ico:'check',desc:'Marcou uma resposta como solução'},
  {id:'frequent',name:'Frequentador',ico:'clock',desc:'Acumulou 30 grãos'},
  {id:'active',name:'Colaborador Ativo',ico:'award',desc:'Acumulou 60 grãos'}
];
const QUESTIONS=[
  ['Se você tivesse que explicar sua dúvida pra alguém de outra turma, por onde começaria?','Formular já resolve metade do caminho — a outra metade a turma ajuda.'],
  ['O que você já tentou antes de pedir uma resposta pronta? O que aconteceu?','Contar o que não funcionou é ouro puro pra quem quer te ajudar.'],
  ['Qual seria a sua próxima tentativa se a entrega fosse amanhã?','Antecipar o próximo passo treina o olho de quem resolve.']
];

/* ==================== ESTADO / UTIL ==================== */
const state={user:null,route:{name:'login'},topicFilter:'all',searchCourse:'all',q:'',tab:'topics',flash:[],lastFocus:null};

const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const escRe=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const icon=(n,c='')=>`<svg class="ic ${c}" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const userById=id=>USERS.find(u=>u.id===id);
const subjectById=id=>SUBJECTS.find(s=>s.id===id);
const courseById=id=>COURSES.find(c=>c.id===id);
const topicById=id=>TOPICS.find(t=>t.id===id);
const topicsOfSubject=sid=>TOPICS.filter(t=>t.subjectId===sid);
const courseOf=t=>courseById(subjectById(t.subjectId).courseId);

function timeAgo(ts){
  const m=Math.floor((Date.now()-ts)/6e4);
  if(m<1)return'agora';if(m<60)return`há ${m} min`;
  const h=Math.floor(m/60);if(h<24)return`há ${h} h`;
  const d=Math.floor(h/24);if(d<7)return`há ${d} d`;
  return new Date(ts).toLocaleDateString('pt-BR',{day:'2-digit',month:'short'});
}
const AVCOLORS=['#E3C09A|#5B3A1E','#D6AC85','#5F4530|#F5EFE6','#8A6647','#7A5738|#F5EFE6','#B98F6A'];
function avColor(name){let h=0;for(const c of name)h=(h*31+c.charCodeAt(0))>>>0;return AVCOLORS[h%AVCOLORS.length].split('|');}
function avatarHTML(u,cls='av-sm'){
  const[bg,fg]=avColor(u.name);
  return `<span class="avatar ${cls}" style="background:${bg};color:${fg||'#4A2F16'}" aria-hidden="true">${esc(u.name.split(' ').filter(w=>/[A-ZÀ-Úa-zà-ú]/.test(w[0]||'')).slice(0,2).map(w=>w[0].toUpperCase()).join(''))}</span>`;
}
const paras=body=>esc(body).split('\n\n').map(p=>`<p>${p.replace(/\n/g,'<br>')}</p>`).join('');
const preview=body=>{const s=String(body).replace(/\n+/g,' ');return s.length>150?s.slice(0,150)+'…':s;};
function hi(text,q){
  const safe=esc(text);if(!q)return safe;
  return safe.replace(new RegExp('('+escRe(esc(q))+')','ig'),'<mark>$1</mark>');
}
const crumb=arr=>`<nav class="crumbs" aria-label="Você está em">${arr.map(([l,act],i)=>`${i?'<span class="sep" aria-hidden="true">/</span>':''}${act?`<a href="#" ${act}>${l}</a>`:`<span aria-current="page">${l}</span>`}`).join('')}</nav>`;

function logoSVG(s){
  return `<svg class="logo" width="${s}" height="${s}" viewBox="0 0 96 96" aria-hidden="true">
    <g class="lg-brain">
      <path d="M48 42 C43 46.5 34.5 46.5 30.5 42 C25.5 39 24.5 31.5 27.5 26.5 C25.5 21 28.5 15 34.5 14 C36.5 9.5 43 8.5 47 10.8 C50 8.5 57 9.5 59 14 C65 15 68.5 21 66.5 26.5 C69.5 31.5 68.5 39 63.5 42 C59.5 46.5 51 46.5 48 42 Z"/>
      <path class="lg-line" d="M47.2 11.5 C45.5 19 45.8 32 48.2 40.5"/>
      <path class="lg-line" d="M32.5 24.5 c4 1.2 5.2 4.8 3.2 8"/>
      <path class="lg-line" d="M61.5 24.5 c-4 1.2 -5.2 4.8 -3.2 8"/>
    </g>
    <g>
      <path class="lg-wisp" d="M38 55 c-2 2 -2 4.5 0 6.5"/>
      <path class="lg-wisp" d="M48 53.5 c-2 2.2 -2 5 0 7"/>
      <path class="lg-wisp" d="M58 55 c-2 2 -2 4.5 0 6.5"/>
    </g>
    <path class="lg-cup" d="M28.5 63.5 h39 c0 12.5 -8.7 20.5 -19.5 20.5 S28.5 76 28.5 63.5 Z"/>
    <path class="lg-cup" d="M67.5 66 c9 -2.5 13 5.5 9.8 10.2 c-2.2 3.2 -6 4 -9.3 3.2"/>
    <ellipse class="lg-cup lg-plate" cx="48" cy="88" rx="23.5" ry="3.6"/>
  </svg>`;
}

/* ==================== TOAST / GRÃOS / SELOS ==================== */
function toast(msg,ic='bean'){
  const el=document.createElement('div');el.className='toast';
  el.innerHTML=icon(ic)+`<span>${msg}</span>`;
  $('#toasts').appendChild(el);
  setTimeout(()=>el.classList.add('out'),2700);
  setTimeout(()=>el.remove(),3100);
}
function addBeans(n){
  if(!state.user)return;
  state.user.beans+=n;updateBeans(true);
}
function updateBeans(bump){
  const el=$('#bean-count');el.textContent=state.user?state.user.beans:0;
  if(bump){const p=el.closest('.bean-pill');p.classList.remove('bump');void p.offsetWidth;p.classList.add('bump');}
}
const myTopics=()=>TOPICS.filter(t=>t.authorId===state.user.id);
const myReplies=()=>TOPICS.flatMap(t=>t.replies.filter(r=>r.authorId===state.user.id).map(r=>({t,r})));
function computeBadges(u){
  const b=[];
  if(TOPICS.some(t=>t.authorId===u.id))b.push('first-question');
  if(TOPICS.some(t=>t.replies.some(r=>r.authorId===u.id)))b.push('first-answer');
  if(TOPICS.some(t=>t.replies.some(r=>r.authorId===u.id&&r.likes>=5)))b.push('helpful');
  if(TOPICS.some(t=>t.authorId===u.id&&t.replies.some(r=>r.isSolution)))b.push('solver');
  if(u.beans>=30)b.push('frequent');
  if(u.beans>=60)b.push('active');
  return b;
}
function checkBadges(){
  const now=computeBadges(state.user);
  const fresh=now.filter(id=>!state.user.badges.includes(id));
  state.user.badges=now;
  if(fresh.length){
    state.flash=fresh;
    fresh.forEach((id,i)=>setTimeout(()=>toast(`Selo conquistado: ${BADGES.find(b=>b.id===id).name}`,'award'),i*450));
  }
}

/* ==================== BLOCOS REUSÁVEIS ==================== */
function whoHTML(u,t){
  return `<span class="who">${avatarHTML(u)}<span class="nm"><b>${esc(u.name)}</b>${u.docente?' <span class="doc-pill">Docente</span>':''}</span><span>· ${timeAgo(t)}</span></span>`;
}
function topicCardHTML(t,opts={}){
  const u=userById(t.authorId),sub=subjectById(t.subjectId),solved=t.replies.some(r=>r.isSolution);
  const q=opts.q||'';
  return `<article class="topic-card card">
    <a class="cover-link" href="#" data-action="open-topic" data-topic="${t.id}" aria-label="Abrir tópico: ${esc(t.title)}"></a>
    <div class="tc-meta">
      ${whoHTML(u,t.ts)}
      <span class="grow"></span>
      ${solved?`<span class="badge-solved">${icon('check-circle')}Resolvido</span>`:''}
    </div>
    <h3 class="tc-title">${hi(t.title,q)}</h3>
    <p class="tc-preview">${hi(preview(t.body),q)}</p>
    ${opts.ctx?`<p style="margin-top:8px"><span class="chip">${icon('book')}${hi(sub.name,q)} · ${esc(courseOf(t).name)}</span></p>`:''}
    <div class="tc-foot">
      <span class="m">${icon('heart')}${t.likes}</span>
      ${t.replies.length
        ?`<span class="m">${icon('chat')}${t.replies.length} ${t.replies.length===1?'resposta':'respostas'}</span>`
        :`<span class="m invite">${icon('send')}seja quem responde</span>`}
      ${opts.ctx?'':`<span class="chip">${icon('book')}${esc(sub.name)}</span>`}
    </div>
  </article>`;
}
function emptyHTML(title,text,cta,action){
  return `<div class="empty">${logoSVG(58)}
    <h3 class="serif">${title}</h3><p>${text}</p>
    ${cta?`<button class="btn btn-primary" data-action="${action||'open-create'}">${icon('plus')}${cta}</button>`:''}
  </div>`;
}

/* ==================== TELAS ==================== */
function sLogin(){
  return `<div class="auth-wrap">
    <aside class="auth-hero">
      ${logoSVG(92)}
      <h1 class="serif">Saber Expresso</h1>
      <p class="tag">O fórum do SENAI Camaçari onde a dúvida vira conversa — e a resposta pronta espera a gente terminar de pensar.</p>
      <ul class="hero-points">
        <li>${icon('chat')}Nenhuma pergunta é boba. Todas já passaram pelo balcão.</li>
        <li>${icon('bulb')}Pensar junto vale mais que colar pronto.</li>
        <li>${icon('bean')}Cada participação vira grãos no seu cartão.</li>
      </ul>
      <p class="hero-foot">SENAI Camaçari · feito por alunos, para alunos</p>
    </aside>
    <div class="auth-panel">
      <div class="auth-mob">${logoSVG(64)}<div><h1 class="serif">Saber Expresso</h1><p class="tag">O fórum do SENAI Camaçari onde a dúvida vira conversa.</p></div></div>
      <div class="auth-card card">
        <div class="auth-tabs" role="tablist">
          <button role="tab" aria-selected="true" data-action="auth-tab" data-tab="login" id="tab-login">Entrar</button>
          <button role="tab" aria-selected="false" data-action="auth-tab" data-tab="signup" id="tab-signup">Criar conta</button>
        </div>
        <form id="login-form" novalidate>
          <div class="field" id="lf-email">
            <label for="login-email">E-mail institucional</label>
            <input id="login-email" type="email" autocomplete="email" placeholder="seu.nome@aluno.senai.br">
            <p class="err">Quase! Use seu e-mail do SENAI — por exemplo, ana.souza@aluno.senai.br</p>
          </div>
          <div class="field" id="lf-pass">
            <label for="login-pass">Senha</label>
            <input id="login-pass" type="password" autocomplete="current-password" placeholder="••••••">
            <p class="err">Não achamos esse e-mail ainda. Toque em “Criar conta” — leva 20 segundos.</p>
          </div>
          <button class="btn btn-primary wfull" type="submit">Entrar</button>
          <p class="hint" style="margin-top:12px;justify-content:center">${icon('clock')}Protótipo: qualquer senha com 6+ caracteres serve.</p>
        </form>
        <form id="signup-form" novalidate hidden>
          <div class="field" id="sf-name">
            <label for="signup-name">Nome completo</label>
            <input id="signup-name" autocomplete="name" placeholder="Como você aparece no chamado">
            <p class="err">Como te chamamos? Precisamos de um nome.</p>
          </div>
          <div class="field" id="sf-email">
            <label for="signup-email">E-mail institucional</label>
            <input id="signup-email" type="email" autocomplete="email" placeholder="seu.nome@aluno.senai.br">
            <p class="err">Use um e-mail do SENAI — por exemplo, nome@aluno.senai.br.</p>
          </div>
          <div class="field">
            <label for="signup-course">Curso</label>
            <select id="signup-course">${COURSES.map(c=>`<option value="${c.id}">${esc(c.name)}</option>`).join('')}</select>
          </div>
          <button class="btn btn-primary wfull" type="submit">Criar conta e entrar</button>
          <p class="hint" style="margin-top:12px">${icon('heart')}Combinado da casa: perguntar nunca foi vergonha — aqui ninguém julga.</p>
        </form>
        <div class="auth-demo">
          <p>Com pressa? Espie a plataforma na conta de demonstração.</p>
          <button class="btn btn-ghost wfull" data-action="demo-login">${icon('user')}Entrar como Ana · Informática</button>
          <p style="margin:10px 0 0">Dica: <b>marcos.vieira@aluno.senai.br</b> mostra um perfil de colaborador avançado.</p>
        </div>
      </div>
      <p class="auth-note">Protótipo navegável — tudo roda no seu navegador, nada é enviado.</p>
    </div>
  </div>`;
}

function loyaltyHTML(){
  const u=state.user,has=id=>u.badges.includes(id);
  const pct=Math.min(100,Math.round(u.beans/60*100));
  const done=has('active');
  return `<div class="card loyalty">
    <div class="loy-head">
      <span class="eyebrow">${icon('bean')}Cartão do Saber</span>
      <a href="#" class="link" data-action="go" data-route="profile">selos</a>
    </div>
    <div class="stamps">
      ${BADGES.map(b=>`<div class="stamp ${has(b.id)?'on':''} ${state.flash.includes(b.id)?'stamp-in':''}" title="${b.name} — ${b.desc}">
        <span class="s-ic">${icon(b.ico)}</span><span class="s-nm">${b.name}</span>
      </div>`).join('')}
    </div>
    <div class="bar"><span style="width:${done?100:pct}%"></span></div>
    <p class="loy-p">${done?`Nível máximo atingido — continue colaborando, ${esc(u.nick)}.`:`${u.beans}/60 grãos para <b>Colaborador Ativo</b>`}</p>
    <p class="loy-hint">Grãos: +5 por tópico · +2 por resposta · +5 ao marcar solução · +1 por curtir</p>
  </div>`;
}

function sHome(){
  const u=state.user;
  const h=new Date().getHours();
  const greet=h<5?'Boa madrugada':h<12?'Bom dia':h<18?'Boa tarde':'Boa noite';
  const subs=['Puxe uma cadeira — a turma está com dúvidas boas hoje.','Passe o olho no que a turma anda cozinhando.','Café passado, dúvidas na mesa: escolha uma e participe.'];
  const day=Math.floor(Date.now()/864e5);
  const recent=[...TOPICS].sort((a,b)=>b.ts-a.ts).slice(0,3);
  const course=courseById(u.courseId)||COURSES[0];
  const q=QUESTIONS[day%QUESTIONS.length];
  const courseTopics=TOPICS.filter(t=>subjectById(t.subjectId).courseId===course.id).length;
  return `<div class="screen-in">
    <header class="dash-head">
      <p class="eyebrow">${greet},</p>
      <h1 class="serif">${esc(u.nick)}.</h1>
      <p class="sub">${subs[day%subs.length]}</p>
    </header>
    <div class="dash-grid">
      <div>
        <section>
          <div class="sec-head"><h2 class="serif">Da turma, passando agora</h2><a href="#" class="link" data-action="go" data-route="search">ver em alta</a></div>
          <div class="recent-list">${recent.map(t=>topicCardHTML(t)).join('')}</div>
        </section>
        <section>
          <div class="sec-head"><h2 class="serif">Minha área</h2><a href="#" class="link" data-action="go" data-route="courses">todos os cursos</a></div>
          <div class="topic-list">
            <article class="course-card card">
              <a class="cover-link" href="#" data-action="open-course" data-course="${course.id}" aria-label="Abrir curso ${esc(course.name)}"></a>
              <span class="cc-ico">${icon(course.ico)}</span>
              <div class="cc-body">
                <h3>${esc(course.name)}</h3>
                <p class="cc-meta">${course.subjects.length} disciplinas · ${courseTopics} tópicos · matrícula ${esc(u.since||'2025.2')}</p>
                <div class="cc-chips">
                  ${SUBJECTS.filter(s=>s.courseId===course.id).map(s=>`<a class="chip chip-link" href="#" data-action="open-subject" data-subject="${s.id}">${esc(s.name)}</a>`).join('')}
                </div>
              </div>
              <span class="chev">${icon('chev-right')}</span>
            </article>
          </div>
        </section>
      </div>
      <aside class="dash-side">
        ${loyaltyHTML()}
        <div class="card question">
          <span class="eyebrow">${icon('bulb')}Pergunta da casa</span>
          <p class="serif q">${esc(q[0])}</p>
          <p class="a">${esc(q[1])}</p>
          <button class="btn btn-ghost btn-sm" data-action="open-create">levar pro fórum ${icon('chev-right')}</button>
        </div>
      </aside>
    </div>
  </div>`;
}

function sCourses(){
  const mine=state.user.courseId;
  return `<div class="screen-in narrow">
    <header class="page-head">
      <p class="eyebrow">Navegar</p>
      <h1 class="serif">Cursos da unidade</h1>
      <p class="sub">Escolha o curso, depois a disciplina — como quem escolhe o grão.</p>
    </header>
    <div class="topic-list" style="margin-top:22px">
      ${COURSES.map(c=>{
        const subs=SUBJECTS.filter(s=>s.courseId===c.id);
        const nTopics=subs.reduce((a,s)=>a+topicsOfSubject(s.id).length,0);
        return `<article class="course-card card">
          <a class="cover-link" href="#" data-action="open-course" data-course="${c.id}" aria-label="Abrir curso ${esc(c.name)}"></a>
          <span class="cc-ico">${icon(c.ico)}</span>
          <div class="cc-body">
            <h3>${esc(c.name)} ${c.id===mine?'<span class="chip" style="margin-left:6px">seu curso</span>':''}</h3>
            <p class="cc-meta">${subs.length} disciplinas · ${nTopics} ${nTopics===1?'tópico':'tópicos'}</p>
          </div>
          <span class="chev">${icon('chev-right')}</span>
        </article>`;
      }).join('')}
    </div>
  </div>`;
}

function sCourse(){
  const c=courseById(state.route.course);
  if(!c)return sCourses();
  const subs=SUBJECTS.filter(s=>s.courseId===c.id);
  const total=subs.reduce((a,s)=>a+topicsOfSubject(s.id).length,0);
  return `<div class="screen-in narrow">
    ${crumb([['Início','data-action="go" data-route="home"'],['Cursos','data-action="go" data-route="courses"'],[esc(c.name),null]])}
    <header class="page-head" style="display:flex;gap:16px;align-items:center;flex-wrap:wrap">
      <span class="cc-ico" style="width:56px;height:56px">${icon(c.ico)}</span>
      <div style="flex:1;min-width:220px">
        <h1 class="serif">${esc(c.name)}</h1>
        <p class="sub">${subs.length} disciplinas · ${total} ${total===1?'tópico':'tópicos'}</p>
      </div>
      <button class="btn btn-primary" data-action="open-create" data-course="${c.id}">${icon('plus')}Criar tópico neste curso</button>
    </header>
    <section>
      <h2 class="serif menu-title" style="margin-top:26px">Cardápio da casa</h2>
      <p class="menu-sub">escolha a disciplina e puxe uma cadeira</p>
      <ul class="menu-list">
        ${subs.map((s,i)=>{
          const ts=topicsOfSubject(s.id);
          const sol=ts.filter(t=>t.replies.some(r=>r.isSolution)).length;
          return `<li><a href="#" data-action="open-subject" data-subject="${s.id}">
            <span class="m-num">${String(i+1).padStart(2,'0')}</span>
            <span class="m-name">${esc(s.name)}</span>
            <span class="m-dots"></span>
            <span class="m-meta">${ts.length===0?'sem tópicos ainda':`${ts.length} ${ts.length===1?'tópico':'tópicos'}${sol?` · <span class="ok">${sol} ✓</span>`:''}`}</span>
            ${icon('chev-right')}
          </a></li>`;
        }).join('')}
      </ul>
    </section>
  </div>`;
}

function topicsFilterBar(){
  const f=state.topicFilter;
  return `<div class="filter-chips" role="group" aria-label="Filtrar tópicos">
    <button class="fchip ${f==='all'?'on':''}" data-action="filter-topics" data-filter="all">Todos</button>
    <button class="fchip ${f==='open'?'on':''}" data-action="filter-topics" data-filter="open">Em aberto</button>
    <button class="fchip ${f==='solved'?'on':''}" data-action="filter-topics" data-filter="solved">Resolvidos</button>
  </div>`;
}
function filteredTopics(sid){
  let list=[...topicsOfSubject(sid)].sort((a,b)=>b.ts-a.ts);
  if(state.topicFilter==='open')list=list.filter(t=>!t.replies.some(r=>r.isSolution));
  if(state.topicFilter==='solved')list=list.filter(t=>t.replies.some(r=>r.isSolution));
  return list;
}
function sTopics(){
  const sub=subjectById(state.route.subject);
  if(!sub)return sCourses();
  const c=courseById(sub.courseId);
  const all=topicsOfSubject(sub.id);
  const sol=all.filter(t=>t.replies.some(r=>r.isSolution)).length;
  state.topicFilter='all';
  return `<div class="screen-in narrow">
    ${crumb([['Início','data-action="go" data-route="home"'],[esc(c.name),`data-action="open-course" data-course="${c.id}"`],[esc(sub.name),null]])}
    <header class="page-head">
      <p class="eyebrow">${esc(c.name)}</p>
      <h1 class="serif">${esc(sub.name)}</h1>
      <p class="sub">${all.length} ${all.length===1?'tópico':'tópicos'}${sol?` · ${sol} ${sol===1?'resolvido':'resolvidos'}`:''}</p>
      <div class="head-actions">
        <button class="btn btn-primary" data-action="open-create" data-subject="${sub.id}">${icon('plus')}Criar novo tópico</button>
      </div>
    </header>
    <div id="topics-area">${topicsFilterBar()}
      <div class="topic-list" id="topic-list">${topicsListHTML(sub.id)}</div>
    </div>
  </div>`;
}
function topicsListHTML(sid){
  const list=filteredTopics(sid);
  if(!list.length){
    return emptyHTML('A mesa está posta, mas vazia','Ninguém abriu tópico aqui com esse filtro. Seja a primeira pessoa a puxar assunto.','Criar novo tópico',`open-create-subject" data-subject="${sid}`);
  }
  return list.map(t=>topicCardHTML(t)).join('');
}

function sTopic(){
  const t=topicById(state.route.topic);
  if(!t)return sHome();
  const sub=subjectById(t.subjectId),c=courseById(sub.courseId),u=userById(t.authorId);
  const solved=t.replies.some(r=>r.isSolution);
  return `<div class="screen-in narrow" id="topic-page">
    ${crumb([['Início','data-action="go" data-route="home"'],[esc(c.name),`data-action="open-course" data-course="${c.id}"`],[esc(sub.name),`data-action="open-subject" data-subject="${sub.id}"`],['tópico',null]])}
    <article class="topic-hero card">
      ${solved?`<p class="sol-ribbon">${icon('check-circle')}Resolvido — a pessoa autora marcou uma solução</p>`:''}
      <div class="post-meta">
        ${whoHTML(u,t.ts)}
        <span class="grow"></span>
        <a class="chip chip-link" href="#" data-action="open-subject" data-subject="${sub.id}">${icon('book')}${esc(sub.name)}</a>
      </div>
      <h1 class="serif" style="font-size:clamp(24px,4.5vw,32px);line-height:1.2;margin-bottom:14px">${esc(t.title)}</h1>
      <div class="post-body">${paras(t.body)}</div>
      <div class="post-actions">
        <button class="act ${t.likedByMe?'liked':''}" data-action="like-topic" data-topic="${t.id}" aria-pressed="${t.likedByMe}" aria-label="Curtir tópico">
          ${icon('heart')}<span>${t.likes}</span>
        </button>
        <button class="act" data-action="share-topic" data-topic="${t.id}">${icon('link')}Copiar link</button>
      </div>
    </article>
    <section id="thread-area">${threadHTML(t)}</section>
    <form class="reply-box card" id="reply-form" data-topic="${t.id}">
      ${avatarHTML(state.user)}
      <div style="flex:1">
        <label class="sr-only" for="reply-text">Sua resposta</label>
        <textarea id="reply-text" placeholder="Compartilhe o que você sabe — ou o que você já tentou."></textarea>
        <div class="rb-foot">
          <p class="hint">${icon('bulb')}Boas respostas explicam o <b>porquê</b>, não só o <b>como</b>.</p>
          <button class="btn btn-primary" type="submit">Responder ${icon('send')}</button>
        </div>
      </div>
    </form>
    <div style="height:26px"></div>
  </div>`;
}
function threadHTML(t){
  const isAuthor=state.user.id===t.authorId;
  const solved=t.replies.some(r=>r.isSolution);
  const list=[...t.replies].sort((a,b)=>a.ts-b.ts);
  const replies=list.map(r=>{
    const ru=userById(r.authorId);
    const canSolve=isAuthor&&r.authorId!==state.user.id;
    return `<article class="reply card ${r.isSolution?'reply--sol':''}" id="${r.id}">
      <div class="post-meta">
        ${whoHTML(ru,r.ts)}<span class="grow"></span>
      </div>
      ${r.isSolution?`<p class="sol-flag">${icon('check-circle')}Solução — marcada por ${esc(userById(t.authorId).nick)}</p>`:''}
      <div class="post-body">${paras(r.body)}</div>
      <div class="post-actions">
        <button class="act ${r.likedByMe?'liked':''}" data-action="like-reply" data-topic="${t.id}" data-reply="${r.id}" aria-pressed="${r.likedByMe}" aria-label="Marcar resposta como útil">
          ${icon('heart')}<span>${r.likes}</span><span style="font-weight:600">útil</span>
        </button>
        ${canSolve?`<button class="act act-solve ${r.isSolution?'is-sol':''}" data-action="solve-reply" data-topic="${t.id}" data-reply="${r.id}">
          ${icon('check')}${r.isSolution?'Solução marcada':'Marcar como solução'}
        </button>`:''}
      </div>
    </article>`;
  }).join('');
  const head=`<div class="thread-head"><h2 class="serif">${list.length} ${list.length===1?'resposta':'respostas'}</h2>${solved?`<span class="badge-solved">${icon('check-circle')}tem solução</span>`:''}</div>`;
  return head+(list.length?replies:emptyHTML('Ninguém respondeu ainda','Que tal ser a primeira pessoa a ajudar? Primeiras respostas costumam ser as mais lembradas.'));
}
function refreshThread(){
  const t=topicById(state.route.topic);if(!t)return;
  const keep=$('#reply-text')?.value||'';
  $('#thread-area').innerHTML=threadHTML(t);
  const nt=$('#reply-text');if(nt)nt.value=keep;
}

function sProfile(){
  const u=state.user;
  const topics=myTopics();
  const reps=myReplies();
  const likesGot=topics.reduce((a,t)=>a+t.likes,0)+reps.reduce((a,x)=>a+x.r.likes,0);
  const solved=topics.filter(t=>t.replies.some(r=>r.isSolution)).length;
  const course=courseById(u.courseId);
  const has=id=>u.badges.includes(id);
  return `<div class="screen-in narrow">
    <div class="profile-cover">${logoSVG(40)}</div>
    <div class="card profile-card">
      ${avatarHTML(u,'av-lg')}
      <div class="pc-main">
        <h1 class="serif">${esc(u.name)}</h1>
        <p class="sub">${esc(course?course.name:'SENAI Camaçari')} · ${esc(u.email)}</p>
        <p class="sub" style="margin-top:4px">${icon('bean')} <b>${u.beans} grãos</b> · membro desde ${esc(u.since||'2025.2')}</p>
      </div>
      <div class="pc-actions"><button class="btn btn-ghost btn-sm" data-action="logout">${icon('logout')}Sair</button></div>
    </div>
    <div class="p-stats card">
      <div><b>${topics.length}</b><span>tópicos criados</span></div>
      <div><b>${reps.length}</b><span>respostas dadas</span></div>
      <div><b>${likesGot}</b><span>curtidas recebidas</span></div>
      <div><b>${solved}</b><span>soluções marcadas</span></div>
    </div>
    <section class="badges-sec">
      <div class="sec-head" style="margin-top:10px"><h2 class="serif">Selos</h2><span class="sub" style="font-size:13px">${u.badges.length} de ${BADGES.length}</span></div>
      <div class="badge-grid">
        ${BADGES.map(b=>`<div class="stamp ${has(b.id)?'on':''} ${state.flash.includes(b.id)?'stamp-in':''}" title="${b.desc}">
          <span class="s-ic">${icon(b.ico)}</span>
          <span class="s-nm">${b.name}<br><span style="font-weight:500;color:#8D7B60">${has(b.id)?b.desc:'ainda não'}</span></span>
        </div>`).join('')}
      </div>
    </section>
    <div class="tabs">
      <button class="${state.tab==='topics'?'active':''}" data-action="profile-tab" data-tab="topics">Tópicos criados (${topics.length})</button>
      <button class="${state.tab==='replies'?'active':''}" data-action="profile-tab" data-tab="replies">Respostas dadas (${reps.length})</button>
    </div>
    <div id="profile-list">${profileListHTML()}</div>
    <div style="height:26px"></div>
  </div>`;
}
function profileListHTML(){
  if(state.tab==='topics'){
    const list=[...myTopics()].sort((a,b)=>b.ts-a.ts);
    if(!list.length)return emptyHTML('Nenhum tópico ainda','Sua primeira pergunta vale 5 grãos e — garanto — alguém da unidade tem a mesma dúvida.','Criar meu primeiro tópico');
    return `<div class="topic-list">${list.map(t=>topicCardHTML(t)).join('')}</div>`;
  }
  const list=[...myReplies()].sort((a,b)=>b.r.ts-a.r.ts);
  if(!list.length)return emptyHTML('Nenhuma resposta ainda','Responder é o caminho mais rápido para os selos de colaboração.');
  return `<div class="topic-list">${list.map(({t,r})=>`<a class="mini-item card" href="#" data-action="open-topic" data-topic="${t.id}">
    <p class="ctx">${icon('chat')}em “${esc(t.title)}”</p>
    <h4>${esc(userById(t.authorId).nick)} perguntou — você respondeu:</h4>
    <p>${esc(preview(r.body))}</p>
    <p class="tm">${timeAgo(r.ts)} · ${r.likes} ${r.likes===1?'pessoa achou útil':'pessoas acharam útil'}${r.isSolution?' · marcada como solução':''}</p>
  </a>`).join('')}</div>`;
}

function sSearch(){
  return `<div class="screen-in narrow">
    <header class="page-head">
      <p class="eyebrow">Buscar</p>
      <h1 class="serif">Procurar no fórum</h1>
      <p class="sub">Por palavra-chave, curso ou disciplina — a xícara é por conta da casa.</p>
    </header>
    <div class="card search-box" style="margin-top:18px">
      ${icon('search')}
      <input id="search-input" type="search" placeholder="ex.: recursão, NAT, titulação…" aria-label="Buscar por palavra-chave" value="${esc(state.q)}" autocomplete="off">
      <button class="icon-btn" data-action="clear-search" aria-label="Limpar busca" style="width:34px;height:34px">${icon('x')}</button>
    </div>
    <div class="filter-chips" id="search-chips">
      <button class="fchip ${state.searchCourse==='all'?'on':''}" data-action="search-course" data-course="all">Todos os cursos</button>
      ${COURSES.map(c=>`<button class="fchip ${state.searchCourse===c.id?'on':''}" data-action="search-course" data-course="${c.id}">${esc(c.name.replace('Técnico em ',''))}</button>`).join('')}
    </div>
    <div id="search-results">${searchResultsHTML()}</div>
    <div style="height:26px"></div>
  </div>`;
}
function searchResultsHTML(){
  const q=state.q.trim();
  if(!q&&state.searchCourse==='all'){
    const hot=[...TOPICS].sort((a,b)=>(b.likes+b.replies.length*2)-(a.likes+a.replies.length*2)).slice(0,5);
    return `<p class="result-note">Enquanto você decide, o que a casa mais está comentando:</p><div class="topic-list">${hot.map(t=>topicCardHTML(t)).join('')}</div>`;
  }
  const ql=q.toLowerCase();
  let list=TOPICS.map(t=>{
    const sub=subjectById(t.subjectId),c=courseOf(t),author=userById(t.authorId);
    let score=0;
    if(t.title.toLowerCase().includes(ql))score+=4;
    if(t.body.toLowerCase().includes(ql))score+=2;
    if(sub.name.toLowerCase().includes(ql))score+=3;
    if(c.name.toLowerCase().includes(ql))score+=3;
    if(author.name.toLowerCase().includes(ql))score+=2;
    if(t.replies.some(r=>r.body.toLowerCase().includes(ql)))score+=1;
    return{t,score};
  }).filter(x=>x.score>0);
  if(state.searchCourse!=='all')list=list.filter(x=>courseOf(x.t).id===state.searchCourse);
  list.sort((a,b)=>b.score-a.score||b.t.ts-a.t.ts);
  if(!list.length){
    return emptyHTML('Nada encontrado na casa','Ninguém tocou nesse assunto ainda. Que tal abrir o primeiro tópico sobre ele?',`Criar tópico sobre “${esc(q.slice(0,40))}”`,'open-create');
  }
  const n=list.length;
  return `<p class="result-note">${n} ${n===1?'resultado':'resultados'}${q?` para “<b>${esc(q)}</b>”`:''}:</p>
  <div class="topic-list">${list.map(x=>topicCardHTML(x.t,{ctx:true,q})).join('')}</div>`;
}

/* ==================== ROTEADOR ==================== */
function go(name,params={}){
  state.route={name,...params};
  render();
}
function render(){
  const r=state.route.name;
  document.body.classList.toggle('auth',!state.user);
  let html='';
  switch(r){
    case'login':html=sLogin();break;
    case'home':html=sHome();break;
    case'courses':html=sCourses();break;
    case'course':html=sCourse();break;
    case'topics':html=sTopics();break;
    case'topic':html=sTopic();break;
    case'profile':html=sProfile();break;
    case'search':html=sSearch();break;
    default:html=sHome();
  }
  $('#main').innerHTML=html;
  state.flash=[];
  syncNav();
  window.scrollTo({top:0,behavior:'instant'});
  if(r==='search'){const i=$('#search-input');if(i){i.focus();i.setSelectionRange(i.value.length,i.value.length);}}
}
function syncNav(){
  const r=state.route.name;
  const map={home:'home',search:'search',courses:'courses',course:'courses',topics:'courses',topic:'courses',profile:'profile'};
  const active=map[r]||'';
  document.querySelectorAll('#bottomnav .bn-item, .bar-links a').forEach(el=>{
    const on=el.dataset.route===active;
    el.classList.toggle('active',on);
    if(el.tagName==='A')el.toggleAttribute('aria-current',on);
  });
}
function syncHeader(){
  $('#brand-logo').innerHTML=logoSVG(30);
  $('#header-avatar').innerHTML=state.user?avatarHTML(state.user,'av-md'):'';
  updateBeans(false);
}

/* ==================== AÇÕES ==================== */
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-action]');
  if(!el)return;
  const a=el.dataset.action;
  if(el.tagName==='A')e.preventDefault();

  switch(a){
    case'go':go(el.dataset.route);break;
    case'go-home':go(state.user?'home':'login');break;
    case'open-course':go('course',{course:el.dataset.course});break;
    case'open-subject':go('topics',{subject:el.dataset.subject});break;
    case'open-topic':go('topic',{topic:el.dataset.topic});break;
    case'open-create-subject':
    case'open-create':openCreate(el.dataset.subject,el.dataset.course);break;
    case'close-create':closeModal();break;

    case'auth-tab':{
      const tab=el.dataset.tab;
      $('#login-form').hidden=tab!=='login';
      $('#signup-form').hidden=tab!=='signup';
      document.querySelectorAll('.auth-tabs button').forEach(b=>b.setAttribute('aria-selected',b.dataset.tab===tab));
      break;
    }
    case'demo-login':doLogin(userById('u-ana'));break;
    case'logout':state.user=null;go('login');syncHeader();break;

    case'toggle-theme':{
      document.documentElement.classList.toggle('dark');
      try{localStorage.setItem('se-theme',document.documentElement.classList.contains('dark')?'dark':'light');}catch(_){}
      break;
    }

    case'like-topic':{
      const t=topicById(el.dataset.topic);if(!t)break;
      t.likedByMe=!t.likedByMe;t.likes+=t.likedByMe?1:-1;
      if(t.likedByMe)addBeans(1);
      el.classList.toggle('liked',t.likedByMe);
      el.setAttribute('aria-pressed',t.likedByMe);
      el.querySelector('span').textContent=t.likes;
      break;
    }
    case'like-reply':{
      const t=topicById(el.dataset.topic);const r=t&&t.replies.find(x=>x.id===el.dataset.reply);
      if(!r)break;
      r.likedByMe=!r.likedByMe;r.likes+=r.likedByMe?1:-1;
      if(r.likedByMe)addBeans(1);
      el.classList.toggle('liked',r.likedByMe);
      el.setAttribute('aria-pressed',r.likedByMe);
      el.querySelector('span').textContent=r.likes;
      break;
    }
    case'solve-reply':{
      const t=topicById(el.dataset.topic);
      if(!t||!state.user||t.authorId!==state.user.id)break;
      const r=t.replies.find(x=>x.id===el.dataset.reply);
      if(r.isSolution){r.isSolution=false;}
      else{t.replies.forEach(x=>x.isSolution=false);r.isSolution=true;addBeans(5);}
      checkBadges();refreshThread();
      if(r.isSolution)toast('Solução marcada — isso ajuda quem tiver a mesma dúvida (+5 grãos)','check-circle');
      break;
    }
    case'share-topic':{
      const t=topicById(el.dataset.topic);
      const url=location.href.split('#')[0]+'#topico-'+(t?t.id:'');
      copyText(url).then(()=>toast('Link do tópico copiado','link')).catch(()=>toast('Não deu pra copiar aqui — mas o tópico é este!','link'));
      break;
    }

    case'filter-topics':{
      state.topicFilter=el.dataset.filter;
      const area=$('#topics-area');
      if(area){area.querySelector('.filter-chips').outerHTML=topicsFilterBar();$('#topic-list').innerHTML=topicsListHTML(state.route.subject);}
      break;
    }
    case'search-course':{
      state.searchCourse=el.dataset.course;
      document.querySelectorAll('#search-chips .fchip').forEach(c=>c.classList.toggle('on',c.dataset.course===state.searchCourse));
      $('#search-results').innerHTML=searchResultsHTML();
      break;
    }
    case'clear-search':{
      state.q='';const i=$('#search-input');if(i){i.value='';i.focus();}
      $('#search-results').innerHTML=searchResultsHTML();
      break;
    }

    case'profile-tab':{
      state.tab=el.dataset.tab;
      document.querySelectorAll('.tabs button').forEach(b=>b.classList.toggle('active',b.dataset.tab===state.tab));
      $('#profile-list').innerHTML=profileListHTML();
      break;
    }
  }
});

document.addEventListener('input',e=>{
  if(e.target.id==='search-input'){
    state.q=e.target.value;
    $('#search-results').innerHTML=searchResultsHTML();
  }
});

document.addEventListener('submit',e=>{
  e.preventDefault();
  const f=e.target;
  if(f.id==='login-form'){
    const email=$('#login-email').value.trim().toLowerCase();
    const pass=$('#login-pass').value;
    const fe=$('#lf-email'),fp=$('#lf-pass');
    fe.classList.remove('bad');fp.classList.remove('bad');
    const okEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isSenai=okEmail&&/senai/i.test(email.split('@')[1]||'');
    if(!isSenai){fe.classList.add('bad');$('#login-email').focus();return;}
    if(pass.length<6){fp.classList.add('bad');return;}
    const u=USERS.find(x=>x.email===email);
    if(!u){fp.classList.add('bad');return;}
    doLogin(u);
  }
  else if(f.id==='signup-form'){
    const name=$('#signup-name').value.trim();
    const email=$('#signup-email').value.trim().toLowerCase();
    const courseId=$('#signup-course').value;
    const fn=$('#sf-name'),fe=$('#sf-email');
    fn.classList.remove('bad');fe.classList.remove('bad');
    if(name.length<2){fn.classList.add('bad');$('#signup-name').focus();return;}
    const okEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)&&/senai/i.test(email.split('@')[1]||'');
    if(!okEmail){fe.classList.add('bad');$('#signup-email').focus();return;}
    if(USERS.some(x=>x.email===email)){fe.classList.add('bad');return;}
    const nu={id:'u-'+Date.now(),name,nick:name.split(' ')[0],email,courseId,beans:0,since:'2026.1',badges:[]};
    USERS.push(nu);
    doLogin(nu,true);
  }
  else if(f.id==='reply-form'){
    const t=topicById(f.dataset.topic);
    const box=$('#reply-text');
    if(!t||!box)return;
    const txt=box.value.trim();
    if(!txt){box.focus();box.style.outline='2px solid var(--accent)';setTimeout(()=>box.style.outline='',900);return;}
    t.replies.push({id:'r'+Date.now(),authorId:state.user.id,body:txt,ts:Date.now(),likes:0,likedByMe:false,isSolution:false});
    box.value='';
    addBeans(2);checkBadges();refreshThread();
    const last=t.replies[t.replies.length-1];
    setTimeout(()=>document.getElementById(last.id)?.scrollIntoView({behavior:'smooth',block:'center'}),60);
    toast('Resposta publicada (+2 grãos)','send');
  }
  else if(f.id==='create-form'){
    const courseId=$('#cf-course').value;
    const subjectId=$('#cf-subject').value;
    const title=$('#cf-title').value.trim();
    const body=$('#cf-body').value.trim();
    let ok=true;
    $('#ff-title').classList.toggle('bad',!(title.length>=8));if(title.length<8)ok=false;
    $('#ff-body').classList.toggle('bad',!(body.length>=15));if(body.length<15)ok=false;
    if(!ok)return;
    const t={id:'t'+Date.now(),subjectId,authorId:state.user.id,title,body,ts:Date.now(),likes:0,likedByMe:false,replies:[]};
    TOPICS.unshift(t);
    closeModal();
    addBeans(5);checkBadges();
    go('topic',{topic:t.id});
    toast('Seu tópico está no ar (+5 grãos)','bean');
  }
  else if(f.dataset.role==='top-search'){
    const q=f.querySelector('input').value;
    state.q=q;state.searchCourse='all';
    go('search');
  }
});

document.addEventListener('change',e=>{
  if(e.target.id==='cf-course'){
    const sel=$('#cf-subject');
    sel.innerHTML=SUBJECTS.filter(s=>s.courseId===e.target.value)
      .map(s=>`<option value="${s.id}">${esc(s.name)}</option>`).join('');
  }
});

/* ==================== MODAL ==================== */
function openCreate(subjectId,courseId){
  if(!state.user)return;
  state.lastFocus=document.activeElement;
  const courseSel=$('#cf-course');
  courseSel.innerHTML=COURSES.map(c=>`<option value="${c.id}">${esc(c.name)}</option>`).join('');
  const pre=sub=>subjectById(sub)?.courseId;
  courseSel.value=courseId||pre(subjectId)||state.user.courseId||COURSES[0].id;
  $('#cf-subject').innerHTML=SUBJECTS.filter(s=>s.courseId===courseSel.value)
    .map(s=>`<option value="${s.id}">${esc(s.name)}</option>`).join('');
  if(subjectId)$('#cf-subject').value=subjectId;
  ['#ff-title','#ff-body'].forEach(s=>$(s).classList.remove('bad'));
  const m=$('#modal-create');m.hidden=false;
  document.body.style.overflow='hidden';
  ($('#cf-title').value?'#cf-title':'#cf-course').focus();
}
function closeModal(){
  const m=$('#modal-create');
  if(m.hidden)return;
  m.hidden=true;document.body.style.overflow='';
  if(state.lastFocus&&state.lastFocus.focus)state.lastFocus.focus();
}
document.addEventListener('keydown',e=>{
  const m=$('#modal-create');
  if(m.hidden)return;
  if(e.key==='Escape'){closeModal();return;}
  if(e.key==='Tab'){
    const f=[...m.querySelectorAll('button,select,input,textarea')].filter(x=>!x.disabled);
    const first=f[0],last=f[f.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  }
});

/* ==================== LOGIN / LOGOUT ==================== */
function doLogin(u,isNew){
  state.user=u;
  u.badges=computeBadges(u);
  syncHeader();
  go('home');
  toast(isNew?`Bem-vindo, ${esc(u.nick)}! Seu primeiro café é por nossa conta.`:`Boas-vindas, ${esc(u.nick)}! O café é por nossa conta.`,'bean');
}
function copyText(txt){
  if(navigator.clipboard&&navigator.clipboard.writeText)return navigator.clipboard.writeText(txt);
  return new Promise((res,rej)=>{
    try{
      const ta=document.createElement('textarea');ta.value=txt;ta.style.position='fixed';ta.style.opacity='0';
      document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();res();
    }catch(err){rej(err);}
  });
}

/* ==================== BOOT ==================== */
(function init(){
  try{
    if(localStorage.getItem('se-theme')==='dark')document.documentElement.classList.add('dark');
  }catch(_){}
  syncHeader();
  render();
})();
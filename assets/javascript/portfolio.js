/* ==================== CONTEÚDO (edite aqui) ==================== */

/* Pesquisa: dados do Google Forms (9 respostas), conforme Entrega 3 */
const N=9;
const STATS=[
  ['9','alunos responderam'],
  ['77,8%','usariam a plataforma (7 de 9)'],
  ['44,4%','procuram a IA primeiro (4 de 9)'],
  ['3,8','nota média de segurança da sala (1 a 5)']
];
const CHARTS=[
  {t:'Ao ter uma dúvida em sala, o que você faz primeiro?',n:'Resposta múltipla. Nenhum aluno fica com a dúvida.',c:'',rows:[['Pergunta ao professor',5],['Pergunta à IA',4],['Pergunta ao colega',3]]},
  {t:'Para que você usa IA nos estudos?',n:'Marque todas que se aplicam. Ninguém marcou “programar” nem “não uso”.',c:'',rows:[['Resolver exercícios',4],['Tirar dúvidas',3],['Fazer resumos',2]]},
  {t:'Você usaria uma plataforma para trocar dúvidas com outros alunos?',n:'',c:'olive',rows:[['Sim',7],['Talvez',1],['Não',1]]},
  {t:'A sala de aula é um ambiente seguro para opiniões diferentes?',n:'Escala de 1 a 5. Média 3,8.',c:'olive',rows:[['Nota 1',1],['Nota 2',0],['Nota 3',1],['Nota 4',5],['Nota 5',2]]},
  {t:'Você sente dificuldade em perguntar ou opinar na turma?',n:'',c:'',rows:[['Nunca',4],['Às vezes',4],['Frequentemente',1]]},
  {t:'Você já deixou de perguntar por medo de julgamento?',n:'Soma 10 com 9 participantes: um aluno marcou duas opções.',c:'',rows:[['Não',6],['Sim',2],['Às vezes',2]]}
];

/* Do diagnóstico às decisões de produto (implicações registradas na Entrega 3) */
const IMPL=[
  ['Perguntar com pouca exposição','Parte dos alunos evita perguntar por medo de julgamento.','Prever opção de pergunta anônima ou de baixa exposição.'],
  ['Moderação e regras de convivência','Sentir-se seguro e ter receio de se expor convivem na mesma turma.','Prever moderação e combinados da casa para manter o ambiente seguro.'],
  ['Professor como referência','O professor ainda é a primeira via de dúvida (5 de 9).','Manter respostas validadas ou destacadas por docentes.'],
  ['O que a IA não oferece','A IA já é usada por todos para resolver exercícios e tirar dúvidas.','Oferecer debate e troca entre colegas, ligados ao portfólio de cada aluno.']
];

/* Fotos (cópias comprimidas, sem metadados). Fica fora do site qualquer foto com dado sensível. */
const PHOTOS=[
  {src:'assets/portfolio/validacao-18-11_02.jpg',alt:'Dois integrantes da equipe apresentam a proposta à turma, com projeção ao fundo',cap:'Apresentação da proposta à turma'},
  {src:'assets/portfolio/validacao-18-11_03.jpg',alt:'Integrantes da equipe apresentando em frente à tela de projeção, alunos nos computadores',cap:'Apresentação em sala'},
  {src:'assets/portfolio/validacao-18-11_05.jpg',alt:'Sala de informática com a apresentação projetada e alunos acompanhando',cap:'Turma acompanhando a apresentação'},
  {src:'assets/portfolio/validacao-18-11_04.jpg',alt:'Equipe apresentando enquanto alunos acompanham nos computadores',cap:'Apresentação e demonstração'},
  {src:'assets/portfolio/validacao-18-11_08.jpg',alt:'Integrantes da equipe conversando com alunos durante a coleta de respostas',cap:'Conversa com a turma na coleta de respostas'},
  {src:'assets/portfolio/validacao-18-11_01.jpg',alt:'Integrante da equipe explicando a proposta à turma na sala de informática',cap:'Explicação da proposta'},
  {src:'assets/portfolio/validacao-18-11_07.jpg',alt:'Turma em sala de informática durante a apresentação',cap:'Turma durante a apresentação'},
  {src:'assets/portfolio/validacao-18-11_06.jpg',alt:'Equipe e alunos reunidos na sala durante a atividade',cap:'Equipe com a turma'},
  {src:'assets/portfolio/validacao-18-11_09.jpg',alt:'Visão geral da sala de informática durante a coleta de dados',cap:'Coleta de dados em sala'}
];

/* Vídeos do Drive. O arquivo precisa estar compartilhado como “qualquer pessoa com o link”. */
const VIDEOS=[
  {id:'1YW6G3vyNxdtH0edoHfsDhf61caI3teRn',t:'Apresentação em sala · parte 1',d:'Registro da apresentação da proposta à turma.'},
  {id:'1PSFP__bvimawTZy-YZse-eAn-yvgiSRy',t:'Apresentação em sala · parte 2',d:'Continuação da apresentação e coleta de respostas.'}
  /* Não publicados até conferir o conteúdo (a lousa pode mostrar uma senha):
     180NkZJwfKsauwg4WtCCf43t1Zqlml0Sx  (VID_20261118_200628)
     1Dun7tmqB1YvvpvVSr8zwh3EuMdgpqXYl  (VID_20261118_200656) */
];

/* Próximos passos (planejados, ainda não implementados) */
const NEXT=[
  ['Pergunta anônima','Permitir perguntar com pouca exposição, para quem evita perguntar por medo de julgamento.'],
  ['Moderação e combinados','Regras de convivência e moderação para manter o ambiente seguro.'],
  ['Respostas validadas por docentes','Destacar respostas do professor sem tirar o protagonismo dos colegas.'],
  ['Medir o uso da IA','Em nova rodada de pesquisa, medir como os alunos usam respostas da IA, para testar a hipótese de redução de dependência.']
];

/* Melhorias feitas depois da validação. Preencha quando houver; enquanto estiver vazio, a seção não aparece.
   Formato: {t:'Título',d:'O que mudou e por quê (a partir de qual evidência)'} */
const IMPROVEMENTS=[];

/* Documentos. Inclua só links que o júri consegue abrir (compartilhar como “qualquer pessoa com o link”). */
const DOCS=[
  {t:'Entrega 3 · Pesquisa com usuários, stakeholders e contexto',s:'Google Docs',u:'https://docs.google.com/document/d/10mfnDMsdhvYbe_fIBUoh_pHvvRL-n50AOBEs1R-eB0E/edit'}
  /* ,{t:'Entrega 1 · ...',s:'PDF',u:'https://...'} */
];

const TEAM=[
  ['Luiz Felipe Alves Araújo','Integrante'],
  ['Daniel Santana','Integrante'],
  ['Johnny Santos de Souza','Integrante'],
  ['Jackson Barros dos Santos Júnior','Integrante'],
  ['Gabriel Rodrigues','Integrante'],
  ['Leonardo','Orientador']
];

/* ==================== CÓDIGO ==================== */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

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

/* logos */
$('#brand-logo').innerHTML=logoSVG(30);
$('#hero-logo').innerHTML=logoSVG(92);
$('#foot-logo').innerHTML=logoSVG(40);
$('#proto-fig').innerHTML=logoSVG(150);

/* tema */
$('#theme').addEventListener('click',()=>{
  document.documentElement.classList.toggle('dark');
  try{localStorage.setItem('se-theme',document.documentElement.classList.contains('dark')?'dark':'light');}catch(_){}
});

/* números */
$('#stats').innerHTML=STATS.map(([b,s])=>`<div class="stat"><b>${esc(b)}</b><span>${esc(s)}</span></div>`).join('');

/* gráficos de barras (largura animada ao entrar na tela) */
$('#charts').innerHTML=CHARTS.map(c=>`<article class="card chart">
  <h3>${esc(c.t)}</h3>${c.n?`<p class="note">${esc(c.n)}</p>`:'<p class="note">&nbsp;</p>'}
  ${c.rows.map(([l,v])=>`<div class="bar-row"><span class="lb-t">${esc(l)}</span>
    <span class="track" role="img" aria-label="${esc(l)}: ${v} de ${N}"><span class="fill ${c.c}" data-w="${(v/N*100).toFixed(1)}"></span></span><b>${v}</b></div>`).join('')}
</article>`).join('');
const fills=document.querySelectorAll('.fill');
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.style.width=e.target.dataset.w+'%';io.unobserve(e.target);}}),{threshold:.3});
  fills.forEach(f=>io.observe(f));
}else fills.forEach(f=>f.style.width=f.dataset.w+'%');

/* implicações */
$('#impl').innerHTML=IMPL.map(([t,w,d],i)=>`<article class="card imp"><span class="n">${String(i+1).padStart(2,'0')}</span><h3 style="margin:0;font-size:18px">${esc(t)}</h3><p>${esc(d)}</p><p class="why">Evidência: ${esc(w)}</p></article>`).join('');

/* galeria + lightbox */
$('#gallery').innerHTML=PHOTOS.map((p,i)=>`<button type="button" data-i="${i}" aria-label="Ampliar: ${esc(p.cap)}"><img src="${p.src}" alt="${esc(p.alt)}" loading="lazy" decoding="async"><span class="cap">${esc(p.cap)}</span></button>`).join('');
let cur=0,lastFocus=null;
const lb=$('#lb');
function showPhoto(i){cur=(i+PHOTOS.length)%PHOTOS.length;const p=PHOTOS[cur];$('#lb-img').src=p.src;$('#lb-img').alt=p.alt;$('#lb-cap').textContent=`${p.cap} (${cur+1}/${PHOTOS.length})`;}
function openLb(i){lastFocus=document.activeElement;showPhoto(i);lb.hidden=false;document.body.style.overflow='hidden';$('#lb-x').focus();}
function closeLb(){lb.hidden=true;document.body.style.overflow='';if(lastFocus&&lastFocus.focus)lastFocus.focus();}
$('#gallery').addEventListener('click',e=>{const b=e.target.closest('button[data-i]');if(b)openLb(+b.dataset.i);});
$('#lb-x').addEventListener('click',closeLb);
$('#lb-prev').addEventListener('click',()=>showPhoto(cur-1));
$('#lb-next').addEventListener('click',()=>showPhoto(cur+1));
lb.addEventListener('click',e=>{if(e.target===lb)closeLb();});
document.addEventListener('keydown',e=>{
  if(lb.hidden)return;
  if(e.key==='Escape')closeLb();
  else if(e.key==='ArrowLeft')showPhoto(cur-1);
  else if(e.key==='ArrowRight')showPhoto(cur+1);
});

/* vídeos: o player do Drive só carrega ao clicar (página leve) */
$('#videos').innerHTML=VIDEOS.map(v=>`<article class="vid">
  <div class="frame" data-id="${v.id}"><button class="play" type="button" aria-label="Reproduzir: ${esc(v.t)}"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></button></div>
  <div class="meta"><b>${esc(v.t)}</b><span>${esc(v.d)}</span><br><a href="https://drive.google.com/file/d/${v.id}/view" target="_blank" rel="noopener">abrir no Drive</a></div>
</article>`).join('');
$('#videos').addEventListener('click',e=>{
  const b=e.target.closest('.play');if(!b)return;
  const f=b.parentElement;
  f.innerHTML=`<iframe src="https://drive.google.com/file/d/${f.dataset.id}/preview" allow="autoplay; fullscreen" allowfullscreen title="Vídeo da validação"></iframe>`;
});

/* próximos passos / melhorias */
$('#next').innerHTML=NEXT.map(([t,d])=>`<article class="card next"><span class="tag">planejado</span><h3>${esc(t)}</h3><p>${esc(d)}</p></article>`).join('');
if(IMPROVEMENTS.length){
  $('#melhorias').innerHTML=`<h3 class="serif sub">Melhorias depois da validação</h3><div class="grid2">${IMPROVEMENTS.map(m=>`<article class="card next"><span class="tag">feito</span><h3>${esc(m.t)}</h3><p>${esc(m.d)}</p></article>`).join('')}</div>`;
}

/* documentos e equipe */
$('#docs').innerHTML=DOCS.map(d=>`<li><a href="${esc(d.u)}" target="_blank" rel="noopener"><span>${esc(d.t)}</span><small>${esc(d.s)} ↗</small></a></li>`).join('');
const AV=['#E3C09A|#5B3A1E','#D6AC85|#4A2F16','#5F4530|#F5EFE6','#8A6647|#F5EFE6','#B98F6A|#3D2B1F','#7A5738|#F5EFE6'];
$('#team').innerHTML=TEAM.map(([n,r],i)=>{const[bg,fg]=AV[i%AV.length].split('|');
  const ini=n.split(' ').filter(w=>w.length>2).slice(0,2).map(w=>w[0]).join('');
  return `<li><span class="av" style="background:${bg};color:${fg}" aria-hidden="true">${esc(ini)}</span><div><b>${esc(n)}</b><small>${esc(r)}</small></div></li>`;}).join('');

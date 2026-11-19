# Saber Expresso — site estático (protótipo + portfólio)

Sem build, sem dependências. Pastas: `index.html` (protótipo), `portfolio.html` (portfólio), `assets/`, `vercel.json`.

## Publicar na Vercel (plano gratuito "Hobby")

### Opção A, pelo terminal (mais rápido, ~2 min)
1. Instale o Node.js (nodejs.org), se ainda não tiver.
2. Abra o terminal DENTRO desta pasta e rode:
   npx vercel --prod
3. Na primeira vez ele pede login (abre o navegador). Responda: Set up and deploy? Y · scope: sua conta · Link to existing project? N · nome: saber-expresso · diretório: ./ · demais perguntas: Enter.
4. Ao terminar, ele mostra a URL de produção (algo como https://saber-expresso.vercel.app).

### Opção B, pelo GitHub
1. Crie um repositório no GitHub e envie o conteúdo desta pasta (index.html na raiz).
2. Em vercel.com/new, "Import" o repositório. Framework Preset: Other. Deploy.
3. Cada novo commit publica de novo automaticamente.

Já existe uma versão publicada na Vercel? Use a mesma pasta/projeto e rode `npx vercel --prod` de novo: ele substitui a versão.

## Depois do deploy
- Protótipo: https://SEU-PROJETO.vercel.app/
- Portfólio: https://SEU-PROJETO.vercel.app/portfolio
- Abra a URL numa aba anônima e no celular antes de enviar ao júri.
- Cole a URL na Entrega 8 e no SAGA.
- Se o projeto na Vercel tiver "Deployment Protection / Vercel Authentication" ligada, o júri verá uma tela de login: desligue em Settings > Deployment Protection.

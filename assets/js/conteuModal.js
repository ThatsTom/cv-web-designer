//modall event

document.addEventListener('DOMContentLoaded', function () {
    const modal = new bootstrap.Modal(document.getElementById('exampleModalToggle'));
  
    const modalTitle = document.querySelector('.modal-title');
  
  
    const openModalButtons = document.querySelectorAll('.open-modal');
  
    openModalButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const content = this.getAttribute('data-content');
        modalTitle.textContent = content;
        modal.show();
      });
    });
  });
  
  
  
  
  //texto inicial modal
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const openModalButtons = document.querySelectorAll(".open-modal");
    const textoExperiencia = ["O foco principal é o Marketing Digital da empresa, toda a edição do site e uma grande parte das imagens dos produtos foi feita por mim, implementação de API de serviços de entrega e pagamentos. Criei bots para tarefas repetitivas usando python, para poder manipular e atualizar o sistema ERP(Tiny) de forma que evite erros. Cadastro de produtos voltados para o E-commerce e as plataformas integradas como Mercado Livre, Shopee, Magalu, Tray, criando imagens unicas, descrições remodeladas, SEO tanto para buscas nas plataformas como na proprias tags do site, tirava fotos e fazia video dos produtos e editava com Photoshop, Coreldraw, Canva e Premier. Gerenciamento de todo conteudo plataforma Tray, fazendo toda otimização nas descrições e imagens para subir para o site, gerenciamento de campanhas voltadas para gerar leads para o site, leitura de todo as metricas do trafego pago(google ads, instagram e facebook), cadastrava produtos de diversos formatos para cada plataforma de acordo com a demanda",
  "A agência me manda o projeto em figma com tudo que precisa ser feito, eu transformo todo o projeto em aplicações web, fazendo toda a integração e configurações para o wordpress, seguindo os padrões exigidos pelo projeto se atentando a todos os detalhes, modificando oque se adequá melhor ao projeto e subir todos os arquivos online.",
  "Faço atendimento à clientes presencial e online, para fazer a criação de suas artes, interpretando e auxiliando a suas dúvidas sobre o desenvolvimento do processo criativo, mais especificamente do que é possível fazer de acordo com a demanda exigida, solucionando seus problemas com excelência no atendimento sendo criterioso nos diálogos e sancionando suas dúvidas. Crio moldes físicos e passo eles para vetorização digital, encaixo as artes em moldes digitais usando CorelDraw para reproduzir o layout aprovado em peças de roupas físicas.",
  "Elaboro o layout em geral de acordo com a demanda como logo, cartão de visita, desenhos técnicos, ilutrações, banners, identidade visual, cracha e artes específicas, utilizando CorelDraw, Photoshop, Illustrator e ferramentas auxiliares. Faço a verificação dos arquivos de pré-impressão para um vistoria antes de produzir se os dados estão todos corretos e conectados de acordo com seu campo com o programa Bartender para poder entrar em produção nas impressoras da equipe inteira de arte. Organizo os arquivos de Excel como toda a documentação e validação de informações variaveis para os projetos. Uso o sistemas TOTVs para organização das operações. Fui responsável de criar metodos para empresa na parte de expedição criando um sistema mais automatico e diminuindo o uso de materias manuais como papel para coisas cotidianas e organização de todo o setor de produção tanto na parte de passar as funções para os funcionários como organização do setor, faço o manuseio de maquinas de produção, responsável pelo rendimento funcionários e contratação e dispensa dos mesmos, auxilio na iniciação do funcionário no setor de arte e produção auxiliando em todo processo da empresa.",
  
  ]
  
    openModalButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const content = button.getAttribute("data-content");
  
  
        const modal = document.querySelector("#exampleModalToggle");
        const modalBody = modal.querySelector(".modal-body");
  
        // Atualize o conteúdo do modal-body com base no valor do atributo data-content
        if (content === "Assistente de E-commerce") {
          modalBody.innerHTML = textoExperiencia[0]
              } else if (content === "OutraOpcao") {
          modalBody.innerHTML = "Conteúdo do modal para Outra Opção.";
        }
  
        if(content === "Web Designer"){
          modalBody.innerHTML = textoExperiencia[1]
        }else if(content === "OutraOpcao"){
          modalBody.innerHTML = "Conteúdo do modal para Outra Opção.";
        }

        if(content === "Designer de Produção"){
            modalBody.innerHTML = textoExperiencia[2]
          }else if(content === "OutraOpcao"){
            modalBody.innerHTML = "Conteúdo do modal para Outra Opção.";
          }

          if(content === "Desenhista Pleno e Gestor de Arte"){
            modalBody.innerHTML = textoExperiencia[3]
          }else if(content === "OutraOpcao"){
            modalBody.innerHTML = "Conteúdo do modal para Outra Opção.";
          }
  
  
        
      });
    });
  });
  
  
  
  //texto final modal
  
  document.addEventListener("DOMContentLoaded", function () {
    const openModalButtons = document.querySelectorAll(".open-modal");
    const modalTitle = document.getElementById("exampleModalToggleLabel");
    const modalContent = document.getElementById("modalContent");
  
    openModalButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const content = button.getAttribute("data-content");
        const title = button.closest(".card").querySelector(".card-title").textContent;
        
        modalTitle.textContent = title;
        modalContent.innerHTML = getContentByContentName(content);
      });
    });
  
    function getContentByContentName(contentName) {
      const contentMap = {
        "Assistente de E-commerce": `
        <h4>Programação</h4>
        <ul>
          <li>HTML</li>
          <li>CSS E SASS</li>
          <li>BOOTSTRAP</li>
          <li>TAILWIND</li>
          <li>JAVASCRIPT</li>
          <li>PYTHON</li>
          <li>PYAUTOGUI</li>
          <li>TKINTER</li>
        </ul>
        <h4>Editor de Imagem/Video</h4>
        <ul>
          <li>PHOTOSHOP</li>
          <li>PREMIER</li>
          <li>CORELDRAW</li>
          <li>CANVA</li>
        </ul>
        <h4>Programas Adicionais</h4>
        <ul>
          <li>TINY</li>
          <li>TRAY</li>
          <li>Google Analytic</li>
          <li>Nubimetrics</li>
        </ul>
      `,"Web Designer": `
      <h4>Programação</h4>
      <ul>
      <li>WORDPRESS</li>
      <li>HTML</li>
      <li>CSS</li><br>
     </ul> 
      <h4>Editor de Imagem</h4>
      <ul>
      <li>PHOTOSHOP</li>
      <li>CONVERSOR DE IMAGEM FEITO EM PYTHON</li>`,

      "Designer de Produção":`
       <h4>Editor de Imagem</h4>
      <ul>
        <li>PHOTOSHOP</li>
        <li>CORELDRAW</li>
      </ul>
      <h4>Impressão dos arquivos</h4>
      <ul>
        <li>Plotter</li>
      </ul>
      `,
      "Desenhista Pleno e Gestor de Arte":`
      <h4>Editor de Imagem</h4>
      <ul>
        <li>PHOTOSHOP</li>
        <li>CORELDRAW</li>
      </ul>
      <h4>Programas adicionais</h4>
      <ul>
      <li>Excel</li>
      <li>Bartender Interprise</li>
      <li>Totvs</li>
      </ul>
      <h4>Impressão</h4>
      <ul>
      <li>Epson</li>
      <li>Brother</li>
      </ul>`,
      "outra-opcao": `
        Outro conteúdo personalizado.
        Este é um exemplo adicional.
      `,
      };
  
      return contentMap[contentName] || "Conteúdo padrão se não for encontrado.";
    }
  });
  
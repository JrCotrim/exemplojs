'use strict';

const receitas = [
  {
    titulo: 'Cuscuz de Tapioca',
    imagem: '../assets/cuscuz.jpg',
    preparo: 'Misture tapioca, açúcar e coco ralado; ferva o leite e adicione o leite de coco;' +
      ' despeje no pirex e mexa até consistência; esfrie e espere esfriar.',
    ingredientes: ['Leite', 'Leite de Coco', 'Açúcar', 'Tapioca'],
  },
  {
    titulo: 'Pudim',
    imagem: '../assets/pudim.jpg',
    preparo: 'Bata o açúcar e leite condensado. Adicione as gemas e chocolate  ' +
      'e mexa bem, bata as claras e junte a mistura.',
    ingredientes: ['Leite condensado', 'Ovos', 'Açucar'],
  },
  {
    titulo: 'Brigadeiro',
    imagem: '../assets/brigadeiro.jpg',
    preparo: 'Junte o leite condensado, chocolate em pó e manteiga, aqueça ' +
      'no fogo baixo e passe no granulado',
    ingredientes: ['Leite Condensado', 'Chocolate em Pó', 'Manteiga',
      'Chocolate Granulado'],
  }
];

const getListaIngredientes = (receita) => receita.ingredientes
  .map(ingrediente => `<li class="mb-1">${ingrediente}</li>`)
  .reduce((acumulador, item) => acumulador + item, '<ul class="mb-4">') + '</ul>';


const getCard = (receita) =>
  `<div class='card rounded-5 mx-2' style='width: 320px; height: 600px;'> 
     <img src='${receita.imagem}' class='card-img-top bg-warning'>
     <div class='card-body'>
       <h5 class='card-title text-center fs-4 p-2 fw-bold'>${receita.titulo}</h5>
       <div class='card-text'>${getListaIngredientes(receita)}</div>
       <hr>
       <p class='card-text p-2'>${receita.preparo}</p>
     </div>
   </div>`;

const preencheCatalogo = () => {
  document.getElementById('pnlCatalogo').innerHTML = receitas
    .map(receita => getCard(receita))
    .reduce((acumulador, item) => acumulador + item, '');
}

window.onload = preencheCatalogo;

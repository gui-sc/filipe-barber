export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  images?: string[];
}

export const products: Product[] = [
  {
    id: 'balm',
    name: 'Balm',
    price: '49,90',
    description: 'O balm para barba é multifuncional que pode ser usado como pós barba e também pode te auxiliar no crescimento da barba além de hidratar a pele e a barba. Ele também reduz seu frizz e mantém sua barba sempre hidratada.',
    images: ['/balm.jpeg', '/balm1.jpeg']
  },
  {
    id: 'mascara',
    name: 'Máscara de nutrição',
    price: '79,90',
    description: 'Desenvolvida para todos os tipos de cabelo a máscara de nutrição da Scolari possui fórmula concentrada com óleo de coco, responsável por deixar os fios macios, brilhantes e saudáveis.',
    images: ['/mascara.jpeg']
  },
  {
    id: 'modelador',
    name: 'Modelador em pó baboon',
    price: '94,90',
    description: 'Contextura leve e fina, o modelador em pó da baboon é ideal para modelar e fixar os cabelos reduzindo a oleosidade.',
    images: ['/modelador.jpeg', '/modelador1.jpeg']
  },
  {
    id: 'pomada',
    name: 'Pomada matty clín baboon',
    price: '89,90',
    description: 'Ativo natural que ajuda a reter a hidratação e regular a oleosidade, também possui outros componentes que contribuem para o condicionamento, selagem das cutículas e a diminuição do frizz.',
    images: ['/pomada-baboon.jpeg', '/pomada-baboon1.jpeg']
  },
  {
    id: 'prime-fix',
    name: 'Scolari prime fix efeito matte',
    price: '49,90',
    description: 'A cera modeladora prime fix foi desenvolvida para proporcionar a fixação forte e o efeito matte no cabelo. Além disso contém, em sua formulação, ativos naturais que não agridem os fios.',
    images: ['/prime-fix.jpeg', '/prime-fix1.jpeg']
  },
  {
    id: 'sculpt-cera',
    name: 'Scolari sculp cera brilho',
    price: '49,90',
    description: 'A cera sculp Scolari proporciona efeito de finalização forte e brilho aos cabelo. Preserva a forma do cabelo mesmo em ambientes úmidos, reduz o frizz, restabiliza os fios enquanto estiliza os penteados.',
    images: ['/sculpt-cera.jpeg', '/sculpt-cera1.jpeg']
  }
];

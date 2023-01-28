import FIRST_EXAMPLE from "./exemplo-guincho-de-moto-3.jpg";
import SECOND_EXAMPLE from "./exemplo-transporte-1.jpg";
import THIRD_EXAMPLE from "./exemplo-resgate.jpg";
import FOURTH_EXAMPLE from "./exemplo-reboque.jpg";

const images = [
  {
    alt: "caminhonete cinza com moto honda estradeira azul em cima, guincho de motos em porto alegre",
    src: FIRST_EXAMPLE,
    type: "bottom",
    caption:
      "Transporte realizado com agilidade e segurança 24 horas na capital Porto Alegre e região metropolitana. Demais localidades com agendamento.",
  },

  {
    alt: "caminhonete cinza com moto harley davidson azul bebê em cima, guincho de motos em porto alegre",
    src: SECOND_EXAMPLE,
    caption:
      "Transporte de motos para revisões em oficinas, realização de vistorias, para o litoral, interior e outros estados.",
  },
  {
    alt: "caminhonete cinza com moto estradeira marrom ferro libre em cima, guincho de motos em porto alegre",
    src: THIRD_EXAMPLE,
    type: "top",
    caption:
      "Resgate e socorro de motos em caso de acidente, pane mecânica, pane seca, entre outros.",
  },
  {
    alt: "caminhonete cinza com moto harley davidson  laranja em cima, guincho de motos em porto alegre",
    type: "top",
    src: FOURTH_EXAMPLE,
    caption: "Reboque de motos com reboque basculante 24h.",
  },
];

export default images;

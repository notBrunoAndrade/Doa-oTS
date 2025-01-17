type PetInteface = {
  type: PetType;
  image: string;
  name: string;
  color: string;
  sex: "Masculino" | "Feminino";
};

type PetType = "dog" | "cat" | "others";

const data: PetInteface[] = [
  {
    type: "dog",
    image: "pastor-alemao.jpg",
    name: "Pastor-alemão",
    color: "Amarelo e Preto",
    sex: "Masculino",
  },
  {
    type: "dog",
    image: "labrador.jpg",
    name: "Labrador-retriever",
    color: "Branco",
    sex: "Masculino",
  },
  {
    type: "dog",
    image: "zwergspitz.jpg",
    name: "Zwergspitz",
    color: "Amarelo",
    sex: "Feminino",
  },
  {
    type: "dog",
    image: "husky.jpg",
    name: "Husky Siberiano",
    color: "Branco e Preto",
    sex: "Masculino",
  },
  {
    type: "dog",
    image: "golden.jpg",
    name: "Golden Retriever",
    color: "Amarelo",
    sex: "Masculino",
  },
  {
    type: "dog",
    image: "poodle.jpg",
    name: "Poodle",
    color: "Branco",
    sex: "Feminino",
  },
  {
    type: "dog",
    image: "bulldog.jpg",
    name: "Bulldog",
    color: "Branco e Amarelo",
    sex: "Masculino",
  },
  {
    type: "cat",
    image: "persa.jpg",
    name: "Persa",
    color: "Amarelo",
    sex: "Masculino",
  },
  {
    type: "cat",
    image: "mainecoon.jpg",
    name: "Maine Coon",
    color: "Preto e Branco",
    sex: "Masculino",
  },
  {
    type: "cat",
    image: "bengal.jpg",
    name: "Bengal",
    color: "Branco, Preto e Amarelo",
    sex: "Feminino",
  },
  {
    type: "cat",
    image: "siames.jpg",
    name: "Siamês",
    color: "Amarelo e Preto",
    sex: "Masculino",
  },
  {
    type: "cat",
    image: "sphynx.jpg",
    name: "Sphynx",
    color: "Branco",
    sex: "Masculino",
  },
  {
    type: "others",
    image: "neon.jpg",
    name: "Tetra Neon",
    color: "Vermelho e Azul",
    sex: "Masculino",
  },
  {
    type: "others",
    image: "matogrosso.jpg",
    name: "Mato Grosso",
    color: "Laranja",
    sex: "Masculino",
  },
  {
    type: "others",
    image: "limpavidro.jpg",
    name: "Limpa Vidro",
    color: "Verde e Branco",
    sex: "Masculino",
  },
  {
    type: "others",
    image: "tanictis.jpg",
    name: "Tanictis",
    color: "Vermelho",
    sex: "Masculino",
  },
  {
    type: "others",
    image: "acara.jpg",
    name: "Acará Bandeira",
    color: "Preto",
    sex: "Masculino",
  },
];

export const Pet = {
  getAll: (): PetInteface[] => {
    return data;
  },
  getFromType: (type: PetType): PetInteface[] => {
    return data.filter((index) => index.type === type);
  },
  getFromName: (name: string): PetInteface[] => {
    return data.filter(
      (index) => index.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
  },
};

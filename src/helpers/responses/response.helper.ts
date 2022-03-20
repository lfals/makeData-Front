const baseUrl = "https://localhost.com.br";

const response = [
  {
    url: `${baseUrl}/person/`,
    response: `
    {
      "nome": "Benjamin Roberto Theo Almeida",
      "idade": 45,
      "cpf": "665.010.127-32",
      "rg": "38.825.667-9",
      "data_nasc": "09/03/1977",
      "signo": "Peixes",
      "mae": "Tatiane Sarah",
      "pai": "Renan Raimundo Almeida",
      "email": "benjamin-almeida77@igoralcantara.com.br",
      "senha": "cQLQ634jd7",
      "cep": "79620-386",
      "endereco": "Rua F",
      "numero": 661,
      "bairro": "Nova Três Lagoas",
      "cidade": "Três Lagoas",
      "estado": "MS",
      "telefone_fixo": "(67) 2874-8607",
      "celular": "(67) 99759-7285",
      "altura": "1,96",
      "peso": 89
      }`,
  },
  {
    url: `${baseUrl}/creditcard/`,
    response: `
    {
      number:3593347474642966,
      expiration: "18/12/2022",
      cvv: 559
    }`,
  },
];

export default response;

export interface CompanyInterface {
  usuarioId: string,
  categoriaId:string,
  nome:string,
  email:string,
  celular:string,
  cnpjCpf:string,
  descricao:string,
  valorServico:string,
  tempoServico:string,
  uf:string,
  localidade:string,
  logradouro:string,
  bairro:string,
  numero:string,
  cep:string,
  funcionamento:string,
  documentos:string,
  imagem:string
}

export interface CepInterface {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

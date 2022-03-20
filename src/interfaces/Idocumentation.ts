export interface IDocumentations {
  documentation: Array<IApi>;
}

interface IApi {
  id: number;
  title: string;
  description: string;
  route: string;
  params: Array<IParams>;
}

interface IParams {
  name: string;
  route: string;
  param: string;
  options: Array<object>;
  response: IResponse;
}

interface IResponse {
  code: number;
  data: Array<object>;
}

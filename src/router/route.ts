// export interface IRoutesNames {
//   List: string;
//   Create: string;
//   Update: string;
//   Show: string
// }

// export interface IRoutesPaths {
//   List: string;
//   Create: string;
//   Update: string;
//   Show: string
// }

export const CompanyRouteName = {
  List: 'COMPANY_LIST',
  Create: 'COMPANY_CREATE',
  Update: 'COMPANY_UPDATE',
  Show: 'COMPANY_SHOW'
}

export const CompanyRoutePath = {
  List: '/company',
  Create: 'create',
  Update: 'update/:id',
  Show: 'show/:id'
}

export const IndexRouteName = {
  Index: 'Index'
}

export const IndexRoutePath = {
  Index: '/'
}

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import { CompanyInterface } from './models'

const baseConfig:AxiosRequestConfig = {
  baseURL: 'https://192.168.15.6:4000',
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMxYWY0ZTdmLTA2MzUtNGE3Ny04NzIzLTk0NTFlY2I3ZmZjNyIsImlhdCI6MTYxNzgyMTY0NCwiZXhwIjoxNjQ5Mzc5MjQ0fQ.A7QncZJW690Picbi685b8BON8HtnGsKWNVCxCpzaK9s'
  }
}

export class Companies {
  private repository: AxiosInstance;

  constructor ({ httpRepository = axios.create(baseConfig) }) {
    this.repository = httpRepository
  }

  async getAllCompany () {
    const { data } = await this.repository.get<CompanyInterface[]>('/empresa')

    return data
  }

  async createCompany (company: CompanyInterface) {
    const { data } = await this.repository.post<CompanyInterface>('/empresa', {
      ...company
    })

    return data
  }

  async updateCompany (id:string, company: CompanyInterface) {
    const { data } = await this.repository.put<CompanyInterface>(`https://192.168.15.6:4000/empresa/${id}`, company)

    return data
  }

  async getByIdCompany (id:string) {
    const { data } = await this.repository.get<CompanyInterface>(`/empresa/${id}`)
    return data
  }

  async deleteCompany (id:string) {
    const { data } = await this.repository.delete<Record<string, unknown>>(`/empresa/${id}`)

    return data
  }
}

export default Companies

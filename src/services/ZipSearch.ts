import axios from 'axios'

import { CepInterface } from './models'

export class ZipSearch {
  async search (cep:string) {
    const resp = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return resp.data as CepInterface
  }
}

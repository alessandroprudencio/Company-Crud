<template>
  <q-page padding>
    <div class="text-h6 q-mb-md">Empresas</div>
    <CompanyListTable @remove="remove" :companies="companies"/>
  </q-page>
</template>

<script lang="ts">
import { CompanyInterface } from 'src/services/models'
import { defineComponent, ref, onBeforeMount, defineAsyncComponent } from 'vue'
import { Notify } from 'quasar'

import ServiceCompany from '../../services/Companies'

export default defineComponent({
  components: {
    CompanyListTable: defineAsyncComponent(() =>
      import('../../components/CompanyListTable.vue'))
  },
  name: 'CompanyList',
  setup () {
    const serviceCompany = new ServiceCompany({})

    const companies = ref<CompanyInterface[]>()

    onBeforeMount(async () => {
      companies.value = await serviceCompany.getAllCompany()
    })

    const remove = async (companyId:string, companyName:string) => {
      await serviceCompany.deleteCompany(companyId)
      Notify.create({
        position: 'top',
        message: `Empresa ${companyName} excluida com sucesso!`,
        type: 'positive'
      })
      companies.value = await serviceCompany.getAllCompany()
    }

    return {
      remove,
      companies
    }
  }
})
</script>

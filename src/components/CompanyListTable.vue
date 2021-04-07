<template>
   <q-table
      flat
      :rows="companies"
      :columns="columns"
      row-key="cnpjCpf"
    >
    <template v-slot:top>
        <q-input filled dense debounce="300" color="primary">
          <template v-slot:append>
            <q-icon  name="search" />
          </template>
        </q-input>
        <q-space />
        <q-btn color="primary"  label="Adicionar" @click="$router.push({name:CompanyRouteName.Create})" />
      </template>
    <template v-slot:body-cell="props">
        <q-td v-if="props.col.field==='edit'"  :props="props" class="q-gutter-x-md">
          <q-btn @click="$router.push({name:CompanyRouteName.Show, params:{id:props.row.id}})" icon="search" round size="sm" color="info"></q-btn>
          <q-btn @click="$router.push({name:CompanyRouteName.Update, params:{id:props.row.id}})" icon="mode_edit" round size="sm" color="warning"></q-btn>
          <q-btn @click="$emit('remove',props.row.id, props.row.nome)" icon="delete" round size="sm" color="red"></q-btn>
        </q-td>
        <q-td v-else>
          {{props.value}}
        </q-td>
      </template>
   </q-table>
</template>

<script lang="ts">
import { CompanyInterface } from 'src/services/models'
import { defineComponent, ref, PropType } from 'vue'

import { CompanyRouteName } from '../router/route'

export default defineComponent({
  name: 'CompanyListTable',
  emits: ['remove'],
  props: {
    companies: { type: Array as PropType<CompanyInterface[]>, required: true, default: () => [] }
  },
  setup () {
    const columns = ref([
      {
        name: 'nome',
        required: true,
        label: 'Nome',
        field: 'nome',
        align: 'left',
        sortable: true
      },
      { field: 'cnpjCpf', name: 'cnpjCpf', align: 'left', label: 'CPF/CNPJ', sortable: true },
      { field: 'valorServico', align: 'left', name: 'valorServico', label: 'Valor Serviço' },
      { field: 'edit', name: 'edit', label: '', align: 'center ' }

    ])
    return { columns, CompanyRouteName }
  }
})
</script>

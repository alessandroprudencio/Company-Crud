<template>
  <q-page padding>
      <div class="text-h6 q-mb-md">{{titlePage}}</div>
          <q-form
          ref="form"
              @submit="onSubmit"
              @reset="onReset"
            >
      <div class="row q-gutter-md">
        <div class="col-3">
          <q-input
            filled
            v-model="company.nome"
            hide-bottom-space
            lazy-rules
            :disable="routeIs.show"
            :rules="[
            (val) => (val && val.length > 0) || 'Digite o nome',
            ]"
            label="Nome"
            required
          />
        </div>
        <div class="col-3">
          <q-input
            filled
            v-model="company.email"
            hide-bottom-space
            lazy-rules
            :disable="routeIs.show"
            :rules="[
            (val) => (val && val.length > 0) || 'Digite o email',
            ]"
            label="E-mail"
            required
          />
        </div>
          <div class="col-3">
          <q-input
            filled
            v-model="company.cnpjCpf"
            hide-bottom-space
            lazy-rules
            :disable="routeIs.show"
            :rules="[
            (val) => (val && val.length > 0) || 'Digite o  cnpj ou Cpf',
            ]"
            label="CNPJ/CPF"
            @keydown="novoCpfCnpj"
            maxlength="18"
            required
          />
        </div>
        <div class="col-2">
          <q-input
            filled
            v-model="company.celular"
            hide-bottom-space
            lazy-rules
            :disable="routeIs.show"
            :rules="[
            (val) => (val && val.length > 0) || 'Digite o celular ',
            ]"
            label="Celular"
            mask="(##) #####-####"
            required
          />
        </div>

        <div class="col-2">
          <q-input
            filled
            v-model="company.cep"
            @change="searchZip(company.cep)"
            hide-bottom-space
            lazy-rules
            :disable="routeIs.show"
            :rules="[
            (val) => (val && val.length > 0) || 'Digite o cep',
            ]"
            label="CEP"
            required
            mask="#####-###"
          />
        </div>
        <div class="col-1">
          <q-input
            filled
            v-model="company.uf"
            hide-bottom-space
            lazy-rules
            :disable="routeIs.show"
            :rules="[
            (val) => (val && val.length > 0) || 'Digite a sigla do estado',
            ]"
            label="UF"
            maxlength="2"
            required
          />
        </div>
        <div class="col-3">
          <q-input
            filled
            v-model="company.localidade"
            hide-bottom-space
            lazy-rules
            :disable="routeIs.show"
            :rules="[
            (val) => (val && val.length > 0) || 'Digite o Cidade ',
            ]"
            label="Cidade"
            required
          />
        </div>
        <div class="col-5">
          <q-input
            filled
            v-model="company.logradouro"
            hide-bottom-space
            lazy-rules
            :disable="routeIs.show"
            :rules="[
            (val) => (val && val.length > 0) || 'Digite o logradouro ',
            ]"
            label="Logradouro"
            required
          />
        </div>
        <div class="col-5">
          <q-input
            filled
            v-model="company.bairro"
            hide-bottom-space
            lazy-rules
            :disable="routeIs.show"
            :rules="[
            (val) => (val && val.length > 0) || 'Digite o bairro ',
            ]"
            label="Bairro"
            required
          />
        </div>
        <div class="col-1">
          <q-input
            filled
            v-model="company.numero"
            hide-bottom-space
            lazy-rules
            :disable="routeIs.show"
            :rules="[
            (val) => (val && val.length > 0) || 'Digite o numero',
            ]"
            label="Numero"
            required
          />
        </div>
        <div class="col-6">
          <q-select
            filled
            v-model="company.categoriaId"
            :options="categorias"
            label="Categoria"
            option-value="id"
            option-label="nome"
            hide-bottom-space
            lazy-rules
            :disable="routeIs.show"
            :rules="[
            (val) => (val && val.length > 0) || 'Escolha a categoria',
            ]"
            required
          ></q-select>
        </div>
        <div class="col-3">
          <q-input
            filled
            v-model="company.tempoServico"
            hide-bottom-space
            lazy-rules
            :disable="routeIs.show"
            :rules="[
            (val) => (val && val.length > 0) || 'Digite o tempo do serviço',
            ]"
            label="Tempo Serviço(minutos)"
            required
          />
        </div>
        <div class="col-2">
          <q-input
            filled
            v-model="company.valorServico"
            hide-bottom-space
            lazy-rules
            :disable="routeIs.show"
            :rules="[
            (val) => (val && val.length > 0) || 'Digite o valor do serviço',
            ]"
            label="Valor do Serviço"
            required
          />
        </div>
        <div class="col-4">
          <q-file
            filled
            label="Logo"
            v-model="urlImage"
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </div>
      </div>

      <q-btn
        class="q-mt-md"
        label="Horarios de Funcionamento"
        color="primary"
        @click="modalHours = true"
        icon="event"
      />

      <q-dialog
        v-model="modalHours"
        persistent
        max-width="50vw"
      >
        <q-card>
          <q-toolbar
            dense
            flat
            color="white"
          >
            <q-toolbar-title> Escolha os dias e horários</q-toolbar-title>
            <q-btn
              icon="close"
              flat
              @click="modalHours = false"
            >
            </q-btn>
          </q-toolbar>
          <q-card-section>
            <q-select
              filled
              v-model="funcionamento.dia"
              :options="[
                { dia: 1, nome: 'Segunda' },
                { dia: 2, nome: 'Terça' },
                { dia: 3, nome: 'Quarta' },
                { dia: 4, nome: 'Quinta' },
                { dia: 5, nome: 'Sexta' },
                { dia: 6, nome: 'Sábado' },
                { dia: 7, nome: 'Domingo' },
              ]"
              item-value="dia"
              item-text="nome"
            ></q-select>
          </q-card-section>
          <q-card-section>
            <span>Das</span>
            <q-select
              filled
              v-model="funcionamento.abertura"
              :options="horarios"
              item-value="id"
              item-text="horario"
            ></q-select>

            <span>Até</span>
            <q-select
              filled
              v-model="funcionamento.encerramento"
              :options="horarios"
              item-value="id"
              item-text="nome"
            ></q-select>
          </q-card-section>
          <q-card-actions>
            <q-space></q-space>
            <q-btn
              color="green darken-1"
              text
              @click="novoHorario"
            >
              Salvar
            </q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>

      <div v-if="routeIs.create || routeIs.update" class="text-right">
        <q-btn
          label="Cancelar"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
        <q-btn
          :label="routeIs.create ? 'Cadastrar' : 'Atualizar' "
          type="submit"
          color="primary"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script lang="ts">
import { CompanyInterface } from 'src/services/models'
import { defineComponent, ref, computed, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { date } from 'quasar'
import { ZipSearch } from 'src/services/ZipSearch'
import { Companies } from 'src/services/Companies'
import { CompanyRouteName } from 'src/router/route'

const baseState = ():CompanyInterface => ({
  nome: '',
  usuarioId: '',
  categoriaId: '',
  email: '',
  descricao: '',
  documentos: '',
  imagem: '',
  celular: '',
  cnpjCpf: '',
  cep: '',
  funcionamento: '',
  uf: '',
  localidade: '',
  logradouro: '',
  bairro: '',
  numero: '',
  tempoServico: '',
  valorServico: ''
})

export default defineComponent({
  name: 'CompanyForm',
  setup () {
    const $route = useRoute()
    const $router = useRouter()

    const company = ref<CompanyInterface>(baseState())

    const routeIs = computed(() => ({
      create: !!$route.meta.create,
      show: !!$route.meta.show,
      update: !!$route.meta.update
    }))

    const titlePage = computed((): string => {
      if (routeIs.value.show) return `Detalhes - ${company.value.nome}`
      if (routeIs.value.update) return `Editar - ${company.value.nome}`
      return 'Cadastrar nova empresa'
    })

    const companyService = new Companies({})

    const form = ref(null)

    const funcionamento = ref({
      abertura: '',
      dia: '',
      encerramento: ''
    })
    const valid = ref(true)
    const horariosFuncionamento = ref([{
      abertura: '',
      dia: '',
      encerramento: ''
    }])
    const urlImage = ref('')
    const modalHours = ref(false)
    const categorias = ref([
      { id: 'cfcd24fb-fc5b-4d37-96fe-84455481317a', nome: 'Lava Rapido', slug: 'lava_rapido' }
    ])

    const companyId :string = $route.params.id as string

    const getCompany = async () => {
      company.value = await companyService.getByIdCompany(companyId)
    }

    onBeforeMount(async () => {
      if (companyId) {
        await getCompany()
      }
    })

    const horarios = computed((): string[] => {
      const hours = []
      for (let hour = 0; hour < 24; hour++) {
        const dateNow = new Date().setHours(hour)
        const newHours = date.formatDate(dateNow, 'HH:mm')
        hours.push(newHours)
        // hours.push(
        //   date.formatDate({
        //     hour: new Date(),
        //     minute: 15
        //   }, 'HH:mm'))
      }
      return hours
    })

    const onReset = async () => {
      if (routeIs.value.update) {
        await getCompany()
      }

      if (routeIs.value.create) {
        company.value = baseState()
      }
    }

    function formataCnpjCpf (v:string) {
      // Remove tudo o que não é dígito
      v = v.replace(/\D/g, '')

      if (v.length <= 14) { // CPF
        // Coloca um ponto entre o terceiro e o quarto dígitos
        v = v.replace(/(\d{3})(\d)/, '$1.$2')

        // Coloca um ponto entre o terceiro e o quarto dígitos
        // de novo (para o segundo bloco de números)
        v = v.replace(/(\d{3})(\d)/, '$1.$2')

        // Coloca um hífen entre o terceiro e o quarto dígitos
        v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      } else { // CNPJ
        // Coloca ponto entre o segundo e o terceiro dígitos
        v = v.replace(/^(\d{2})(\d)/, '$1.$2')

        // Coloca ponto entre o quinto e o sexto dígitos
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')

        // Coloca uma barra entre o oitavo e o nono dígitos
        v = v.replace(/\.(\d{3})(\d)/, '.$1/$2')

        // Coloca um hífen depois do bloco de quatro dígitos
        v = v.replace(/(\d{4})(\d)/, '$1-$2')
      }

      return v
    }

    const novoHorario = () => horariosFuncionamento.value.push(funcionamento.value)

    const converteUrlFile = (dataurl:string, filename:string) => {
      const arr = dataurl.split(',')
      const re = /:(.*?);/

      const mime = re.exec(arr[0])

      if (!mime) alert('Erro arquivo invalido!')

      const bstr = atob(arr[1])
      let n = bstr.length
      const u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      if (mime) return new File([u8arr], filename, { type: mime[0] })
    }
    const onSubmit = async (): Promise<void> => {
      const formData = new FormData()
      if (urlImage.value) {
        formData.append(
          'imagem',
          urlImage.value
        )
      }
      formData.append('nome', company.value.nome)
      formData.append('email', company.value.email)
      formData.append('valorServico', company.value.valorServico)
      formData.append('tempoServico', company.value.tempoServico)
      formData.append('celular', company.value.celular)
      formData.append('localidade', company.value.localidade)
      formData.append('bairro', company.value.bairro)
      formData.append('logradouro', company.value.logradouro)
      formData.append('numero', company.value.numero)
      formData.append('uf', company.value.uf)
      formData.append('categoriaId', company.value.categoriaId)
      formData.append('usuarioId', company.value.usuarioId)
      formData.append('cep', company.value.cep)
      formData.append('cnpjCpf', company.value.cnpjCpf)
      formData.append(
        'funcionamento',
        JSON.stringify(horariosFuncionamento.value)
      )

      if (routeIs.value.create) {
        await companyService.createCompany(formData as any)
      } else {
        await companyService.updateCompany(companyId, formData as any)
      }

      await $router.push({ name: CompanyRouteName.List })
    }
    const novoCpfCnpj = () => {
      company.value.cnpjCpf = formataCnpjCpf(company.value.cnpjCpf)
    }

    const searchZip = async (zip:string) => {
      const ZipSearchService = new ZipSearch()

      const respZip = await ZipSearchService.search(zip)

      company.value.localidade = respZip.localidade
      company.value.logradouro = respZip.logradouro
      company.value.bairro = respZip.bairro
      company.value.uf = respZip.uf
    }

    return {
      routeIs,
      titlePage,
      form,
      novoHorario,
      searchZip,
      categorias,
      novoCpfCnpj,
      converteUrlFile,
      company,
      onSubmit,
      funcionamento,
      valid,
      horariosFuncionamento,
      horarios,
      modalHours,
      urlImage,
      onReset

    }
  }
})
</script>

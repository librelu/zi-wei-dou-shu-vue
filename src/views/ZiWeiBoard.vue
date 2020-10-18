<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="birthDate"
          label="生日年月"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        ref="picker"
        v-model="birthDate"
        :max="new Date().toISOString().substr(0, 10)"
        min="1920-01-01"
        @change="save"
      ></v-date-picker>
    </v-menu>
    <v-select
      v-model="birthTime"
      :items="birthTimes"
      :rules="[v => !!v || '請選擇生時!']"
      prepend-icon="mdi-calendar"
      label="生時"
      required
    ></v-select>
    <v-select
      v-model="gender"
      :items="genders"
      :rules="[v => !!v || '請選擇生理性別!']"
      prepend-icon="mdi-human-male-female"
      label="生理性別"
      required
    ></v-select>
     <v-btn
      color="primary"
      class="mr-4"
      @click="submit"
    >
      開啟命盤
    </v-btn>
     <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      清除
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => {
    return {
      genders: getGenders(),
      gender: false,
      birthDate: null,
      menu: false,
      birthTime: null,
      valid: true,
      birthTimes: getBirthTime(),
    }
  },
  watch: {
    menu (val) {
       val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    },
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    submit(){
      console.log("hello")
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
function getGenders(){
  let genders = ["男", "女"]
  return Array(2).fill({}).map((_, idx)=> {
    return {
      text: genders[idx],
      value: idx
    }
  })
}
function getBirthTime(){
  let timeName = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
  return Array(24).fill({}).map((_, idx)=> {
    return {
      text: idx+ "點"+ "-" + timeName[(parseInt((idx+1) / 2)) % 12] + "時",
      value: idx
    }
  })
}
</script>
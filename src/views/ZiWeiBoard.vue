<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-container>
      <v-row justify="center">
          <v-col cols=12 md=4 lg=4>
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
                  :rules="[v => !!v || '請選擇生日年月!']"
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
          </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="4" lg="4">
          <v-select
            v-model="birthTime"
            :items="birthTimes"
            :rules="[v => !!v || '請選擇生時!']"
            prepend-icon="mdi-calendar"
            label="生時"
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="justify-center" cols=12 md=4>
          <v-select
            v-model="gender"
            :items="genders"
            :rules="[v => !!v || '請選擇性別!']"
            prepend-icon="mdi-human-male-female"
            label="性別"
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-row justify="center">
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
      </v-row>
    </v-container>
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
      this.$refs.form.validate()
      let gender = this.gender
      let birthdayInfo = this.birthDate.split("-")
      this.$store.dispatch({
            type: 'setBoardInfo',
            gender,
            birthYear: birthdayInfo[0],
            birthMonth: birthdayInfo[1],
            birthDate: birthdayInfo[2],
            birthHour: this.birthTime,
            timeZone: this.timeZone,
      }).then(()=>{
          this.$router.push({name:"GetZiWeiBoard"})
      })
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
  let time = Array(24).fill({}).map((_, idx)=> {
    return {
      text: idx+ "點"+ "-" + timeName[(parseInt((idx+1) / 2)) % 12] + "時",
      value: idx
    }
  })
  let lastElement = time.slice(-1)
  time.pop()
  return lastElement.concat(time)
}
</script>
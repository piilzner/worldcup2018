<template>
  <div class="worldCup">
      <h1 class="title">{{ wc.name }}</h1>
      <h3>Hosted by <a href="https://erepizzafredag.se/">erepizzafredag!</a></h3>
      <div class="match-card" v-for="(round, index) in wc.rounds" :key="index">
        <h2>{{ round.name }}</h2>
      <table>
        <tr v-for="(match, index) in round.matches" :key="index">
          <td>
            <h4>{{ match.team1.name }}</h4>
            <h5 class="match-score" v-if="match.score1">{{ match.score1 }}</h5>
            <h5 class="match-score" v-if="!match.score1">0</h5>
            <div class="goals">
              <span v-for="(goal, index) in match.goals1">{{ goal.name }}: {{ goal.minute }}, {{ goal.score1 }} - {{ goal.score2 }}</span>
            </div>
          </td>
          <td class="match-info">
            <h4>{{ match.time }}</h4>
            <span>{{ match.date }}</span>
            <h5>{{ match.city }}</h5>
            <span>{{ match.stadium.name }}</span>
            </td>
          <td>
            <h4>{{ match.team2.name }}</h4>
            <h5 class="match-score" v-if="match.score2">{{ match.score2 }}</h5>
            <h5 class="match-score" v-if="!match.score2">0</h5>
            <div class="goals">
              <span v-for="(goal, index) in match.goals2">{{ goal.name }}: {{ goal.minute }}, {{ goal.score1 }} - {{ goal.score2 }}</span>
            </div>
          </td>
        </tr>
      </table>
      </div>
      <Info />
    </div>
</template>

<script>
import axios from 'axios'
import Info from '@/components/Info'

export default {
  name: 'WorldCup',
  components: {
    Info
  },
  data () {
    return {
      wc: []
    }
  },
  methods: {
    checkNumber() {
      if( this.wc.rounds.matches.score1 == null ) {
          this.wc.rounds.matches.score1 = 0
      }else {
        this.wc.rounds.matches.score1 = this.wc.rounds.matches.score1
      }
    }
  },
  created() {
    axios.get('https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json')
          .then(response => {
            this.wc = response.data
          }).catch(err => {
            console.log(err)
            this.errMsg = String(err)
          })
  }
}
</script>


<style >

h1.title {
  font-size: 55px;
  margin: 50px 0 20px;
  text-align: center;
  font-weight: normal;
  color: #fff;
}

.worldCup {
  width: 100%;
  overflow: hidden;
}

.worldCup h3 {
  text-align: center;
  display: block;
  font-size: 14px;
  margin-bottom: 30px;
}

.worldCup .match-card {
  width: 95%;
  max-width: 600px;
  padding: 20px;
  background: #292929;
  margin: 0 auto 30px;
  display: block;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 15px 36px 4px rgba(0, 0, 0, 0.5);
}

.worldCup .match-card h2 {
  font-size: 24px;
  font-weight: normal;
  margin: 0 0 50px 0;
  display: block;
}

.worldCup .match-card .goals span {
  display: block;
  font-size: 12px;
}

.worldCup .match-card .match-info h4 {
    font-size: 24px;
    font-weight: 900;
    color: #df0714;
    padding-bottom: 0;
}

.worldCup .match-card .match-info span {
  font-size: 10px;
}

.worldCup .match-card table {
  width: 100%;
  margin-top: 20px;
}

.worldCup .match-card table tr td {
  width: 40%;
  text-align: center;
  padding-bottom: 50px;
  vertical-align: top;
}

.worldCup .match-card table tr:last-child() td {
  padding-bottom: 0;
}

.worldCup .match-card table td:nth-child(2) {
  width: 20%;
}

.worldCup .match-card table td h4 {
  font-size: 26px;
  padding-bottom: 15px;
  color: #fff;
}

.worldCup .match-card table td h5 {
  font-size: 20px;
}

.worldCup .match-card table td h5.match-score {
  font-size: 32px;
  font-weight: 900;
  color: #fff;
  padding-bottom: 20px;
}

@media ( max-width: 767px ) {
  .worldCup .match-card table td h4 {
    font-size: 18px;
  }
}

</style>

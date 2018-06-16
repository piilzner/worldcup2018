<template>
  <div class="worldCup">
      <h1 class="title">{{ wc.name }}</h1>
      <div class="match-card" v-for="(round, index) in wc.rounds" :key="index">
        <h2>{{ round.name }}</h2><span>{{ round.matches.date }}</span>
      <table>
        <tr v-for="(match, index) in round.matches" :key="index">
          <td> 
            <h4>{{ match.team1.name }}</h4> 
            <h5 class="match-score" v-if="match.score1">{{ match.score1 }}</h5>
            <h5 class="match-score" v-if="!match.score1">0</h5>
          </td>
          <td class="match-info">
            <h4>{{ match.time }}</h4>
            <h5>{{ match.city }}</h5>
            <span>{{ match.stadium.name }}</span>
            </td>
          <td>
            <h4>{{ match.team2.name }}</h4> 
            <h5 class="match-score" v-if="match.score2">{{ match.score2 }}</h5>
            <h5 class="match-score" v-if="!match.score2">0</h5>
          </td>
        </tr>
      </table>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'WorldCup',
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
            console.log(response)
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
  margin: 50px 0;
  text-align: center;
  font-weight: normal;
  color: #fff;
}

.worldCup .match-card {
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background: #292929;
  margin: 0 auto 30px;
  display: block;
  border-radius: 10px;
  box-shadow: 0px 15px 36px 4px rgba(0, 0, 0, 0.5);
}

.worldCup .match-card h2 {
  font-size: 24px;
  font-weight: normal;
  margin: 0 0 50px 0;
  display: block;
}

.worldCup .match-card .match-info h4 {
    font-size: 24px;
    font-weight: 900;
    color: #df0714;
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
}

</style>



var data = JSON.parse('[{"name":"Technocup 2021 - Elimination Round 3","time":"61 days, 15 hours, 55 seconds"},{"name":"Технокубок 2021 - Ознакомительный Раунд 3","time":"59 days, 14 hours, 55 seconds"},{"name":"Technocup 2021 - Elimination Round 2","time":"40 days, 7 hours, 55 seconds"},{"name":"Технокубок 2021 - Ознакомительный Раунд 2","time":"38 days, 6 hours, 55 seconds"},{"name":"Codeforces Round #680 (Div. 2)","time":"24 days, 14 hours, 30 minutes, 55 seconds"},{"name":"Kotlin Heroes 5: ICPC Round","time":"23 days, 14 hours, 30 minutes, 55 seconds"},{"name":"Kotlin Heroes 5: ICPC Round (Practice)","time":"16 days, 13 hours, 30 minutes, 55 seconds"},{"name":"Educational Codeforces Round 97 (Rated for Div. 2)","time":"7 days, 14 hours, 30 minutes, 55 seconds"},{"name":"Technocup 2021 - Elimination Round 1","time":"5 days, 11 hours, 55 seconds"},{"name":"Codeforces Round #679 (Div. 1, based on Technocup 2021 Elimination Round 1)","time":"5 days, 11 hours, 55 seconds"},{"name":"Codeforces Round #679 (Div. 2, based on Technocup 2021 Elimination Round 1)","time":"5 days, 11 hours, 55 seconds"},{"name":"Codeforces Round #678 (Div. 2)","time":"4 days, 14 hours, 55 seconds"},{"name":"Технокубок 2021 - Ознакомительный Раунд 1","time":"3 days, 10 hours, 55 seconds"},{"name":"Codeforces Round #677 (Div. 3)","time":"14 hours, 30 minutes, 56 seconds"}]')
/*fetch("localhost:4000/api/contests")
.then(res => res.json())
.then(
  (result) => {
    data = JSON.parse(result);
  },
  (error) => {
    data = []
  }
)*/
var counter = data.length

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newContest = () => {
  if (counter == 0) {
    return {name: '', starttime: ''}
  }
  counter--
  return {
    name: data[counter].name,
    starttime: data[counter].time
  }
}


export default function makeData(...lens) {
  if (data === undefined) {
    return [];
  }
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newContest(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}
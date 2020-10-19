

var data = ""
var counter = 0

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newContest = () => {
  
  return {
    name: data[counter].name,
    starttime: data[counter].starttime,
  }
}

async function getData(){
    return await fetch('localhost:4000/api/contests',
    {
    	method: "GET",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
  }

export default function makeData(...lens) {
  data = getData()
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
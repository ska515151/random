function main() {
  let results = [{
    "id": 1,
    "adWeight": 30
  }, {
    "id": 2,
    "adWeight": 70
  }]
  let rowIndex = weightCheck(results)
  return rowIndex
}

// 가중치 적용하여 return
function weightCheck(rows) {
  let point = 0
  let beforePoint = 0
  let totalWeightn = totalWeight(rows)
  let ran = Math.floor(Math.random() * totalWeightn + 1)
  let i = 0

  for (i = 0; i < rows.length; i++) {
    point = beforePoint + rows[i].adWeight
    if (ran > beforePoint && ran <= point) {
      break
    }
    beforePoint = point
  }
  return i
}

// 총 가중치 계산
function totalWeight(list) {
  let total = 0

  for (let i = 0; i < list.length; i++) {
    total = total + list[i].adWeight
  }

  return total
}
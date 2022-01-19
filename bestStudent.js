  function getBestStudent (scores){
    let bestAverageScore = 0;
    let averageScore = 0;
    let student;
  for (let name in scores) {
      averageScore = scores[name].reduce((acc, el) => {
          return (acc + el)
      }) / scores[name].length;

    if(averageScore > bestAverageScore){
      bestAverageScore = averageScore;
      student = name;
    }
  }
    return student;
  }

  let group = {
    John: [100, 90, 80],
    Bob: [100, 100, 100]
  }

  console.log(getBestStudent(group))
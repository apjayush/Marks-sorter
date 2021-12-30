let studentDetails = 

[
  {
    code: "A001",
    name: "Ayush",
    score: 81,
    id: 0,
  },
  {
    code: "A002",
    name: "Radha",
    score: 23,
    id: 1,
  },
  {
    code: "A003",
    name: "Rohan",
    score: 22,
    id: 2,
  },
  {
    code: "A004",
    name: "Mayur",
    score: 22,
    id: 3,
  },
  {
    code: "A005",
    name: "Shivani",
    score: 75,
    id: 4,
  },
  {
    code: "A006",
    name: "Avika",
    score: 34,
    id: 5,
  },
  {
    code: "A007",
    name: "John",
    score: 45,
    id: 6,
  },
  {
    code: "A008",
    name: "Rony",
    score: 54,
    id: 7,
  },
  {
    code: "A009",
    name: "Karan",
    score: 45,
    id: 8,
  },
  {
    code: "A010",
    name: "Sharma ",
    score: 41,
    id: 9,
  },
  {
    code: "A013",
    name: "vivek",
    score: 61,
    id: 3,
  },
  
];

function compare(a,b){
    
  if((a.score)==(b.score)){
    return a.code - b.code
  }
  else{

   return b.score - a.score
  }
    
}




let sortedArray= studentDetails.sort(compare)


let a= JSON.stringify(sortedArray,null,4)

let q = JSON.parse(a)









// console.log(studentDetails)



// function builttable(data){
//   var table = document.getElementById("myTable")
// }

// for(var i=0; i<data.length; i++){
//   var row= `<tr>
//   <td>{$(data[i].)}`
// }








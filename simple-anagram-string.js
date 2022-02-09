let str1 = "client"
let str2 = "centil"
let str3 = "centle"

function anagrams(a, b) {
  
  if (new Set(a).length !== new Set(b).length) {
    console.log("not an anagram")
  }
  else{
    let setA = new Set(a)
    
    setA.forEach(el=>{
      //console.log(el)
      if (!b.split("").includes(el)) {
        console.log(el)
      }
    })
  }
}

anagrams(str3, str1)
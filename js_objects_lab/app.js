var mom = {
  personality: {
    intellegence: "smart"
    extrovert: true
    outgoing: true
    personalbe: true
    persistant: true
   }
   physicalAttributes: {

   }
  physicalAttributes: ["curly hair", "brown hair", "short", "short hair", "brown eyes"]
  }

var dad = {
  personality: ["nice", "stubborn", "quiet", "introvert", "competitive", "charming"]
  physicalAttributes: ["brown hair", "tan", "tall", "blue eyes","chubby cheeks"]
}


var me = {
  physicalAttributes: mom.physicalAttributes.slice(0, 3)
}
me.physicalAttributes.push(dad.physicalAttributes.slice(3, 5))

var me = {
  personalityAtributes: mom.personality.slice(0, 2)
}


console.log(me.physicalAttributes);

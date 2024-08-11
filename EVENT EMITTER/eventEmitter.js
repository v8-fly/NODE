const EventEmitter = require("events")

class Emitter extends EventEmitter {}

const myE = new Emitter()

myE.on("chikaboom", () => {
  console.log("chikaboom Triggered - START 🤩")
})

myE.on("chikaboom", () => {
  console.log("chikaboom Triggered -- 2")
})

myE.on("chikaboom", () => {
  console.log("chikaboom Triggered -- 3")
})

myE.emit("chikaboom")
myE.emit("chikaboom")
myE.emit("chikaboom")

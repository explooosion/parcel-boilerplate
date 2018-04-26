class Greet {
  constructor(message) {
    this.message = message
  }
  say() {
    return `Hi! ${this.message}.`
  }
}

export default Greet

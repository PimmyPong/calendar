import validator from 'is-my-date-valid'
const validate = validator({ format: 'YYYY-MM-DD' })

validate('1992-12-02') // true

validate('1992/12/02') // false
validate('1992-18-02') // false

validate(['hello', 'world']) // TypeError: expected string

//....not sure if this is right?
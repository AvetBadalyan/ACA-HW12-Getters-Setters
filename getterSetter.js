/* Write an object with field name.
  const obj = {
    name: [], // ['name', length][]
    set name,
    get name,
  }
  console.log(obj.name)
  obj.name = 'Hovhannes, Sona';
  console.log(obj.name) // [['Hovhannes', 9], ['Sona', 4]]
  */

const obj = {
  _name: [], // ['name', length][]

  get name() {
    return obj.name;
  },
  set name(value) {
    value = value.split(", ");
    for (i = 0; i < value.length; i++) {
      obj._name.push([value[i], value[i].length]);
    }
  },
};

obj.name = "Hovhannes, Sona, Rafo";
console.log(obj._name);

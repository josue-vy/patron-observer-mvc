class UserModel {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.observers = []; // Lista de observadores
  }

  // Métodos para la manipulación de usuarios (guardar, actualizar, eliminar, consultar, etc.)
  // ...

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.update(this));
  }
}

module.exports = UserModel;
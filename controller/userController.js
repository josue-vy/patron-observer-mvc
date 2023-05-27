const UserModel = require('../model/userModel');
const UserView = require('../View/userView');

class UserController {
  createUser(name, email) {
    // Lógica de negocio para crear un nuevo usuario
    const newUser = new UserModel(1, name, email);

    // Renderizar la vista con los datos del usuario
    const userView = new UserView();
    userView.update(newUser);
  }

  // Otros métodos de controlador relacionados con usuarios
  // ...
}

module.exports = UserController;
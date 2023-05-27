const UserController = require('./controller/userController.js');
const UserModel = require('./model/userModel.js');
const UserView = require('./View/userView.js');

// Crear una instancia del controlador
const userController = new UserController();

// Crear un nuevo usuario
userController.createUser('Josue', 'josue@gmail.com');

// Crear un segundo observador de usuario
const userView2 = new UserView();

// Agregar el segundo observador al modelo de usuario
const userModel = new UserModel(2);
userModel.addObserver(userView2);

// Actualizar el usuario
userModel.name = 'Jonathan';
userModel.email = 'lit.jonathan@gmail.com';
userModel.notifyObservers();
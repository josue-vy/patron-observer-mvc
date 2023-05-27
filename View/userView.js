class UserView {
  update(user) {
    console.log(`ID: ${user.id}`);
    console.log(`Nombre: ${user.name}`);
    console.log(`Email: ${user.email}`);
  }
}

module.exports = UserView;
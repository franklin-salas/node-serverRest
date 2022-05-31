const Role = require("../models/role");
const Usuario = require("../models/usuario");

const isRoleValido = async (rol = "") => {
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no esta registrado en la DB`);
  }
};
const existEmail = async (correo = "") => {
  const existEmail = await Usuario.findOne({ correo });
  if (existEmail) {
    throw new Error(`El correo ${correo} esta registrado en la DB`);
  }
};
const existUsuarioID = async (id = "" ) => {
  const exist = await Usuario.findById(id)
  if (!exist) {
    throw new Error(`El id ${id} no esta registrado en la DB`);
  }
};

module.exports = {
  isRoleValido,
  existEmail,
  existUsuarioID
};

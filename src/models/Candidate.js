const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
  
  nomeCompleto: { type: String, unique: false, required: true },
  cargoPretendido: { type: String, unique: false, required: false },
  nascimento: { type: String, unique: false, required: true },
  estadoCivil: { type: String, unique: false, required: false },
  sexo: { type: String, unique: false, required: false },
  profissao: { type: String, unique: false, required: true },
  cep: { type: String, unique: false, required: true },
  endereco: { type: String, unique: false, required: true },
  bairro: { type: String, unique: false, required: true },
  cidade: { type: String, unique: false, required: true },
  estado: { type: String, unique: false, required: true },
  tel: { type: Number, unique: false, required: false },
  celular: { type: Number, unique: false, required: true },
  email: { type: String, unique: false, required: true },
  identidade: { type: Number, unique: false, required: false },
  cpf_digitado: { type: Number, unique: true, required: true },
  possuiVeiculo: { type: String, unique: false, required: false },
  habilitacao: { type: String, unique: false, required: false },

}, {
timestamps: true

});

module.exports = mongoose.model('Candidate', CandidateSchema);
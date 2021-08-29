const Candidate = require('../models/Candidate');

module.exports = {
    async register(req, res) {

        const { nomeCompleto, cargoPretendido, nascimento, estadoCivil, sexo, profissao, cep, 
            endereco, bairro, cidade, estado, tel, celular, email, identidade, cpf_digitado, 
            possuiVeiculo, habilitacao } = req.body;

        const newCandidate = new Candidate();

          newCandidate.nomeCompleto = nomeCompleto;
          newCandidate.cargoPretendido = cargoPretendido;
          newCandidate.nascimento = nascimento;
          newCandidate.estadoCivil = estadoCivil;
          newCandidate.sexo = sexo;
          newCandidate.profissao = profissao;
          newCandidate.cep = cep;
          newCandidate.endereco = endereco;
          newCandidate.bairro = bairro;
          newCandidate.cidade = cidade;
          newCandidate.estado = estado;
          newCandidate.tel = tel;
          newCandidate.celular = celular;
          newCandidate.email = email;
          newCandidate.identidade = identidade;
          newCandidate.cpf_digitado = cpf_digitado;
          newCandidate.possuiVeiculo = possuiVeiculo;
          newCandidate.habilitacao = habilitacao;

          newCandidate.save((err,savedCandidate) => {
              if (err) {
                  console.log(err);
                  return res.alert(500).send("Favor verificar dados inseridos");
              } else {

              return res.status(200).send(savedCandidate);
              }

            });
        
    },

};

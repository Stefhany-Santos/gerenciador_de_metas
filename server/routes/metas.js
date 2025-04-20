const express = require("express");
const router = express.Router();
const Meta = require("../models/Meta");

// [GET] Todas as metas
router.get("/", async (req, res) => {
  try {
    const metas = await Meta.find();
    res.json(metas);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao buscar metas" });
  }
});

// [POST] Criar nova meta
router.post("/", async (req, res) => {
  const { titulo, descricao } = req.body;

  const novaMeta = new Meta({ titulo, descricao });

  try {
    const metaSalva = await novaMeta.save();
    res.status(201).json(metaSalva);
  } catch (error) {
    res.status(400).json({ mensagem: "Erro ao salvar meta" });
  }
});

// [PUT] Atualizar meta por ID
router.put("/:id", async (req, res) => {
  try {
    const metaAtualizada = await Meta.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // retorna a meta já atualizada
    );
    res.json(metaAtualizada);
  } catch (error) {
    res.status(400).json({ mensagem: "Erro ao atualizar meta" });
  }
});

// [DELETE] Deletar meta por ID
router.delete("/:id", async (req, res) => {
  try {
    await Meta.findByIdAndDelete(req.params.id);
    res.json({ mensagem: "Meta deletada com sucesso" });
  } catch (error) {
    res.status(400).json({ mensagem: "Erro ao deletar meta" });
  }
});

module.exports = router;

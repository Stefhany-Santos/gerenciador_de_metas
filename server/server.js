require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const metasRoutes = require("./routes/metas");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Conectar ao MongoDB
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("✅ Conectado ao MongoDB Atlas"))
  .catch((err) => console.error("❌ Erro ao conectar ao MongoDB:", err));

// Rota de teste
app.get("/", (req, res) => {
  res.send("API está funcionando!");
});

// Usar as rotas de metas
app.use("/metas", metasRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

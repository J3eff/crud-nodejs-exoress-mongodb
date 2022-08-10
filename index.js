//config inicial
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// forma de ler JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// rota inicial / endpoint
app.get("/", (req, res) => {
  res.json({ message: "Oi Express!" });
});

//entregar uma porta
mongoose
  .connect(
    "mongodb+srv://xTapee:Nhd8hinyeW3m0WGY@apicluster.qhlqu.mongodb.net/bancodaapi?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connectamos ao MongoDB");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

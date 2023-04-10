app.post(urlPath, (req, res, next) => {
    try {
      const {id, name, description, price, available_units, category} = req.body;
      const product = {id, name, description, price, available_units, category};
      products.push(product);
      res.json(products);
      crearTxt(products);
    } catch (err) {
      next(err);
    }
  });
  
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({message: 'Hubo un error en el servidor'});
  });
  
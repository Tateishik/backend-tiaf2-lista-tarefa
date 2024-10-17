const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'Nenhum token fornecido!' });
  }

  // Separar 'Bearer' do token
  const bearerToken = token.split(' ')[1];

  jwt.verify(bearerToken, 'secreta-chave', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido!' });
    }

    req.user = decoded;
    next();
  });
};

module.exports = authMiddleware;
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const salt = bcrypt.genSaltSync(10);
const secretKey = process.env.JWT_SECRET_KEY || 'asfsgrwgsfd';

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(
  'mongodb+srv://aryamansingh214:test@cluster0.yf6qrdh.mongodb.net/?retryWrites=true&w=majority'
);

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.error(e);
    res.status(400).json(e);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });

  if (userDoc && bcrypt.compareSync(password, userDoc.password)) {
    jwt.sign(
      { username, id: userDoc._id },
      secretKey,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res
          .cookie('token', token, { httpOnly: true, sameSite: 'strict' })
          .json({
            id: userDoc._id,
            username,
          });
      }
    );
  } else {
    res.status(400).json('Wrong credentials');
  }
});

app.get('/profile', (req, res) => {
  const { token } = req.cookies;

  jwt.verify(token, secretKey, {}, (err, info) => {
    if (err) {
      res.status(401).json('Unauthorized');
    } else {
      res.json(info);
    }
  });
});
app.post('/logout', (req, res) => {
  res.cookie('token', '').json('ok');
});
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

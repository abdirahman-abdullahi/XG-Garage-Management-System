const pool = require("../config/db");
const bcrypt = require("bcrypt");


// LOGIN USER
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const userResult = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (userResult.rows.length === 0) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const user = userResult.rows[0];

    const validPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!validPassword) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        user_id: user.user_id,
        full_name: user.full_name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });

  } catch (error) {
    console.error("Login error:", error.message);

    res.status(500).json({
      message: "Server error during login",
    });
  }
};


// REGISTER USER
const registerUser = async (req, res) => {
  try {
    const {
      full_name,
      email,
      phone,
      password,
      role,
    } = req.body;

    if (
      !full_name ||
      !email ||
      !phone ||
      !password ||
      !role
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // CHECK IF USER EXISTS
    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // INSERT USER
    await pool.query(
      `INSERT INTO users
      (full_name, email, phone, password, role)
      VALUES ($1, $2, $3, $4, $5)`,
      [
        full_name,
        email,
        phone,
        hashedPassword,
        role,
      ]
    );

    res.status(201).json({
      message: "User registered successfully",
    });

  } catch (error) {
    console.error("Register error:", error.message);

    res.status(500).json({
      message: "Server error during registration",
    });
  }
};


module.exports = {
  loginUser,
  registerUser,
};
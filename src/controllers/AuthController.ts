import { Request, Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
import { getAuth } from "firebase-admin";

// Make sure you initialize firebase-admin in your backend (see below)

export const googleLogin = async (req: Request, res: Response) => {
  try {
    const { idToken } = req.body;
    const decodedToken = await getAuth().verifyIdToken(idToken);
    const { email, name, uid } = decodedToken;

    // Find or create user
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        name: name || "Google User",
        email,
        phone: "",
        password: uid, // Not used, just placeholder
        role: "renter"
      });
      await user.save();
    }

    // Create JWT for your app
    const appToken = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || "your_jwt_secret", { expiresIn: "1d" });

    res.json({ token: appToken, user: { id: user._id, name: user.name, role: user.role } });
  } catch (error) {
    res.status(401).json({ error: "Google authentication failed" });
  }
};
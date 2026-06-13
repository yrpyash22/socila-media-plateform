const User = require("../../Schema/User"); 

const findPeople = async (req, res) => {
  try {
    // 1. Un logon ko dhoondna jinhe current user ne follow nahi kiya hai aur jo khud current user nahi hai
    let users = await User.find({ _id: { $nin: [...req.profile.following, req.profile._id] } })
                          .select('name email image about pic'); // FIX: 'image' aur 'pic' dono variables ko database se nikaala taaki photo miss na ho!

    res.json(users);
  } catch (err) {
    return res.status(400).json({ 
      error: "Suggestions fetch karne mein galti hui: " + err.message 
    });
  }
};

module.exports = findPeople;
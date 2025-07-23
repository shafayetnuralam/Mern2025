// Home Page

const home = async (req, res) => {
    try{
          res.status(200).send("Welcome MERN Series");
    }catch(error){
        console.error("Error in home controller:", error);
        res.status(500).send("Internal Server Error");
    }

    }
const register = async (req, res) => {
    try{
          res.status(200).json({ msg: "Registration successful from router" });
    }catch(error){
        console.error("Error in register controller:", error);
        res.status(500).send("Internal Server Error");
    }

    }
    module.exports = {
        home, 
        register
    };
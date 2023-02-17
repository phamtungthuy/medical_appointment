import db from '../models'
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log(data);
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch(e) {
        console.log(e);
    }


};

let getAboutPage = (req, res) => {
    return res.render('./test/about.ejs');
}

let getCRUD = (req, res) => {
    res.render('./crud.ejs');  
}

module.exports = {
    getHomePage,
    getAboutPage,
    getCRUD
};
const renders = {};

renders.gallery = (req, res) => {
    res.render('image')
}

renders.formimagen = (req, res) => {
    res.render('form_image')
}

module.exports = renders;
class RecipeController {
    static async Home(req, res) {
        res.status(200).render('index', { title: 'Homepage for recipe app' })
    }
}

module.exports = RecipeController;
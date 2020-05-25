const User = require('../models/user');

module.exports = {
    async showAll(req, res){
        const user = await User.findAll()
        return res.json(user);
    },

    async create(req, res){
        const user = await User.create(req.body);

        return res.json(user);
    },

    async delete(req, res){
        await User.destroy({where: {id: req.params.id}});

        return res.send();
    },

    async update(req, res){
        await User.update(req.body, {where: {id: req.params.id}});

        return res.send();
    }
}
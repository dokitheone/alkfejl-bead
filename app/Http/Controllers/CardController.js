'use strict'

const Database = use('Database')
const Category = use('App/Model/Category')
const Card = use('App/Model/Card')
const User = use('App/Model/User')
const Validator = use('Validator')

class CardController {
    * index(request, response) {
        const categories = yield Category.all()

        for (let category of categories) {
            const cards = yield category.cards()/*.limit(3)*/.fetch();
            category.topCards = cards.toJSON();
        }

        yield response.sendView('main', {
            name: 'Viktor',
            categories: categories.toJSON()
        })
    }

    * create(request, response) {
        const categories = yield Category.all()
        yield response.sendView('cardCreate', {
            categories: categories.toJSON()
        });
    }

    * doCreate(request, response) {
        const cardData = request.except('_csrf');

        const rules = {
            name: 'required',
            cell: 'required',
            email: 'required',
            category_id: 'required'
        };

        const validation = yield Validator.validateAll(cardData, rules)

        if (validation.fails()) {
            yield request
                .withAll()
                .andWith({ errors: validation.messages() })
                .flash()
            response.redirect('back')
            return
        }

        cardData.user_id = request.currentUser.id
        const card = yield Card.create(cardData)
        response.redirect('/cards')
    }

    * show(request, response) {
        const id = request.param('id');
        const card = yield Card.find(id);
        yield card.related('category').load();

        yield response.sendView('cardShow', {
            card: card.toJSON()
        })
    }

    * edit(request, response) {
        const categories = yield Category.all()
        const id = request.param('id');
        const card = yield Card.find(id);

        if (request.currentUser.id !== card.user_id) {
            response.unauthorized('Engedély megtagadva.')
            return
        }

        yield response.sendView('cardEdit', {
            categories: categories.toJSON(),
            card: card.toJSON()
        });
    }

    * doEdit(request, response) {
        const cardData = request.except('_csrf');

        const rules = {
            name: 'required',
            cell: 'required',
            email: 'required',
            category_id: 'required'
        };

        const validation = yield Validator.validateAll(cardData, rules)

        if (validation.fails()) {
            yield request
                .withAll()
                .andWith({ errors: validation.messages() })
                .flash()
            response.redirect('back')
            return
        }

        const id = request.param('id');
        const card = yield Card.find(id);

        card.name = cardData.name;
        card.cell = cardData.cell;
        card.email = cardData.email;
        card.category_id = cardData.category_id;

        yield card.save()

        response.redirect('/cards')
    }

    * doDelete(request, response) {
        const id = request.param('id');
        const card = yield Card.find(id);

        if (request.currentUser.id !== card.user_id) {
            response.unauthorized('Engedély megtagadva.')
            return
        }

        yield card.delete()
        response.redirect('/cards')
    }

    * search(request, response) {
        const page = Math.max(1, request.input('p'))
        const filters = {
            cardName: request.input('cardName') || '',
            category: request.input('category') || 0,
            createdBy: request.input('createdBy') || 0
        }

        const cards = yield Card.query()
            .where(function () {
                if (filters.category > 0) this.where('category_id', filters.category)
                if (filters.createdBy > 0) this.where('user_id', filters.createdBy)
                if (filters.cardName.length > 0) this.where('name', 'LIKE', `%${filters.cardName}%`)
            })
            .with('user')
            .paginate(page, 10)

        const categories = yield Category.all()
        const users = yield User.all()

        yield response.sendView('cardSearch', {
            cards: cards.toJSON(),
            categories: categories.toJSON(),
            users: users.toJSON(),
            filters
        })
    }

    * ajaxDelete(request, response) {
        const id = request.param('id');
        const card = yield Card.find(id);

        if (card) {
            if (request.currentUser.id !== card.user_id) {
                response.unauthorized('Access denied.')
                return
            }
            yield card.delete()
            response.ok({
                success: true
            })
            return
        } else {
            response.notFound('No card')
        }

        
    }
}

module.exports = CardController

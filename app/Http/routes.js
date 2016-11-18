'use strict'

const Route = use('Route')

// Route.get('/hello', function * (req, res) {
//     yield res.sendView('welcome');
// })
// Route.on('/').render('main')
//Route.get('/', 'RecipeController.index')

Route.get('/', 'CardController.index')
//Route.get('/main', 'CardController.main').middleware('auth')
Route.get('/cards/create', 'CardController.create').middleware('auth')
Route.post('/cards/create', 'CardController.doCreate').middleware('auth')
Route.get('/cards/:id/edit', 'CardController.edit').middleware('auth')
Route.post('/cards/:id/edit', 'CardController.doEdit').middleware('auth')
Route.get('/cards/:id/delete', 'CardController.doDelete').middleware('auth')
Route.get('/cards/:id', 'CardController.show')
Route.get('/cards', 'CardController.search')

Route.get('/register', 'UserController.register')
Route.get('/login', 'UserController.login')
Route.post('/register', 'UserController.doRegister')
Route.post('/login', 'UserController.doLogin')
Route.get('/logout', 'UserController.doLogout')
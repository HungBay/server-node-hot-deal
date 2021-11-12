const bookRouter = require('./book.router');
export function routerApp(app : any){
    app.use('/book', bookRouter)
}

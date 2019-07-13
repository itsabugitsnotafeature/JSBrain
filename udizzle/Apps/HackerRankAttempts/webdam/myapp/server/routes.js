import examplesRouter from './api/controllers/examples/router';

export default function routes(app) {
  app.use('/api/v1/examples', examplesRouter);

  app.get('/users', function(req, res) {
    console.log('Im here dude');

    
    res.send('WOOHOOOO');
  });
  

}

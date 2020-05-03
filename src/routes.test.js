import routes  from './routes';

describe('Routes' , () => {
    it('Has all the routes', async() =>{
       expect(routes.length).toBeGreaterThan(0);
    })
})
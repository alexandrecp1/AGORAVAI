const server = require('../src/routes');
const supertest = require('supertest');
const request = supertest(server);
let item;

beforeEach(() =>{
    item = [{
        item: "RTX 2060 SUPER",
        price: 4000
    },
    {
        item: "GT 550",
        price: 1600
    }];
})

test('See Items', async () => {
    await request
        .get('/iventory'); 
    expect(200)
});

test('Add Item', async () => {
    await request
        .post('/iventory')
        .send(item[0]);
    expect(200)
});

test('Cant Delet', async() => {
    await request
        .delete('/iventory/9')
    .expect(400);
})

test('Returns a Item', async() =>{
    await request
        .post('/iventory')
        .send({
            nome: "Alexandre Peres",
            idade: 18
        })
        expect(400)
})

test('You can Delet', async() => {
    await request
        .delete('/iventory/1')
    .expect(200);
})

test('You Cant Refresh An Item', async () => {
    await request
      .put('/iventory/9')
      .send({
        price: 1400
      })
      .expect(400);
});

test('You can Refresh an Item', async () => {
    await request
      .put('/iventory/2')
      .send({
          price: 1600
      })
      .expect(200);
});
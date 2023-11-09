const request = require('supertest')

// Get  Inventory
describe('Get request Example' , function(){
    it('Get Inventory', async() => {
        const respone = request('https://petstore.swagger.io/v2')
        .get('/store/inventory')

        console.log((await respone).status);
        console.log((await respone).body);    
    })
})  


describe('Get request Example' , function(){
    it('Get Order Id', async() => {
        const respone = request('https://petstore.swagger.io/v2')
        .get('/store/order')
        .send({
            "orderId": 9
        })
        

        console.log((await respone).status);
        console.log((await respone).body);    
    })
}) 
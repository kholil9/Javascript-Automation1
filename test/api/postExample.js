const request = require('supertest')

const baseUrl = require('../../env')

describe('Post Example', function(){
    it('Create User', async() => {
        const respone = request(baseUrl())
        .post('/user')
        .send(
            {
                "id": 0,
                "username": "zolo",
                "firstName": "zolon",
                "lastName": "nomi",
                "email": "zolonomi@gmail.com",
                "password": "zolonomi321",
                "phone": "0889732741",
                "userStatus": 0
              }
        )

        console.log((await respone).status);
        console.log((await respone).body);
    })
})
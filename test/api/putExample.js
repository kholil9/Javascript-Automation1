const request = require('supertest')

const baseUrl = require('../../env')

describe('Post Example', function(){
    it('Create User', async() => {
        const respone = request(baseUrl())
        .put('/user/{username}')
        .send(
            {
                "id": 0,
                "username": "nomoindo",
                "firstName": "nomo",
                "lastName": "indo",
                "email": "nomoindo@gmail.com",
                "password": "nomoindo3214",
                "phone": "21312312321",
                "userStatus": 0
              }
        )

        console.log((await respone).status);
        console.log((await respone).body);
    })
})
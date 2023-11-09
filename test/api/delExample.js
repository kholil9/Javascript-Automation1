const request = require('supertest')

const baseUrl = require('../../env')

describe('Post Example', function(){
    it('Create User', async() => {
        const respone = request(baseUrl())
        .del('/user/nomoindo')

        console.log((await respone).status);
        console.log((await respone).body);
    })
})
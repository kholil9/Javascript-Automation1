const {expect} = require('chai')
const request = require('supertest')
const DATA = require('../../data/userData')
const baseUrl = require('../../env')

describe('post request example', () =>{

    const respone = request(baseUrl())
        .post('/user')
        .send(DATA)

    it('Respone Status Equal to 200', async() =>{
        //check respone status must be equal to 200
        expect((await respone).status).to.equal(200)
    })

    it('Respone Body to haveOwnProperthy', async() => {
        // Expect in Respone Body must be include value "Message"
        expect((await respone).body).to.haveOwnProperty(`message`)
    })

    //reporting to mochawesome
})
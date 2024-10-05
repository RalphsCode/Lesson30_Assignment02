process.env.NODE_ENV = "test"; 		//  create node test environment
const request = require("supertest"); 		// require supertest
const app = require("./index"); 			// require app	
let items = require("./fakeDb"); 		// fake db

let kitkat = { name: "kitkat", price: 1.99 };

beforeEach(function() { items.push(kitkat); 
}); 

afterEach(function() { items.length = 0;})
	
/** Test GET /items - returns `{items: [item, ...]}` */
describe("GET / items", function() { 
    
    test("Gets a list of items", async function() { 
        const resp = await request(app).get(`/items`); 	// request is supertest, required above, app is also requested above.
        expect(resp.statusCode).toBe(200); 
        // Check if the response includes a string containing "kitkat"
        expect(resp.text).toEqual(expect.stringContaining('kitkat'));
        });  // END test

    test("Insert an item", async function() { 
        const resp = await request(app) .post(`/items`) .send({ name: "snickers", price: 1.75});
        expect(resp.statusCode).toBe(201); 
          // Check if the response includes a string containing "snickers"
        expect(resp.text).toEqual(expect.stringContaining('snickers'));
        });  // END test

    test("Responds with 404 if id invalid - patch", async function() { 
        const resp = await request(app).patch(`/items/fluffy`); 
        expect(resp.statusCode).toBe(404); });
            
    test("Responds with 404 if id invalid - delete", async function() { 
        const resp = await request(app).delete("/items/fluffy"); 
        expect(resp.statusCode).toBe(404); });

    test("Deletes a single item", async function() { 
        const resp = await request(app).delete("/items/kitkat"); 
        expect(resp.statusCode).toBe(200); 
        expect(resp.body).toEqual(expect.objectContaining({"deleted": "kitkat"}));
         }); 
    

});  // END describe


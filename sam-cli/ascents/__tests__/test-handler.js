"use strict";

const app = require("../app.js");

describe("Tests index", function() {
  it("verifies successful response", async () => {
    const event = {
      queryStringParameters: {
        userId: 10,
        type: "routes"
      }
    };

    const result = await app.lambdaHandler(event, {});

    expect(typeof result).toBe("object");
    expect(result.statusCode).toEqual(200);
    expect(typeof result.body).toBe("string");

    let response = JSON.parse(result.body);
    expect(typeof response).toBe("object");
    expect(typeof response.ascents).toBe("object");
    expect(typeof response.ascents[30]).toBe("object");
  });
});

// const request = require("supertest");
import mongoose from "mongoose";
import request from "supertest";

import dotenv from "dotenv";
import app from "../server";

dotenv.config();

beforeEach(async () => {
  await mongoose.connect(process.env.DB_URL || "");
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

// for the get api data test
describe("GET /api/getUser/:id", () => {
  it("should return data", async () => {
    const res = await request(app).get("/api/getUser/66f67cac1f89bfc34fb3d0ad");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0); // Validate user object exists
  });
});


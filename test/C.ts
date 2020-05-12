import { contract, artifacts, web3 } from "@nomiclabs/buidler";

const C = artifacts.require("C");

contract("C", (acconts) => {
  it("should deploy", async () => {
    const c = await C.new();
    console.log("Web3 version", web3.version);
    console.log("Deploy worked. Addres:", c.address);
  });
});

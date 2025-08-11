import { expect } from "@wdio/globals";

describe("Request Mocks and Spies Demo", () => {
  beforeEach(async () => {
    await browser.mockRestoreAll();
  });

  it("should mock https://the-internet.herokuapp.com with a custom response", async () => {
    const pageMock = await browser.mock("https://the-internet.herokuapp.com/");

    await pageMock.respond(
      "<html><head><title>Wow</title><body><h1>Mocked Response</h1></body></html>"
    );

    await browser.url("https://the-internet.herokuapp.com/");

    await expect(browser).toHaveTitle("Wow");
    await expect(pageMock.calls).toHaveLength(1);
  });

  it("should confirm the CSS file is requested", async () => {
    const cssSpy = await browser.mock(
      "https://the-internet.herokuapp.com/css/app.css"
    );

    await browser.url("https://the-internet.herokuapp.com/");

    await expect(browser).toHaveTitle("The Internet");
    await expect(cssSpy.calls).toHaveLength(1);
  });
});

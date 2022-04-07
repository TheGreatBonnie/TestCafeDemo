fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t => {
    await t 
        .typeText("#developer-name", "Bonnie")
        .click("#linux")
        .click("#background-parallel-testing")
        .click("#submit-button");
});
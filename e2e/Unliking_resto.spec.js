const assert = require("assert");

Feature("Unliking resto");

Before(({ I }) => {
    I.amOnPage("/");
})
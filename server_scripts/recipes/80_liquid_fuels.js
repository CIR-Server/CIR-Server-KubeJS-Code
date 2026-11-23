// priority: 0

// Create Addition liquid fuels.
// Sections are sorted by recipe type. Ingredients, outputs and settings are preserved.
ServerEvents.recipes(event => {

  // ============================================================
  // createaddition:liquid_burning
  // ============================================================

  // Source: RIKJS-neoforge-CreateRecipes.js
  event.custom({
    type: 'createaddition:liquid_burning',
    burn_time: 36000,
    ingredients: [
      {
        type: 'fluid_stack',
        fluid: 'kubejs:mysterious_liquid',
        amount: 1000
      }
    ],
    results: [],
    superheated: true
  });

  event.custom({
    type: "createaddition:liquid_burning",
    "neoforge:conditions": [
      {
        type: "createaddition:has_fluid_tag",
        fluidTag: "c:diesel"
      }
    ],
    burn_time: 12000,
    ingredients: [
      {
        type: "fluid_tag",
        amount: 1000,
        fluid_tag: "c:diesel"
      }
    ],
    results: [],
    superheated: true
  }).id("kubejs:createaddition/liquid_burning/diesel");

  event.custom({
    type: "createaddition:liquid_burning",
    "neoforge:conditions": [
      {
        type: "createaddition:has_fluid_tag",
        fluidTag: "c:gasoline"
      }
    ],
    burn_time: 12000,
    ingredients: [
      {
        type: "fluid_tag",
        amount: 1000,
        fluid_tag: "c:gasoline"
      }
    ],
    results: [],
    superheated: true
  }).id("kubejs:createaddition/liquid_burning/gasoline");

  event.custom({
    type: "createaddition:liquid_burning",
    "neoforge:conditions": [
      {
        type: "createaddition:has_fluid_tag",
        fluidTag: "c:biodiesel"
      }
    ],
    burn_time: 6000,
    ingredients: [
      {
        type: "fluid_tag",
        amount: 1000,
        fluid_tag: "c:biodiesel"
      }
    ],
    results: [],
    superheated: true
  }).id("kubejs:createaddition/liquid_burning/biodiesel");

});

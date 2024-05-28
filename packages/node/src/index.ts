import express from "express";
import NodeCache from "node-cache";
import bodyParser from "body-parser";
import cors from "cors";

// Define types
type Plant = {
  name: string;
  type: "grass" | "tree" | "flower";
  size: number;
};

// Create express app
const app = express();

// Set CORS policy
app.use(cors());

// Express app to support JSON-encoded bodies
app.use(bodyParser.json());

// Create node cache
const cache = new NodeCache();

// Define cache indexes
const plantsCacheId = "plants";

// Get all plants
app.get("/plants", (req, res) => {
  try {
    // get and return plants from cache
    const plants = cache.get(plantsCacheId);

    // check if plants array exists
    if (plants) {
      return res.status(200).json({
        plants,
      });
    } else {
      // plants cache not found
      return res.status(404).send("Plants not found");
    }
  } catch (err) {
    console.error(err);
    process.exit();
  }
});

// Add plant
app.post("/plants", (req, res) => {
  try {
    const plant: Plant = req.body.plant;
    const plants: Plant[] | undefined = cache.get(plantsCacheId);

    // Check if plants array exists
    if (plants) {
      // Add new plant to array
      plants.push(plant);

      // Save new plants to cache
      cache.set(plantsCacheId, plants);

      // Return new plants
      return res.status(200).json({
        plants,
      });
    } else {
      // Plants cache not found
      return res.status(404).send("Plants not found");
    }
  } catch (err) {
    console.error(err);
    process.exit();
  }
});

// Water plant by id
app.put("/plants/:id/water", (req, res) => {
  try {
    const plantId = parseInt(req.params.id);
    const plants: Plant[] | undefined = cache.get(plantsCacheId);

    // Check if plants array exists
    if (plants) {
      // Find plant by index
      const plant = plants[plantId];

      // Check if plant exists
      if (plant) {
        // Increase plant size
        const newPlant = {
          ...plant,
          size: plant.size + 1,
        };

        // Replace old plant
        plants[plantId] = newPlant;

        // Save new plants to cache
        cache.set(plantsCacheId, plants);

        // Return new plants
        return res.status(200).json({
          plants,
        });
      } else {
        // Plant not found
        return res.status(404).send("Plant not found");
      }
    } else {
      // Plants cache not found
      return res.status(404).send("Plants not found");
    }
  } catch (err) {
    console.error(err);
    process.exit();
  }
});

// Start express app
const start = (port: number) => {
  try {
    app.listen(port);
    // Create plants cache
    cache.set(plantsCacheId, []);
  } catch (err) {
    console.error(err);
    process.exit();
  }
};
start(3333);

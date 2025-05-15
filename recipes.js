/*https://chatgpt.com/share/68264832-ae2c-8002-b58c-2155b71af9a4*/
const recipes = [
  {
    id: "recipe1",
    title: ["Chilli", "Bowl"],
    image: "image/lunchpic1.png",
    ingredients: [
      { name: "Ground beef", quantity: 150, unit: "g" },
      { name: "Crushed tomatoes", quantity: 1 / 2, unit: "cup" },
      { name: " Kidney beans", quantity: 1 / 2, unit: "cup" },
      { name: "Onion", quantity: 1 / 4, unit: "diced" },
      { name: "Garlic", quantity: 1, unit: "clove" },
      { name: "Chilli Powder", quantity: 1, unit: "tsp" },
    ],
    descriptiontitle: ["Chili bowls are bold, cozy, and always hit the spot"],
    description: [
      "They’re packed with protein, omega-3s (hello, brain boost), and all the good fats that keep your skin glowing. Plus, they’re usually loaded with veggies and rice or quinoa, so it’s like a full-on balanced meal that actually slaps. Tasty and good for you? Big win.",
    ],
    steps1: [
      "1. Sauté the base: Heat oil in a pan. Sauté onion and garlic until soft.",
      "2. Cook the meat: Add ground beef (or plant-based meat) and brown it. Break it up with a spoon until fully cooked.",
      "3. Add the flavor: Stir in chili powder, cumin, salt, and pepper (to taste). Let it bloom for a minute.",
    ],
    steps2: [
      "5. Add tomatoes & beans: Pour in crushed tomatoes, beans, and corn (optional, if using). Simmer for 10–15 minutes. Add water/broth if it gets too thick.",
      "6. Taste & top: Adjust seasoning. Serve in a bowl with your favorite toppings. (Optional toppings – sour cream, cheese, avocado, green onion, tortilla chips)",
    ],
  },
  {
    id: "recipe2",
    title: ["Brocolli Fried", "Rice"],
    image: "image/lunchpic13.png",
    ingredients: [
      { name: "Cooked rice", quantity: 1, unit: "cups" },
      { name: "Broccoli", quantity: 1, unit: "cups" },
      { name: "Garlic", quantity: 1, unit: "cloves" },
      { name: "Green onion", quantity: 1, unit: "" },
      { name: "Soy sauce", quantity: 1, unit: "tbsp" },
      { name: "Sesame oil", quantity: 1, unit: "tbsp" },
    ],
    descriptiontitle: [
      "Broccoli Fried Rice is the low-effort, high-reward hero",
    ],
    description: [
      "They’re packed with protein, fiber, and flavor—and they’re endlessly customizable. Whether you like it mild or fiery, meaty or veggie, chili is that one-pot wonder you’ll want on repeat. Bonus: leftovers taste even better.",
    ],
    steps1: [
      "1. Prep your broccoli: If using fresh broccoli (fresh or frozen), steam or microwave it for 1–2 minutes until just tender. If frozen, thaw it first.",
      "2.Scramble the egg (if using): Heat a bit of oil in a pan or wok. Crack in the egg, scramble it quickly, and set aside.",
      "3. Stir-fry the veggies: Add more oil, then sauté garlic and green onion (or use regular onion) for about 30 seconds. Add broccoli and stir-fry for 2–3 minutes.",
    ],
    steps2: [
      "5.Add the rice (cold, day-old rice works best): Toss in your cold rice. Use a spatula to break up any clumps and stir-fry everything together until hot.",
      "6. Season & finish: Add soy sauce, salt, pepper, and scrambled egg back in. Stir well. Drizzle with a little sesame oil at the end for that classic fried rice finish. (Optional add-ins: chili flakes, ginger, sesame seeds, tofu, chicken, etc.)",
    ],
  },
  {
    id: "recipe3",
    title: ["Beef", "Stew"],
    image: "image/lunchpic14.png",
    ingredients: [
      { name: "Beef stew meat", quantity: 200, unit: "g" },
      { name: "Shallot", quantity: 1, unit: "" },
      { name: "Garlic", quantity: 1, unit: "clove" },
      { name: "Baby potatoes", quantity: 7, unit: "halved" },
      { name: "Beef broth", quantity: 1, unit: "cup" },
      { name: "Tomato paste", quantity: 1, unit: "tbsp" },
    ],
    descriptiontitle: ["Beef Stew is the ultimate one-pot comfort fix"],
    description: [
      "It’s warm, filling, and packed with tender beef, soft veggies, and a rich, savory broth. Total hug-in-a-bowl energy. Plus, you can speed it up with smaller beef cuts or pressure cooker magic—and still get that slow-cooked flavor.",
    ],
    steps1: [
      "1. Sear the beef: In a pot, melt butter over medium-high heat. Add beef cubes and brown them on all sides. Remove and set aside.",
      "2. Sauté the aromatics: In the same pot, lower heat and sauté shallots and garlic until fragrant and soft.",
      "3. Simmer: Add tomato paste and stir it in. Return beef to the pot, add potatoes, herbs, and broth. Bring to a boil, then reduce to a gentle simmer.",
    ],
    steps2: [
      "4. Cook until tender: Cover and let it simmer for 40–50 minutes, or until the beef is tender and potatoes are cooked through.",
      "5. Final touch: Season with salt and pepper to taste. Discard bay leaf and herb stems. Garnish generously with fresh parsley.",
    ],
  },
  {
    id: "recipe4",
    title: ["Lentil", "Stew"],
    image: "image/lunchpic3.png",
    ingredients: [
      { name: "Cooked lentils", quantity: 3 / 4, unit: "cups" },
      { name: "medium Potato", quantity: 1 / 2, unit: "" },
      { name: "small Carrot", quantity: 1, unit: "" },
      { name: "medium Onion", quantity: 1 / 4, unit: "" },
      { name: "Crushed tomatoes", quantity: 1 / 2, unit: "cup" },
      { name: "Garlic", quantity: 1, unit: "clove" },
    ],
    descriptiontitle: ["Lentil Stew is comfort in a bowl"],
    description: [
      "It’s warm, filling, and packed with plant-based goodness. With earthy lentils, chunky veggies, and a rich tomato-spiced broth, this stew is your go-to for cozy days, meal prep wins, or when you just want something that hits like a hug.",
    ],
    steps1: [
      "1. Sauté the aromatics: Heat olive oil in a pot over medium heat. Add finely chopped onion and minced garlic, sauté until soft and fragrant (about 2–3 minutes).",
      "2. Add veggies & spices: Toss in the diced carrot and potato. Sprinkle in paprika, cumin, salt, and pepper (to taste). Stir and let cook for a few minutes.",
      "3. Add liquids & lentils: Pour in the crushed tomatoes and veggie broth (adjust as needed). Stir in the lentils (brown or green work great). Bring to a boil, then lower to a simmer.",
    ],
    steps2: [
      "5. Simmer until tender: Let it cook for 15–20 minutes, or until potatoes and carrots are fork-tender. Add more broth if it gets too thick.",
      "6. Stir in greens (optional): Toss in a handful of spinach or kale at the end and let it wilt.",
      "7. Serve it up: Pour into a bowl, top with parsley (optional), and add a scoop of barley or rice if you’re feeling it",
    ],
  },
  {
    id: "recipe5",
    title: ["Carbonara"],
    image: "image/lunchpic4.png",
    ingredients: [
      { name: "Spaghetti", quantity: 75, unit: "g" },
      { name: "Pancetta or bacon", quantity: 50, unit: "g" },
      { name: "large Egg", quantity: 1, unit: "" },
      { name: "Heavy Cream", quantity: 1 / 2, unit: "cup" },
      { name: "Parmesan", quantity: 1 / 4, unit: "cup" },
      { name: "Garlic", quantity: 1, unit: "clove" },
    ],
    descriptiontitle: ["Carbonara is the cheat code to comfort"],
    description: [
      "It’s creamy (without cream), smoky, salty, and ridiculously satisfying—all made in one pan, in under 20 minutes. With just a few pantry staples and zero fluff, carbonara proves that simple really can be spectacular. Fork-twirling bliss? Confirmed.",
    ],
    steps1: [
      "1. Cook the pasta: Boil spaghetti in salted water until al dente. Reserve a bit of pasta water before draining. (About 2–3)",
      "2. Crisp the bacon: While pasta cooks, fry the diced pancetta or bacon in a skillet over medium heat until crispy. Add the smashed garlic (optional) for a quick sizzle if using, then remove it.",
      "3. Make the sauce base: In a bowl, whisk together the egg, grated cheese, and lots of black pepper.",
    ],
    steps2: [
      "4. Combine off heat: Once the pasta is cooked and drained, immediately toss it into the pan with the bacon (off the heat). Quickly stir in the egg-cheese mix, adding a splash of hot pasta water to create a silky sauce.",
      "5. Stir until creamy: Keep tossing until everything is glossy and coated. The heat from the pasta cooks the egg gently, turning it into a dreamy sauce.",
      "6. Serve hot: Top with extra cheese and black pepper. Eat immediately and smile.",
    ],
  },
  {
    id: "recipe6",
    title: ["Tomato", "Pasta"],
    image: "image/lunchpic12.png",
    ingredients: [
      { name: "Pasta", quantity: 75, unit: "g" },
      { name: "Garlic", quantity: 1, unit: "clove" },
      {
        name: "Crushed Tomatoes",
        quantity: 1 / 2,
        unit: "cup",
      },
      { name: "Olive oil", quantity: 1, unit: "tsp" },
      { name: "Italian Seasoning", quantity: 1, unit: "tsp" },
    ],
    descriptiontitle: ["Tomato Pasta is the OG weeknight hero"],
    description: [
      "It’s simple, saucy, and totally unfussy—but still manages to taste like you put in way more effort than you did. With just a handful of ingredients and one pot, it brings that cozy, classic Italian comfort without the fuss. Fast, flavorful, and always reliable.",
    ],
    steps1: [
      "1. Cook the pasta (spaghetti, penne, fusilli—whatever you love): Boil in salted water until al dente. Reserve 2–3 tablespoons of the pasta water before draining.",
      "2. Make the sauce: While pasta cooks, heat olive oil in a pan over medium heat. Add minced garlic (and chili flakes if using), and sauté for about 30 seconds — don’t let it burn.",
      "3. Add the tomatoes: Pour in the crushed tomatoes or passata. Stir, season with salt and pepper, and let it simmer for 5–10 minutes to thicken slightly.",
    ],
    steps2: [
      "4. Combine & finish: Add the drained pasta to the sauce, along with a splash of pasta water. Toss everything together until the sauce coats the pasta beautifully.",
      "5. Serve & top it off: Plate it up, sprinkle with cheese and fresh herbs (Fresh basil or parsley) if you’ve got ‘em, and enjoy!",
    ],
  },
  {
    id: "recipe7",
    title: ["Tomato", "Soup"],
    image: "image/lunchpic6.png",
    ingredients: [
      { name: "Crushed Tomatoes", quantity: 1, unit: "cup" },
      { name: "Onion", quantity: 1 / 2, unit: "small" },
      { name: "Garlic", quantity: 1, unit: "clove" },
      { name: "Butter", quantity: 1, unit: "tbsp" },
      { name: "Vegetable broth or water", quantity: 1 / 2, unit: "cup" },
      { name: "½ tsp Sugar", quantity: 1 / 2, unit: "tsp" },
    ],
    descriptiontitle: ["Tomato Soup is a cozy hug in a mug"],
    description: [
      "It’s smooth, savory, and endlessly comforting. Whether you're under the weather, short on time, or just craving something warm and nostalgic—this quick tomato soup delivers. Minimal ingredients, maximum comfort.",
    ],
    steps1: [
      "1. Sauté aromatics: In a small saucepan, melt butter or heat olive oil over medium heat. Add finely chopped onion and minced garlic, and sauté until soft and fragrant—about 2–3 minutes.",
      "2. Add tomatoes & broth: Pour in the crushed tomatoes and broth(adjust for preferred thickness). Stir in salt, pepper, herbs, and a pinch of sugar (for balancing acidity)",
      "3. Simmer: Let the soup bubble gently for about 10–12 minutes, stirring occasionally, until flavors meld and it thickens a bit.",
    ],
    steps2: [
      "4. Blend (optional): For a smooth texture, blend with an immersion blender (or transfer carefully to a regular blender).",
      "5. Cream it (optional): Stir in a splash of cream or milk for extra richness.",
      "6. Serve hot: Top with a swirl of cream, fresh herbs, or a crack of black pepper. Bonus: dunk a grilled cheese or croutons in there.",
    ],
  },
  {
    id: "recipe8",
    title: ["Shakshuka"],
    image: "image/lunchpic7.png",
    ingredients: [
      { name: "Onion", quantity: 1 / 4, unit: "small" },
      { name: "Bell pepper", quantity: 1 / 2, unit: "" },
      { name: "Garlic", quantity: 1, unit: "clove" },
      {
        name: "Crushed Tomatoes",
        quantity: 1 / 2,
        unit: "cup",
      },
      { name: "Paprika, Cumin", quantity: 1 / 2, unit: "tsp" },
      { name: "Eggs", quantity: 1, unit: "" },
    ],
    descriptiontitle: ["Shakshuka is brunch's boldest move"],
    description: [
      "It’s saucy, spiced, and packed with flavor—eggs poached right in a rich tomato and pepper stew. All you need is one pan, a few pantry staples, and some crusty bread for dipping. Whether it’s breakfast, lunch, or dinner—shakshuka always shows up and shows off.",
    ],
    steps1: [
      "1. Sauté the base: Heat olive oil in a small pan over medium heat. Add diced onion and bell pepper, cook until soft (about 5 minutes).",
      "2. Add garlic & spices: Stir in garlic, paprika, cumin, salt, and pepper. Sauté for another 30 seconds until fragrant.",
      "3. Pour in tomatoes: Add the crushed tomatoes and stir. Simmer for 5–7 minutes until the sauce thickens slightly. Taste and adjust seasoning.",
    ],
    steps2: [
      "4. Crack in the eggs: Make little wells in the sauce and crack your egg(s) into them, depending on your hunger level. Cover the pan with a lid and cook until the whites are set but yolks are still a little runny—about 4–6 minutes.",
      "5. Finish & serve: Sprinkle with fresh herbs and serve straight from the pan with crusty bread to scoop up all the goodness.",
    ],
  },
  {
    id: "recipe9",
    title: ["Sweet", "Potato Salad"],
    image: "image/lunchpic8.png",
    ingredients: [
      { name: "Sweet potato", quantity: 1, unit: "small" },
      { name: "Olive oil", quantity: 1, unit: "tsp" },
      { name: "Mixed greens", quantity: 1, unit: "cup" },
      { name: "Red onion", quantity: 5, unit: "slices" },
      { name: "Cherry tomatoes (optional)", quantity: 5, unit: "" },
    ],
    descriptiontitle: ["Sweet Potato Salad is a glow-up in a bowl"],
    description: [
      "It’s hearty, wholesome, and hits that sweet-meets-savory spot like a pro. Roasted sweet potatoes bring the caramelized vibes, and when you throw in crunchy veggies, a zesty dressing, and maybe some cheese or chickpeas?",
    ],
    steps1: [
      "1. Roast the sweet potato: Preheat oven to 200°C (400°F). Toss diced sweet potato with olive oil, salt, and pepper. Roast for about 20 minutes or until tender and slightly crispy on the edges. (Or air fry for 12–15 mins!)",
      "2. Prep the base: While it’s roasting, throw your greens, onion, cherry tomatoes, and chickpeas (if using) into a bowl.",
      "3. Mix the dressing: Whisk together olive oil, lemon juice or vinegar, mustard, and sweetener. Season to taste.",
    ],
    steps2: [
      "4. Assemble the salad: Once the sweet potatoes are done, let them cool for a few minutes, then toss everything together with the dressing.",
      "5. Top it off: Crumble feta over the top and add more cracked pepper if you’re feeling fancy.",
    ],
  },
  {
    id: "recipe10",
    title: ["Chicken", "Wrap"],
    image: "image/lunchpic9.png",
    ingredients: [
      { name: "Tortilla or wrap", quantity: 1, unit: "large" },
      { name: "Cooked chicken", quantity: 3 / 4, unit: "cup" },
      { name: "Lettuce", quantity: 1 / 2, unit: "cup" },
      { name: "Cucumber", quantity: 5, unit: "slices" },
      { name: "Tomato", quantity: 1 / 2, unit: "small" },
      { name: "Cheese", quantity: 2, unit: "tbsp" },
    ],
    descriptiontitle: ["Chicken Wraps are the GOAT of grab-and-go"],
    description: [
      "They’re fresh, filling, and endlessly flexible—plus, they come together in minutes. Juicy chicken, crunchy veggies, creamy sauce, all tucked into a warm wrap. It’s like a handheld salad, but way more satisfying. Eat it cold, warm, meal-prepped, or right outta the pan. Wrap magic.",
    ],
    steps1: [
      "1. Warm your wrap (optional but recommended): Heat the tortilla in a dry pan or microwave for 15–20 seconds so it’s easier to fold.",
      "2. Layer it up: Spread your sauce on the wrap (yogurt-garlic, mayo, hummus, tzatziki, or ranch—dealer’s choice), then layer lettuce, chicken, sliced tomato, cucumber, onion (optional), and cheese (feta, cheddar, or whatever you like). Season with salt, pepper, and any spices you like. (ex. paprika, or chili flakes)",
    ],
    steps2: [
      "3. Wrap it tight: Fold the sides in, then roll it from the bottom up into a snug wrap. You can toast it in a pan for extra crunch or eat it fresh.",
      "4. Slice & serve: Cut it in half on the diagonal (for ✨aesthetic✨), and serve with extra sauce or a side salad if you’re feeling it.",
    ],
  },
  {
    id: "recipe11",
    title: ["Chicken", "Teriyaki"],
    image: "image/lunchpic10.png",
    ingredients: [
      { name: "Chicken breast", quantity: 200, unit: "g" },
      { name: "Garlic", quantity: 1, unit: "clove" },
      { name: "Soy sauce", quantity: 2, unit: "tbsp" },
      { name: "Honey", quantity: 1, unit: "tbsp" },
      { name: "Rice vinegar", quantity: 1, unit: "tbsp" },
      { name: "Sesame oil", quantity: 1, unit: "tbsp" },
      { name: "Cooked rice", quantity: 100, unit: "g" },
    ],
    descriptiontitle: ["Chicken Teriyaki is your weeknight cheat code."],
    description: [
      "It’s sweet, savory, and sticky in all the right ways. Juicy chicken glazed in a shiny, umami-rich sauce, usually paired with fluffy rice and maybe some veggies? Yeah, it’s a certified crowd-pleaser—and takes like 20 minutes, tops. Restaurant vibes, zero effort.",
    ],
    steps1: [
      "1. Mix the sauce: In a small bowl, combine soy sauce, honey, vinegar, garlic, and water. Set aside. ",
      "2. Cook the chicken: Heat oil in a pan over medium-high heat. Add chicken and cook until golden and cooked through (about 5–7 minutes).",
    ],
    steps2: [
      "3. Add sauce & glaze: Pour the teriyaki sauce into the pan. Let it simmer for 1–2 minutes, then stir in the cornstarch slurry to thicken the sauce. Toss to coat the chicken evenly.",
      "4. Serve it up: Spoon over rice, add veggies if you’ve got 'em, and sprinkle with sesame seeds and chopped green onion.",
    ],
  },
  {
    id: "recipe12",
    title: ["Ham", "Sandwich"],
    image: "image/lunchpic11.png",
    ingredients: [
      { name: "Bread", quantity: 2, unit: "slices" },
      { name: "Butter, softened", quantity: 1, unit: "tbsp" },
      { name: "Grated Cheese", quantity: 1 / 4, unit: "cup" },
      { name: "Ham", quantity: 3, unit: "slices" },
      { name: "Tomato", quantity: 4, unit: "slices" },
      { name: "Pickles", quantity: 7, unit: "slices" },
    ],
    descriptiontitle: ["Ham Sandwiches are pure, golden comfort."],
    description: [
      "They’re salty, buttery, and just the right kind of indulgent. Think melty cheese, savory ham, and perfectly toasted bread—simple, satisfying, and ready in 10 minutes flat. Ideal for lunch, late-night cravings, or whenever you need a little crunch + cozy.",
    ],
    steps1: [
      "1. Prep the bread: Spread butter on one side of each bread slice (sourdough, white, rye—your call). (That’ll be the outside.)",
      "2. Assemble the sandwich: On the unbuttered side, layer cheese (cheddar, Swiss, mozzarella, or whatever melts well), ham, and any extras you like. Top with the second slice, buttered side facing out. (Optional extras – mustard, mayo, salad or a pinch of black pepper)",
    ],
    steps2: [
      "3. Grill it up: Place in a hot nonstick skillet over medium heat. Cook for 2–4 minutes per side, pressing down gently with a spatula, until the bread is golden and the cheese is melty.",
      "4. Slice & serve: Cut in half (diagonally), and eat immediately while it’s hot and gooey.",
    ],
  },
];
